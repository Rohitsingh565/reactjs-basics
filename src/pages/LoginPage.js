import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../redux/UserAction';
import SideBar from '../components/SideBar';
import NavigationBar from '../components/NavigationBar';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow, MDBTypography } from 'mdb-react-ui-kit';
import TextField from '@material-ui/core/TextField'
import { useNavigate } from "react-router-dom";


const LoginPage = ({ addUser }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const user = {
        name,
        email,
      };
      addUser(user);
      // path ='/newUser';
      // navigate("/newUsers");

      // console.log()
    };
  
    return (
        <div>
      <div style={{display:"flex" }}>
     
      <div style={{width:"250px"}}>
        <div style={{backgroundColor:"darkgrey", width:'500px', height:'75px'}}></div>
      <SideBar/>
      </div>
      <div>
      <div style={{position:'fixed'}}>
        <NavigationBar/>
        </div>
     <div style={{fontSize:'28px', color:'white', fontWeight:'700' , marginTop:"115px", marginLeft:'100px'}}>
       Enter your details
      </div>
      <div style={{height:'792px'}}>

        <form onSubmit={handleSubmit}>
          <div style={{marginLeft:'600px', marginTop:'50px', marginTop:'110px'}}>
            <TextField   onChange={(e) => setName(e.target.value)} value={name} id="filled-basic" label="Full name" variant="filled" style={{backgroundColor:'lightgrey'}}/>

          </div>
          <div style={{color:'blue', marginTop:'30px',marginLeft:'600px', }}>
                        <TextField  type="email"  onChange={(e) => setEmail(e.target.value)} value={email} id="filled-basic" label="Email id" variant="filled" style={{backgroundColor:'lightgrey'}}/>

          </div>
          <button  style={{marginTop:'30px', marginLeft:'670px', border:'2px', backgroundColor:'lightgreen', borderRadius:'5px', width:'100px', height:'30px'}} type="submit">Submit</button>

        </form>
        </div>
        </div>
      </div>
    </div>
       
    );
  };
  
  export default connect(null, { addUser })(LoginPage);
  