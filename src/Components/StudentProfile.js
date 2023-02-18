import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import Base from '../Base/Base'

const StudentProfile = ({studentsData}) => {
    const history=useHistory();
    const {id} = useParams();
    const student = studentsData[id]
    useEffect(()=>{
        if(!localStorage.getItem("user-name"))
        history.replace("/login")
        },[])
  return (
    <Base
    title="Student Profile"
    description= "Inidividual Student Details"
    >
      <div className='profile-div'>
        <h1>Studen-Profile </h1>
        <h2>Studnet Name: {student.name}</h2>
        <p> Gender: {student.gender} </p>
        <p>Batch : {student.batch} </p>
        <p>Years of  Experience: {student.yearsOfExperience}</p>
      </div>
    </Base>
  )
}

export default StudentProfile