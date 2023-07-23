//import required packages
const Report = require("../models/report");
const Doctor = require("../models/doctor");
const Patient = require("../models/patient");
/*3./patients/register  ---> with phone ,name, age ,address ,doctor email */
module.exports.Register = async (req, res) => {
  try {
    const { phone, name, age, address, doctorEmail } = req.body;

    console.log("req", req.body);
    //handle the edge cases / errors
    if (!phone || !name || !age || !doctorEmail) {
      return res.status(400).json({
        message: "Please Fill the All the Required Fields!!",
        data: {},
      });
    }

    if (age < 0) {
      return res.status(400).json({
        message: "The age must be greater than 0",
        data: {},
      });
    }
    // check if the patient info already exists or not using phone no.
    let patient = await Patient.findOne({ phone: phone });

    if (!patient) {
      let doctor = await Doctor.findOne({ email: doctorEmail });
      //if everything goes well then create docter
      const createdPatient = await Patient.create({
        phone,
        name,
        age,
        address,
        doctor: doctorEmail,
      });
      doctor.patients.push(createdPatient);
      doctor.save();
      return res.status(201).json({
        message: "Record Created Sucessfully",
        data: createdPatient,
      });
    } else {
      return res.status(302).json({
        message: "patient info already exists",
        data: patient,
      });
    }
  } catch (err) {
    // Log the error to the console for debugging
    console.error("Error while creating record: ", err);
    return res.status(500).json({
      message: "Something went wrong while creating record ",
      data: { err },
    });
  }
};
/*4./patients/:id/create_report ---> created report of patient with test name*/
//create patient report by doctor
module.exports.Create = async (req, res) => {
  try {
    let isTrue = false;
    //get the patient id and doctor id patient status and date
    const { status, date } = req.body;
    const patientID = req.params.id;

    //handle the edge cases / errors

    if (!status || !date) {
      return res.status(400).json({
        message: "Please Fill the All the Required Fields!!",
        data: {},
      });
    }

    //find the patient first for store the reports
    let patient = await Patient.findById(patientID);

    if (!patient) {
      return res.status(404).json({
        message: "Patient not found with the provided ID",
        data: {},
      });
    }

    //check the user has docters patient
    let doctor = await Doctor.findOne({ email: patient.doctor });
    // let doctor = await Doctor.find({});
    if (!doctor) {
      return res.status(400).json({
        message: "Doctor not found with the patient's doctor email",
        data: {},
      });
    }
    // check if the user has doctors patient
    if (doctor.patients.includes(patient._id)) {
      isTrue = true;
    }

    // generate a report
    if (patient && isTrue) {
      const createdReport = await Report.create({
        status: status,
        date: date,
        doctor: doctor.name,
        patient: patient.name,
      });

      patient.reports.push(createdReport);
      patient.save();
      return res.status(201).json({
        message: "Record Created Sucessfully",
        data: createdReport,
      });
    } else {
      return res.status(400).json({
        message: "Patient not associated with the provided doctor",
        data: {},
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: "Something went wrong while creating record ",
      data: { err },
    });
  }
};
/*5./patients/:id/all_reports  ---> fecths all the reports of a patients filtered by a specfic status */
//fetching all reports of patients
module.exports.allReports = async (req, res) => {
  try {
    let patientID = req.params.id;
    const status = req.body;
    let patient = await Patient.findById(patientID).populate("reports");
    let formattedReport = [{}];
    for (let report of patient.reports) {
      if (report.status === status["status"]) {
        formattedReport.push(report);
      }
    }
    return res.status(201).json({
      message: "List Of All Reports",
      data: formattedReport,
    });
  } catch (err) {
    console.log("error in report fetch", err);
    return res.status(500).json({
      message: "Something went wrong while creating record ",
      data: { err },
    });
  }
};
