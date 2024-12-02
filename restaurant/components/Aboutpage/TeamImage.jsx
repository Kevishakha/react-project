import React from 'react'
import "./About.css"
import { chef } from "../../assets/assests";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

function TeamImage() {
    const teamMembers = [
        {
          name: "John Doe",
          role: "Head Chef",
          image: chef.chef1,
        },
        {
          name: "Jane Smith",
          role: "Manager",
          image: chef.chef2,
        },
        {
          name: "Michael Johnson",
          role: "Sous Chef",
          image: chef.chef3,
        },
        {
            name: "John Doe",
            role: "Head Chef",
            image: chef.chef1,
          },
          {
            name: "Jane Smith",
            role: "Manager",
            image: chef.chef2,
          },
          {
            name: "Michael Johnson",
            role: "Sous Chef",
            image: chef.chef3,
          },
      ];
  return (
    <>
    
    <div className="team ">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member xs:flex-row bounce ">
              <div className='team-member-img relative'>
              <img src={member.image} alt={member.name} />
              <div className=' opacity absolute top-0  flex flex-col justify-center gap-3 h teamhover '>
                  <h3 className='text-[16px] text-white '>{member.name}</h3>
                  <ul className=' text-white  flex flex-row justify-center gap-2 '>
                    <li><a><FaFacebook/></a></li>
                    <li><a><FaTwitter/></a></li>
                    <li><a><FaSquareInstagram/></a></li>
                  </ul>
                </div>
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              

              
            </div>
          ))}
        </div>
    
    </>
  )
}

export default TeamImage