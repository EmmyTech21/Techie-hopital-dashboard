import React from 'react'
import { patientsData } from '../patientdata'


export default function Patients({ onSelectPatient }) {
  return (
    <div className='_patients_profile'>
      <ul className='_profile'>
      {patientsData.map((profile,index)=> {
      return  <li key={profile.id} onClick={()=> onSelectPatient(profile.id)}>
        
        <div className='_Profile-details'>
        <img src={profile.image} alt=''/>
        <div className='profile-text'>
        <h3>
            {profile.name}
          </h3>
          <p>{profile.gender} <span>{profile.age}</span></p> 
         
        </div>
         
        </div>
         
        </li>
      })}
      </ul>
  
    </div>
  )
}




 
