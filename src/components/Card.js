import React from 'react'
import styled from 'styled-components'
import styles from './Card.css'
const StyledContainer = styled.div`
  border: ${(props) => `1px solid `};
  padding: 25px 12px 18px;
  background: ${(props) => `linear-gradient(
    45deg, , n}
  )`};
`
const Title = styled.h2`
  color: #fff;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`
const Role = styled.div`
  color: #ccc;
  font-weight: 300;
  margin: 6px 0;
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`
const Description = styled.p`
  color: #fff;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`

const Card = ({
  title,
  role,
  description,
  imageURL
}) => (
  <div className='teamCardStyle' style={{width:'600px', height:'300px', marginTop:'50px', marginLeft:'30px'}}>
  <StyledContainer>
    <div style={{display:'flex'}}>
    <div>
    <img style={{borderRadius:"50%", margin:"20px"}} width={150} height={150} src={imageURL} />
    </div>
    <div>
    <Title>{title}</Title>
    <Role>{role}</Role>
    <Description>{description}</Description>

    </div>
    </div>
  </StyledContainer>

  </div>
)
export default Card
