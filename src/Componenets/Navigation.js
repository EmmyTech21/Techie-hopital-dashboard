import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../HealthCare Dashboard/TestLogo.png';
import home from '../HealthCare Dashboard/home_FILL0_wght300_GRAD0_opsz24@2x.png';
import group from '../HealthCare Dashboard/group_FILL0_wght300_GRAD0_opsz24@2x.png';
import calendar from '../HealthCare Dashboard/calendar_today_FILL0_wght300_GRAD0_opsz24@2x.png';
import chat from '../HealthCare Dashboard/chat_bubble_FILL0_wght300_GRAD0_opsz24@2x.png';
import creditCard from '../HealthCare Dashboard/credit_card_FILL0_wght300_GRAD0_opsz24@2x.png';
import user from '../HealthCare Dashboard/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc@2x.png'
import setting from '../HealthCare Dashboard/settings_FILL0_wght300_GRAD0_opsz24@2x.png'
import dash from '../HealthCare Dashboard/more_vert_FILL0_wght300_GRAD0_opsz24@2x.png';
const Navlinks = [
  { title: 'Overview', path: '/overview', logo: home},
  { title: 'Patients', path: '/patients',logo: group},
  { title: 'Schedule', path: '/schedule',logo:calendar},
  { title: 'Message', path: '/message',logo: chat},
  { title: 'Transaction', path: '/transaction',logo:creditCard},
];

export default function Navigation() {
 
  return (
       <nav >
      <img className="avatar" src={Logo} alt="Avatar" />
        <ul>
          {Navlinks.map((link, index) => (
            <li key={index}>
              <span>
                <img src={link.logo} alt='Avatar'/>
                <Link to={link.path}>{link.title}</Link>
              </span>
            </li>
          ))}
          
        </ul>
      <div className='setting-icon'>
          <img src={user}alt='general' />
          <h6>Dr.jose simmons</h6>
          <p>General Practitioner</p>
          <img src={setting} alt='setting-icon'/>
          <img src={dash} alt='vert'/>
        </div>
    </nav>
   
    
  )
}
