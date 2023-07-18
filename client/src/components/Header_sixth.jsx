import React, { useEffect, useState } from 'react'
import styled from 'styled-components'



const Container = styled.div` margin: 0px;
padding: 0px;
background-color:#191A1D;
height: 20vh;
position: relative;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: end;
.last{
    color: white;
    font-size: 40px;
    margin-right: 200px;
}
span{
    color:  #63E7DA;;
}
@media screen and (max-width:600px){
    .last{
    color: white;
    font-size: 30px;
    text-align: center;
    }
}
`;
const Header_sixth = () => {

    return (
        <>
            <Container>
               <div className='last'>
               Let’s <span>connect</span> there
               </div>

            </Container>
        </>
    )
}

export default Header_sixth