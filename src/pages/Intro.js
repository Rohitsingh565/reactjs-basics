import React from 'react'
import SideBar from '../components/SideBar'
import ImageSwapper from '../components/ImageSwapper'
import NavigationBar from '../components/NavigationBar'

const Intro = () => {
  return (
    <div className='introPage' style={{display: "flex", }}>
      <div style={{width:"250px"}}>
        <div style={{backgroundColor:"darkgrey", width:'500px', height:'75px'}}></div>
      <SideBar/>
      </div>
      <div style={{display:"flex",flexDirection:"column"}}>
        <div style={{position:'fixed'}}>
        <NavigationBar/>
        </div>
    
      <div >
          <div style={{marginLeft:"600px", marginTop:"130px"}}>
          <ImageSwapper/>
          <div style={{marginLeft:"110px" , fontSize:"28px", fontFamily:"roboto",fontWeight:"600" ,color:"white", marginTop:"20px"}}>
            Rohit Singh
          </div>
          </div>
        </div>
         <div className='introText' style={{color:"white",width:"1000px", height:"370px", marginLeft:"300px" , marginTop:"50px", border:"5%"}}>
          <div style={{padding:"30px"}}>
          Hello! I'm an enthusiastic and driven individual with a thirst for knowledge and a love for exploration. With a diverse background in [mention your relevant background or field], I bring a unique blend of skills and experiences to the table. I thrive in dynamic environments and enjoy tackling challenges head-on, leveraging my problem-solving abilities and creativity to find innovative solutions.

Collaboration is at the heart of my work philosophy. I strongly believe that great things are achieved through the collective efforts of a team. I enjoy collaborating with individuals from different backgrounds, as their diverse perspectives inspire fresh ideas and foster growth. Together, we can achieve remarkable results and make a meaningful impact.

Outside of my professional pursuits, I have a range of hobbies and interests that keep me engaged. Whether it's immersing myself in the world of literature, exploring new destinations, or delving into the realm of photography, I find joy in seeking new experiences and expanding my horizons.

I am motivated by the desire to make a positive impact, both personally and professionally. I continuously seek opportunities for growth, pushing myself to learn and develop new skills. I believe that personal growth is a lifelong journey, and I am committed to embracing it fully.

In summary, I am an inquisitive individual with a passion for growth, collaboration, and making a difference. I approach each day with a sense of curiosity and excitement, ready to embrace new challenges and contribute my best to the world around me.

          </div>

         </div>
      </div>
      
    </div>
  )
}

export default Intro