import React, { useEffect, useState } from 'react';
import BirtIcon from '../HealthCare Dashboard/BirthIcon.png'
import Flameicon from '../HealthCare Dashboard/FemaleIcon.png'
import PhoneIcon from '../HealthCare Dashboard/PhoneIcon.png'
import PhoneCall from '../HealthCare Dashboard/PhoneIcon.png'
import Insurance from '../HealthCare Dashboard/InsuranceIcon.png'
import arrow from '../HealthCare Dashboard/download_FILL0_wght300_GRAD0_opsz24 (1).png'
export default function PatientDetails({ patientId }) {
  const [patient, setPatient] = useState(null);

  const getPatient = async () => {
    try {
      const res = await fetch(`http://localhost:9000/patients/`);
      const data = await res.json();
      setPatient(data);
      console.log(data)
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    if (patientId) {
      getPatient();
    }
  }, [patientId]);


  return (
    <div className='container-profile'>
      {patient ? (
        <div>
           
          {patient.map((user,index)=>{
          return  <div className='profile-setup' key={index}>
            <img alt='Profile-pics'className='profile-pics' src={user.profile_picture}/>
            <h2>{user.name}</h2>
              <div className='profile-about'>
            <img alt='brith' src={BirtIcon}/>
            <div className='profile-text'>
            <h4> Date Of Birth</h4>
            
              <p>{user.date_of_birth}</p>
              </div>
              </div>
              <div className='profile-about'>
              <img alt='icon' src={Flameicon}/>
              <div className='profile-text'>
            <h4>Gender</h4> 
            <h4>{user.date_of_birth}</h4>
            </div>
            </div>
            <div className='profile-about'>
            <img alt='conact icon' src={PhoneIcon}/>
            <div className='profile-text'>
            <h4>Contact Info</h4>
            <p>{user.date_of_birth}</p>
            </div>
            </div>
            <div className='profile-about'>
            <img alt='phoneicon' src={PhoneCall}/>
            <div className='profile-text'>
            <h4>Emergency Contacts</h4>
            <p>{user.date_of_birth}</p>
            </div>
            </div>
            <div className='profile-about'>
            <img alt='induranse' src={Insurance}/>
            <div className='profile-text'>
            <h4>Insurance Health Assurance</h4>
            <p>{user.date_of_birth}</p>
            </div>
            </div>
            <button>Show All Information</button>

            <div>
        <h4>Lap Result</h4>
        <div className='table-test'>
        <p>Blood Test</p>
        <img alt='arrow' src={arrow}/>
        </div> 
        <div className='table-test'>
        <p>CT scan</p>
      <img src={arrow}/> 
        </div>
         <div className='table-test'>
         <p>Radiology reports</p>
        <img src={arrow}/>

         </div>
        <div className='table-test'>
        <p>X-Rays</p>
        <img src={arrow}/>
        </div>
        <div className='table-test'>
        <p>Urine Test</p>
        <img src={arrow}/>

        </div>
      </div>
         </div>

          
          })}
        </div>
      ) : (
        <p>Loading patient details...</p>
      )}

      
    </div>
  );
}
