import {React, useState, useEffect} from 'react'
import Sidebar from '../components/SideBar'
import NavigationBar from '../components/NavigationBar'
import axios from 'axios';
import AxiosCard from '../components/AxiosCard';

const About = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      setData(response.data);
    } catch (error) {
      console.log('Error:', error);
    }
  };


  return (
    <div>
      <div style={{display:"flex" }}>
     
      <div style={{width:"250px"}}>
        <div style={{backgroundColor:"darkgrey", width:'500px', height:'75px'}}></div>
      <Sidebar/>
      </div>
      <div>
      <div style={{position:'fixed'}}>
        <NavigationBar/>
        </div>
<div style={{fontSize:'28px', color:'white', fontWeight:'700' , marginTop:"115px", marginLeft:'100px'}}>
       Who are we
      </div>
        <div style={{fontSize:'25px', color:'white', fontWeight:'500' , marginTop:"55px", marginLeft:'100px', marginBottom:'67px'}}>
        At-scale credit marketplace for digital lending
        <br/>
In-house end-to-end digital lending infrastructure
<br/>
Customized lending products tailored to partner needs
<br/>
Partnerships with banks/NBFCs for co-lending
<br/>
Partnerships with fintechs, digital platforms and SME Anchors
to source end borrowers
<br/>
Microservices enabled plug-n-play API based lending stack
<br/>
Loan origination and loan management systems
<br/>
Value added digital India-stack services such as Bureau, cKYC,
PAN, Aadhar, AA bank statement analyzer
<br/>
Enables digital lending within a short time frame of 2 weeks
<br/>
In-house risk engine to underwrite modern risk
<br/>
Uses data from traditional and alternate sources such as SMS,
email, utilities etc
<br/>
Enables the company to create profitable credit products for
its customers
<br/>
Provides advanced analytics-based risk management services such
as application scorecards, early warning systems etc


        </div>
        <div style={{fontSize:'20px', color:'white', fontWeight:'700' , marginTop:"115px", marginLeft:'100px', color:'blue'}}>
          Data fetched from mock api
        </div>
        <div>
        {data.map((item) => (
          <AxiosCard title={item.title.substring(0,30)} id={item.id} />
          // <li key={item.id}>{item.title}</li>
        ))}
        </div>
      </div>
    </div>
       
    </div>
  )
}

export default About