import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './Componenets/Navigation';
import Overview from './Componenets/Overview';
import Patients from './Componenets/Patients';
import Schedule from './Componenets/Schedule';
import Message from './Componenets/Message';
import Transaction from './Componenets/Transaction';
import PatientsDeatails from './Componenets/PatientsDeatails';
import BloodPressureChart from './Componenets/ BloodPressureChart';


function App() {
  const [selectedPatientId, setSelectedPatientId] = useState(null);
  const [bloodPressureData, setBloodPressureData] = useState([]);


  const handleSelectPatient = (patientId) => {
    setSelectedPatientId(patientId);
    const mockData = [
      {
        "month": "January",
        "year": 2024,
        "blood_pressure": {
          "systolic": { "value": 120, "levels": "Normal" },
          "diastolic": { "value": 80, "levels": "Normal" }
        }
      },
      {
        "month": "February",
        "year": 2024,
        "blood_pressure": {
          "systolic": { "value": 130, "levels": "Slightly Elevated" },
          "diastolic": { "value": 85, "levels": "Normal" }

          
        }
      },
      {
        "month": "March",
        "year": 2024,
        "blood_pressure": {
          "systolic": { "value": 160, "levels": "Higher than Average" },
          "diastolic": { "value": 78, "levels": "Lower than Average" }
        }
      },
      
    ];
    setBloodPressureData(mockData);

   

  };

  return (
    
    <div className="App">
    <Router>
      <Navigation />
      <div className="content">
        <Patients onSelectPatient={handleSelectPatient} />
        <div className="details">
          {selectedPatientId && <PatientsDeatails patientId={selectedPatientId} />}
        </div>
        <div className="chart">
            <BloodPressureChart data={bloodPressureData}/>
          </div>
      </div>
      <Routes>
        <Route path="/overview" element={<Overview />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/message" element={<Message />} />
        <Route path="/transaction" element={<Transaction />} />
      </Routes>
    </Router>
  </div>
      
  );
}

export default App;
