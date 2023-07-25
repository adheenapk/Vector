
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import vux from '../assets/vux.png'

const Container = styled.div` margin: 0px;
padding: 0px;

.im img{
  background-image: url(${vux});
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: 100% 100%;
    height: 60vh;
    width: 100%;
  
}
.vect{
  position: absolute;
  top: 250px;
  left: 300px;
  color:white;
  font-size: 80px;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif ;
  font-weight: 900;
  word-spacing: 2px;
}
span{
  color:#63E7DA;
}
.we{
  position: absolute;
  top: 330px;
  left: 400px;
  color:white;
  font-size: 20px;
  font-weight: 200;
  font-family: 'Merienda';
}
@media screen and (max-width:600px){
  height:40vh ;
  background-color: #191A1D;
  .im img{
display: none;
  
}
  .vect{
  position: absolute;
  top: 150px;
  left: 90px;
  color:white;
  font-size: 50px;
  font-weight: 900;
  word-spacing: 2px;
}
.we{
  position: absolute;
  top: 200px;
  left: 145px;
  color:white;
  font-size: 1px;
  font-weight: 200;
  font-family: 'Merienda';
}
}
`;

const Header_first = () => {
   
    return (
      <>
      <Container>
       
          
<div className='im'>
<img src={vux}></img>
<div className='vect' id='home'>VECTOR<span>UX</span></div>
<div className='we'>we ideate,create <span>&</span> innovate</div>
</div>


      </Container>
        </>
        )
}

export default Header_first