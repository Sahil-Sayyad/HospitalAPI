# Hospital API

 <b> An API for the doctors of a Hospital which has been allocated by the
govt for testing and quarantine + well being of COVID-19 patients <b> 

## Table of Contents
-  <b> [Features](#features)</b>
-  <b> [Getting Started](#getting-started)</b>
-  <b> [Tech Stack](#Tech-Stack) </b>
-  <b> [Author](#Author)</b>

## Features
-  <b> Doctors can Register </b>
-  <b> Doctors can log in and returns JWT Token </b>
-  <b> Doctor can register the patient </b>
-  <b> If the patient already exists, just returns the patient info</b>
-  <b> After the checkup, creates a Report</b>
-  <b> Lists all the reports of a patient oldest to latest</b>
-  <b> Lists all the reports of all the patients filtered by a specific status</b>

## Getting Started
-  <b> 1. &nbsp; Clone Git Repo  </b>
    <br>----<i> git clone https://github.com/Sahil-Sayyad/HospitalAPI.git </i><br><br>
-  <b> 2.  &nbsp;Install NPM dependencies </b>
   <br>----<i> npm install</i> <br><br>
-  <b> 3. &nbsp; Then simply start your app </b>
   <br>----<i>npm start </i><br><br>


### Prerequisites
- <b>NodeJs Any Version</b>

### Usage
<b>Instructions how to use this Hospital API Routes </b> <br><br>
-  <b> 1. &nbsp; /doctors/register  method should be [POST] </b>
    <br>----<i> Fill data with email , name , password, confirmPassword . </i><br><br>
-  <b> 2. &nbsp; /doctors/login  method should be [POST] </b>
   <br>----<i>  Fill data with registered email and password. </i><br><br>
-  <b> 3. &nbsp; /patients/register method should be [POST]  </b>
   <br>----<i>  Fill data with name , age, phone, address , regestered doctorEmail. </i><br><br>
-  <b> 4. &nbsp; /patients/:id/create_reportmethod should be [POST]  </b>
   <br>----<i> Fill data with status , date and  status can be [Negative, Travelled-Quarantine, Symptoms-Quarantine,
Positive-Admit] and send patient id in params.</i> <br><br>
-  <b> 5. &nbsp; /patients/:id/all_reports method should be [GET] </b>
   <br>----<i>  Only send the patient id in params. </i><br><br>
-  <b> 6. &nbsp; /reports/:id/status method should be [GET] </b>
   <br>----<i>  Fill data with status and send the patient id in params.</i> <br><br>


## Tech Stack

-  <b> Node.js</b>
-  <b> Express.js </b>
-  <b> Passport.js </b>
-  <b> MongoDB </b>
-  <b> Mongoose </b>
-  <b> Postman </b>
## Author

- Name: Sahil Sayyad
- GitHub: [!](https://github.com/Sahil-Sayyad)]
- Email: []
- Website: []
