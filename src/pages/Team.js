import React from 'react'
import Sidebar from '../components/SideBar'
import Card from '../components/Card'
import { FaCommentAlt, FaThumbsUp, FaRegEye } from 'react-icons/fa'
import styles from './AllPages.css'
import NavigationBar from '../components/NavigationBar'

const Team = () => {
  const date = new Date().toLocaleDateString()


  return (
    <div>
      <div style={{display:'flex', flexDirection:"row"}}>
      <div style={{width:"250px"}}>
        <div style={{backgroundColor:"darkgrey", width:'500px', height:'75px'}}></div>
      <Sidebar/>
      </div>
      <div>
      <div style={{position:'fixed'}}>
        <NavigationBar/>
        </div>
        <div className='teamlist'>
     
      
     <Card
      title="Shivani Gupta"
      role="SDE-2"
      description="Green apples have a high fiber content which helps in increasing the
  body's metabolism. While consuming an apple, make sure that you're not
  tossing the peel in the trash. Consuming apple with its peel improves
  the overall health. Due to its high fiber content, apple helps in
  detoxification process. It keeps the liver and digestive system away
  from harmful elements."
    imageURL="https://arthmategroup.keka.com/files/b8a7fe08-dfad-45bb-b4e8-37a741f725f6/200x200/profileimage/92d6f5cbd6124fcab53e8474928d1e48.jpeg"
    />
     <Card
      title="Gopi Kartheek"
      role="SDE-1"
      description="Green apples have a high fiber content which helps in increasing the
  body's metabolism. While consuming an apple, make sure that you're not
  tossing the peel in the trash. Consuming apple with its peel improves
  the overall health. Due to its high fiber content, apple helps in
  detoxification process. It keeps the liver and digestive system away
  from harmful elements."
    imageURL="https://arthmategroup.keka.com/files/b8a7fe08-dfad-45bb-b4e8-37a741f725f6/200x200/profileimage/8d714ee5cfe6483289f8d269f9af1c54.jpg"
    />
 
     <Card
      title="Prarabdha Soni"
      role="SDE-1"
      description="Green apples have a high fiber content which helps in increasing the
  body's metabolism. While consuming an apple, make sure that you're not
  tossing the peel in the trash. Consuming apple with its peel improves
  the overall health. Due to its high fiber content, apple helps in
  detoxification process. It keeps the liver and digestive system away
  from harmful elements."
    imageURL="https://arthmategroup.keka.com/files/b8a7fe08-dfad-45bb-b4e8-37a741f725f6/200x200/profileimage/cddd7077526a4e3397e7732695afaf11.jpeg"
    />
    </div>       

      </div>
      </div>
      
    </div>
  )
}

export default Team