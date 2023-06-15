import React from 'react'
import { connect } from 'react-redux';
import SideBar from '../components/SideBar';
import NavigationBar from '../components/NavigationBar';

const NewUsers = ({user}) => {
    return (
        <div>
        <div style={{display:"flex" }}>
       
        <div style={{width:"250px"}}>
          <div style={{backgroundColor:"darkgrey", width:'500px', height:'75px'}}></div>
        <SideBar/>
        </div>
        <div style={{height:'950px'}}>
        <div style={{position:'fixed'}}>
          <NavigationBar/>
          </div>
  <div style={{fontSize:'28px', color:'white', fontWeight:'700' , marginTop:"115px", marginLeft:'200px'}}>
         Welcome to the team
        </div>
        <div style={{marginLeft:'200px', marginTop:'50px'}}>
          {user && (
            <div style={{color:'white', fontSize:'20px', fontWeight:'500'}}>
              Name: {user.name}
            </div>
          )}

        </div>
        <div style={{color:'white' , marginLeft:'200px', marginTop:'50px',fontWeight:'500'}}>
        {user && (
            <div style={{color:'white',  fontSize:'20px'}}>
              Email: {user.email}
            </div>
          )}
        
        </div>
        </div>
      </div>
         
      </div>
  
      );
    }
    const mapStateToProps = (state) => {
        return {
          user: state.user,
        };
      };
      
      export default connect(mapStateToProps)(NewUsers);
      