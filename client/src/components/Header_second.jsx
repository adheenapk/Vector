
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'

const Container = styled.div` margin: 0px;
padding: 0px;
background-color:#191A1D;
height: 55vh;

.rectangle{
display:flex;
flex-direction:row;
justify-content:space-around;
align-items: center;
}
.rect1 ,.rect2 ,.rect3 ,.rect4{
width: 250px;
height: 350px;
background-color:#3C3C3C;
border-style: solid;
 border-color:  #63E7DA;
 border-radius :0px 50px 0px 50px ;
 font-size: 15px;
 color: grey;
 padding: 15px;
}
.i1 img{
  padding-top:120px;
  height: 40px;
  width: 40px;
}
.i2 img{
  padding-top:120px;
  height: 40px;
  width: 40px;
}
.i3 img{
  padding-top:120px;
  height: 40px;
  width: 40px;
}
.i4 img{
  padding-top:120px;
  height: 40px;
  width: 40px;
}
.c2{
  font-size: 30px;
  padding-top:20px;
  background: -webkit-linear-gradient(left,white,grey);
    background-clip: none;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.c3{
  padding-top: 20px;
}
@media screen and (max-width:600px){
  height: 70vh;
  .rectangle{
display:flex;
flex-wrap:wrap;
justify-content:space-around;
align-items: center;
}
.rect1 ,.rect2 ,.rect3 ,.rect4{
  height: 220px;
  width: 150px;
  margin-top: 10px;
}
.i1 img{
  width: 35px;
  height: 35px;
  padding-top: 50px;
}
.i2 img{
  width: 35px;
  height: 35px;
  padding-top: 35px;
}
.i3 img{
  width: 35px;
  height: 35px;
  padding-top: 35px;
}
.i4 img{
  width: 35px;
  height: 35px;
  padding-top: 50px;
}
.c2{
  font-size: 20px;
}
.c3{
  font-size: 15px;
}
}

`;

const Header_second = () => {

  return (
    <>
      <Container>

        <div className='rectangle'>
          <div className='rect1'>
      
            <div className='i1'><img src={icon1}></img></div>
            <div className='c2'>UI & UX</div>
            <div className='c3'>Designing interfaces that <br></br> are intuitive, efficient, <br></br>and enjoyable to use.</div>

          </div>
          <div className='rect2'>
            <div className='i2'>
            <img src={icon2}></img>
            </div>
            <div className='c2'>Web and Mobile App</div>
            <div className='c3'> Transforming ideas into <br></br>exceptional web and <br></br>mobile app<br></br> experiences. </div></div>

          <div className='rect3'>
            <div className='i3'><img src={icon3}></img></div>
            <div className='c2'>Design and Creative</div>
            <div className='c3'>Crafting visually<br></br> stunning designs that<br></br> connect with your <br></br>audience.</div></div>
          <div className='rect4'>
            <div className='i4'><img src={icon4}></img></div>
            <div className='c2'>Development</div>
            <div className='c3'>
              Bringing your vision to<br></br> life with the latest <br></br>technology and design <br></br>trends. </div></div>
        </div>
      </Container>
    </>
  )
}

export default Header_second