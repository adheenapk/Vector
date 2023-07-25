import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div` margin: 0px;
padding: 0px;
background-color:#191A1D;
height: 65vh;
position: relative;

.main{
    color: white;
    font-size: 70px;
    font-family:'Gill Sans';
    font-weight: 900;
    position: absolute;
    margin-left: 200px;
   
}
.offer{
display:flex;
flex-direction:row;
justify-content:space-around;
align-items: center;
color: white;
padding-top: 200px;
}
.one{
    position: relative;
    left: 35px;
    height: 250px;
    width: 200px;
    border: #ffe100;
    border-style: solid;
    text-align: center;
    padding-top:20px;
    padding-left:40px;
    font-size: 200px;
}
.two{
    position: relative;
    height: 250px;
    width: 200px;
    text-align: center;
    padding-top:20px;
    padding-left:40px;
    font-size: 200px;
}
.three{
    position: relative;
    height: 250px;
    width: 200px;
    text-align: center;
    padding-top:20px;
    padding-left:40px;
    font-size: 200px;
}
svg{
    position: absolute;
    width:300px;
    height: 300px;
 }
.c1{
    font-size: 30px;
    font-weight: 800;
    background: -webkit-linear-gradient(left,white, #333);
    background-clip: none;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
    padding-top: 45px;
    text-align: center;
}
.c2{
    font-size: 15px;
    color: grey;
    padding-top: 20px;
    text-align: center;
}
@media screen and (max-width:600px){
    height: 160vh;
    .main{
    color: white;
    font-size: 45px;
    font-family:'Gill Sans';
    font-weight: 900;
    position: absolute;
    margin-left: 30px;
    margin-top: 10px;
   
}
.offer{
display:flex;
flex-direction:column;
justify-content:space-around;
align-items: center;
color: white;
padding-top: 90px;
}
.one{
    position: relative;
    left: 35px;
    height: 250px;
    width: 180px;
}
.c2{
    font-size: 18px;
    color: grey;
    padding-top: 20px;
    text-align: center;
}
svg{
    height: 250px;
    width: 250px;
}
}
`;

const Header_fourth = () => {

    return (
        <>
            <Container>
                <div className='main' id='about'>
                    What we offer?
                </div>
                <div className='offer'>
                    <div className='onee'>
                    <svg width="300" height="300" viewBox="0 0 290 366" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M198.599 21C137.098 60.0096 79.5353 133.327 26.7694 180.237C-14.3347 216.78 142.896 117.934 198.599 97.398C205.405 94.8889 229.505 87.3943 222.127 104.306C198.599 126.07 173.3 147.202 160.42 156.062C126.398 179.467 127.358 175.217 94.9702 200.06C84.3925 208.174 74.1505 216.635 64.9653 225.779C56.859 233.85 36.5739 252.922 49.368 254.261C56.6399 255.022 63.2256 250.092 69.3272 246.822C83.1565 239.409 95.8633 230.719 108.849 222.378C138.094 203.594 181.485 173.042 213.271 156.062C215.263 154.998 257.351 132.574 235.213 157.763C203.325 194.045 157.28 221.464 122.464 255.855C115.482 262.751 106.632 269.413 104.091 278.067C103.197 281.11 231.813 200.177 235.213 198.659C261.003 187.139 189.125 230.131 207.059 217.49C222.389 206.684 267.22 176.169 258.609 191.027C258.609 191.027 288.718 191.027 246.43 233.751C159.637 321.436 235.213 255.855 122.464 346" stroke="#63E7DA" stroke-width="40" stroke-linecap="round"/>
</svg>
                    <div className='one'>1</div>
                    <div className='c1'>24/7 Customer Support</div>
                    <div className='c2'>If you have any queries donot<br></br>wait.We are here for you 24/7</div></div>
                    <div className='twoo'> 
                    <svg width="300" height="300" viewBox="0 0 290 366" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M198.599 21C137.098 60.0096 79.5353 133.327 26.7694 180.237C-14.3347 216.78 142.896 117.934 198.599 97.398C205.405 94.8889 229.505 87.3943 222.127 104.306C198.599 126.07 173.3 147.202 160.42 156.062C126.398 179.467 127.358 175.217 94.9702 200.06C84.3925 208.174 74.1505 216.635 64.9653 225.779C56.859 233.85 36.5739 252.922 49.368 254.261C56.6399 255.022 63.2256 250.092 69.3272 246.822C83.1565 239.409 95.8633 230.719 108.849 222.378C138.094 203.594 181.485 173.042 213.271 156.062C215.263 154.998 257.351 132.574 235.213 157.763C203.325 194.045 157.28 221.464 122.464 255.855C115.482 262.751 106.632 269.413 104.091 278.067C103.197 281.11 231.813 200.177 235.213 198.659C261.003 187.139 189.125 230.131 207.059 217.49C222.389 206.684 267.22 176.169 258.609 191.027C258.609 191.027 288.718 191.027 246.43 233.751C159.637 321.436 235.213 255.855 122.464 346" stroke="#63E7DA" stroke-width="40" stroke-linecap="round"/>
</svg>
                    <div className='two'>2</div>
                    <div className='c1'>Perfection</div>
                    <div className='c2'>Perfect Design with <br></br>Responsive Pages</div></div>
                    <div className='threee'>
                    <svg width="300" height="300" viewBox="0 0 290 366" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M198.599 21C137.098 60.0096 79.5353 133.327 26.7694 180.237C-14.3347 216.78 142.896 117.934 198.599 97.398C205.405 94.8889 229.505 87.3943 222.127 104.306C198.599 126.07 173.3 147.202 160.42 156.062C126.398 179.467 127.358 175.217 94.9702 200.06C84.3925 208.174 74.1505 216.635 64.9653 225.779C56.859 233.85 36.5739 252.922 49.368 254.261C56.6399 255.022 63.2256 250.092 69.3272 246.822C83.1565 239.409 95.8633 230.719 108.849 222.378C138.094 203.594 181.485 173.042 213.271 156.062C215.263 154.998 257.351 132.574 235.213 157.763C203.325 194.045 157.28 221.464 122.464 255.855C115.482 262.751 106.632 269.413 104.091 278.067C103.197 281.11 231.813 200.177 235.213 198.659C261.003 187.139 189.125 230.131 207.059 217.49C222.389 206.684 267.22 176.169 258.609 191.027C258.609 191.027 288.718 191.027 246.43 233.751C159.637 321.436 235.213 255.855 122.464 346" stroke="#63E7DA" stroke-width="40" stroke-linecap="round"/>
</svg>
                    <div className='three'>3</div>
                    <div className='c1'>Dedication</div>
                    <div className='c2'>Our highly dedicated team<br></br> ensures the on time <br></br>completion and delivery of the project</div></div>
                </div>

            </Container>
        </>
    )
}

export default Header_fourth