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
  white-space:nowrap;
  overflow: hidden;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`
const Role = styled.div`
  color: #ccc;
  font-weight: 300;
  margin: 6px 0;
  maxLength
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`

const AxiosCard = ({
  title,
  id,
}) => (
  <div className='teamCardStyle' style={{width:'600px', height:'120px', marginTop:'20px', marginLeft:'110px'}}>
  <StyledContainer>
    <div style={{display:'flex'}}>
    <div>
    <Title>{title}</Title>
    <Role>{id}</Role>

    </div>
    </div>
  </StyledContainer>

  </div>
)
export default AxiosCard
