import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`position:absolute;
right: 50px;

.nav_main{
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    color: white;
    position: relative;
    font-size: 20px;
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
    transform: translateX(${props => props.value?"400px":"-475px"});
    transition: all;
    color: white;
}
.lk{
    display: flex;
    flex-direction:column;
    align-items: center;
}
.lks{
    margin-bottom: 30px;
    margin-left: 25px;
    margin-top:20px;
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
                    <div className="links">Home</div>
                    <div className="links">About</div>
                    <div className="links">Contact</div>
                   <div className='icon' onClick={() => setState(!state)} > <i class="fa-solid fa-bars"></i>
                   </div>
                </div>
            </div>
            <div className='nav_side'>
               
                <div className="lk">
                    <div className="lks">Home</div>
                    <div className="lks">About</div>
                    <div className="lks">Contact</div>
                    </div>
            </div>
        </Container>
    )
}

export default Navbar