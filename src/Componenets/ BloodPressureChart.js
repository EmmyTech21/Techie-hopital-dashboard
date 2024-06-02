// BloodPressureChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import resp from '../HealthCare Dashboard/respiratory rate.png';
import hearts from '../HealthCare Dashboard/HeartBPM.png';
import tempts from '../HealthCare Dashboard/temperature.png'
// Register the required components with Chart.js
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

export default function BloodPressureChart({ data }) {
  const months = data.map(entry => `${entry.month} ${entry.year}`);
  const systolicValues = data.map(entry => entry.blood_pressure.systolic.value);
  const diastolicValues = data.map(entry => entry.blood_pressure.diastolic.value);

  const chartData = {
    labels: months,
    datasets: [
      {
        label: 'Systolic Blood Pressure',
        data: systolicValues,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: '#F4F0FE',
        borderWidth: 1,
      },
      {
        label: 'Diastolic Blood Pressure',
        data: diastolicValues,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderWidth: 1,
      },
    ],
  };
  const heart= {"heart_rate": {
    "value": 78,
    "levels": "Lower than Average"
  },
  "respiratory_rate": {
    "value": 20,
    "levels": "Normal"
  },
  "temperature": {
    "value": 98.6,
    "levels": "Normal"
  },

  "diagnostic_list": [
    {
      "name": "Hypertension",
      "description": "Chronic high blood pressure",
      "status": "Under Observation"
    }
  ],
  }
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Blood Pressure Over Time',
      },
    },

    
  };



  return <div className='charts'>
    <Line className='cha' data={chartData} options={options} />;

    <div className='heart_container'>
     <div className='heart_de color1'>
      <img src={resp} />
      <p>Respirtory Rate</p>
      <h3>{heart.respiratory_rate.value}bpm</h3>
      <p>{heart.respiratory_rate.levels}</p>
     </div>
     <div className='heart_de color2'>
      <img src={tempts} />
      <p>Respirtory Rate</p>
      <h3>{heart.temperature.value}bpm</h3>
      <p>{heart.temperature.levels}</p>
     </div>
     <div className='heart_de color3'>
      <img src={hearts} />
      <p>Respirtory Rate</p>
      <h3>{heart.heart_rate.value}bpm</h3>
      <p>{heart.heart_rate.levels}</p>
     </div>
    </div>

    <div className='table-1'>
              <h3>Diagnostic List</h3>
             <table>
             <tr className='table-row'>
              <th>Problem/Diagnosis</th>
              <th>Description</th>
              <th>Status</th>
             </tr>
               <tr>
                <td>{heart.diagnostic_list[0].name}</td>
                <td>{heart.diagnostic_list[0].description}</td>
                <td>{heart.diagnostic_list[0].status}</td>
               </tr>
               <tr>
                <td>Type 2 Diabetes</td>
                <td>Insulin resistance and elevated blood sugar</td>
                <td>Cured</td>
               </tr>
               <tr>
                <td>{heart.diagnostic_list[0].name}</td>
                <td>{heart.diagnostic_list[0].description}</td>
                <td>{heart.diagnostic_list[0].status}</td>
               </tr>
             </table>
          </div> 
  </div>
}
