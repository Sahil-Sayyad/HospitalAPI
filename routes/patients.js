//import required packages
const express = require('express');
const router = express.Router();
// importing patient controller for particular endpoint
const patientsController = require('../controller/patients_Controller');
/*3./patients/register  ---> with phone ,name, age ,address ,doctor email */
router.post('/register', patientsController.Register);
/*4./patients/:id/create_report ---> created report of patient with test name*/
router.post('/:id/create_report', patientsController.Create);
/*5./patients/:id/all_reports  ---> fecths all the reports of a patients */
router.get('/:id/all_reports', patientsController.allReports);
/*5./patients/:id/all_reports  ---> fecths all the reports of a patients filtered by a specfic status */
router.get('/:id/status', patientsController.Status);

module.exports = router;