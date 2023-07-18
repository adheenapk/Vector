
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import vector from '../assets/vector.png'


const Container = styled.div` margin: 0px;
padding: 0px;
background-color:#191A1D;
height: 80vh;
position: relative;
.all{
    display:flex;
flex-direction:row;
justify-content:space-around;
align-items: center;
}
.logo img{
    padding-top: 100px;
    margin-left: 10px;
    height: 500px;
    width: 500px;
}
input{
    background-color:#191A1D;
    width: 400px;
    height: 40px;
    border-radius: 50px  50px 0px 50px;
    border-color: grey;
    border-style: solid;
    padding-left:40px;
    font-size: 25px;
    margin-left: 50px;
}
.btn{
    background-color: #63E7DA;
    color: whitesmoke;
    font-size: 20px;
    font-weight: 800;
    height: 40px;
    width: 100px;
    margin-left:40px;
    border-radius: 50px  50px 50px 0px;
}
.heading{
    color: white;
    font-size: 25px;
    font-family: Courier, monospace;
}
span{
    color:#63E7DA;
}
.body{
    color: white;
    padding-top: 25px;
    text-align: center;
}
.final{
    color: #63E7DA;
    font-size: 25px;
    font-weight:900;
    padding-top: 50px;
    text-align: center;
}
@media screen and (max-width:600px){
    height: 60vh;

    .logo img{
    padding-top: 10px;
    margin-left: 50px;
    height: 200px;
    width: 200px;
}
.all{
    display:flex;
flex-direction:column;
justify-content:space-around;
align-items: center;
}
input{
    background-color:#191A1D;
    width: 150px;
    height: 30px;
    border-radius: 50px  50px 0px 50px;
    border-color: grey;
    border-style: solid;
    padding-left:20px;
    font-size: 15px;
    margin-left: 50px;
}
.btn{
    background-color: #63E7DA;
    color: whitesmoke;
    font-size: 15px;
    font-weight: 800;
    height: 30px;
    width: 60px;
    margin-left:10px;
    border-radius: 50px  50px 50px 0px;
}
.heading{
    padding-top: 20px;
    color: white;
    font-size: 20px;
    font-family: Courier, monospace;
}
.body{
    color: white;
    padding-top: 25px;
    text-align: center;
    font-size: 15px;
}
.final{
    color: #63E7DA;
    font-size: 15px;
    font-weight:900;
    padding-top: 50px;
    text-align: center;
}
}
`;

const Header_fifth = () => {

    return (
        <>
            <Container>
               <div className='all'>
                <div className='logo'>
                <div className='vect'><img src={vector}></img></div>
                <input type='textbox' placeholder='write a message'></input>        
                <button className='btn'>send</button>
                    </div>
                    <div className='content'>
                        <div className='heading'>Let's <span>talk</span> something special.</div>
                        <div className='body'>We seek to push the limitations of creativity <br></br>to create high-engaging, user-friendly and <br></br>memorable interactive experiences.</div>
                        <div className='final'>vectorux0@gmail.com</div>
                        </div></div> 

            </Container>
        </>
    )
}

export default Header_fifth