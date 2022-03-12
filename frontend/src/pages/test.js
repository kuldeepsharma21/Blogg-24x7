
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import FormInput from './FormInput'
import  './FormInput.css'

function App() {
  const [values,setValues]=useState({
    username:'',
    email:'',
    contact:'',
    password:'',
    confirmPassword:'',

  })
  const inputs=[
    {
      id:1,
      name:'username',
      type:"text",
      placeholder:"Username",
      errorMessage:"Username should contain alphabets only",
      label:"Username",
      pattern:"^[A-Za-z]{3,16}$",
      required:true
    },
    {
      id:2,
      name:'email',
      type:"email",
      placeholder:"Email",
      errorMessage:"It should be a valid email address",
      label:"Email",
      pattern:"^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$",
      required:true
    },
    {
      id:3,
      name:'contact',
      type:"text",
      placeholder:"Contact",
      errorMessage:"10 digits only",
      label:"Contact",
      pattern:"^[6-9][0-9]{9}$",
      required:true
    },
    {
      id:4,
      name:'password',
      type:"text",
      placeholder:"Password",
      errorMessage:"Password should be 8-20 characters and include atleast 1 aphabet, 1 number and 1 special character",
      label:"Password",
      pattern:"^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
      required:true
    },
    {
      id:5,
      name:'confirmPassword',
      type:"text",
      placeholder:"Confirm Password",
      errorMessage:"Passwords don't match",
      label:"Confirm Password",
      pattern: values.password,
      required:true
    }
  ]
  const navigate = useNavigate();
  const handlesubmit=(e)=>{
    e.preventDefault();
  }
  const onChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value})
  }


  console.log(values);


 

  const AddDetailsinfo =async(e)=>{
    e.preventDefault();
    let formField=new FormData()
    formField.append('username',values.username)
    formField.append('email',values.email)
    formField.append('contact',values.contact)
    formField.append('password',values.password)
    formField.append('confirm_password',values.confirm_password)

    


    await axios({
      method:'post',
      url:'http://127.0.0.1:8000/details/',
      data:formField
    }).then((response)=>{
      console.log(response.data);
      navigate('/');
    })
  }


  return (
    <div className="Appp">
        <form action="" onSubmit={AddDetailsinfo}>
          <h1>Register</h1>
          {inputs.map((input)=>(
              <FormInput key={input.key} {...input} value={values[input.name]} onChange={onChange}/>
              
          ))
            
          }
          <button>Submit</button>
          
          
        </form>
      </div>
  )
}

export default App