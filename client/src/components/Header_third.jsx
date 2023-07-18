import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import laptop from '../assets/laptop.png'

const Container = styled.div` margin: 0px;
padding: 0px;
background-color:#191A1D;
height: 20vh;
position: relative;

.line{  
    top: 200px;
    border-bottom: 1px solid #63E7DA;
    margin: auto;
}
.r1{
    background-color:#63E7DA;
    width: 60px;
    height: 5px;
    position: absolute;
    top: -2px;
    margin-left: 300px;
}
.r2{
    background-color:#63E7DA;
    width: 250px;
    height: 5px;
    position: absolute;
    top: -2px;
    margin-left: 500px;
}
.lap img{
    width: 500px;
    height: 500px;
    position: absolute;
    top: -250px;
    right: 100px;
}
@media screen and (max-width:600px){
    height: 10vh;

    .line{  
    top: 200px;
    border-bottom: 1px solid #63E7DA;
}  
.r1{
    background-color:#63E7DA;
    width: 40px;
    height: 5px;
    position: absolute;
    top: -2px;
    margin-left: 20px;
}
.r2{
    background-color:#63E7DA;
    width: 150px;
    height: 5px;
    position: absolute;
    top: -2px;
    margin-left: 100px;
} 
.lap img{
    width: 150px;
    height: 150px;
    position: absolute;
    top: -75px;
    right: 3px;
}
}
`;

const Header_third = () => {
   
    return (
      <>
      <Container>
       <div className='line'>
<div className='r1'></div>
<div className='r2'></div>
<div className='lap'>
<img src={laptop}></img>
</div>
       </div>

      </Container>
        </>
        )
}

export default Header_third