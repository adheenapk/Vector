import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`position:relative;
.nav_main{
    display:flex;
    position: absolute;
    right: 30px;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    color: white;
    font-size: 20px;
    margin-left: auto;
}
.link{
    display: flex;

}
.links{
    margin-right: 40px;
}
.icon{
    display: none;
}
.nav_side{
    display: none;
}
a{
    text-decoration:none;
    color: white;
}
@media screen and (max-width:600px){
    .links{
        display: none;
     ;
}
    .icon{
    display: flex;
} 
.nav_side{
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    height: 25vh;
    width: 100px;
    background-color:#191A1D;
    transform: translateX(${props => props.value?"0px":"-300px"});
    transition: all;
    color: #63E7DA;
}
.lk{
    display: flex;
    flex-direction:column;
    align-items: center;
    font-size: 10px;
}
.lks{
    margin-bottom: 30px;
    margin-left: 25px;
    margin-top:17px;
}
a{
    text-decoration:none;
    color: #63E7DA;
}
}
`;

const Navbar = () => {
    const [state, setState] = useState(false);

  useEffect(() => console.log(state), [state]);
    return (
        <Container value={state}>
            <div className='nav_main'>
                <div className="link">
                    <div className="links"><a href='#home'>Home</a></div>
                    <div className="links"><a href='#about'>About</a></div>
                    <div className="links"><a href='#contact'>ContactUs</a></div>
                   <div className='icon' onClick={() => setState(!state)} > <i class="fa-solid fa-bars"></i>
                   </div>
                </div>
            </div>
            <div className='nav_side'>
               
                <div className="lk">
                    <div className="lks"><a href='#home'>Home</a></div>
                    <div className="lks"><a href='#about'>About</a></div>
                    <div className="lks"><a href='#contact'>Contact Us</a></div>
                    </div>
            </div>
        </Container>
    )
}

export default Navbar