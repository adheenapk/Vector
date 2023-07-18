import React from 'react'
import  styled from 'styled-components'
import Navbar from '../components/Navbar'
import Header_first from '../components/Header_first'
import Header_second from '../components/Header_second'
import Header_third from '../components/Header_third'
import Header_fourth from '../components/Header_fourth'
import Header_fifth from '../components/Header_fifth'
import Header_sixth from '../components/Header_sixth'

const Container=styled.div``;

const home = () => {
  return (
  
    <Container>
      <Navbar/>
      <Header_first/>
      <Header_second/>
      <Header_third/>
      <Header_fourth/>
      <Header_fifth/>
      <Header_sixth/>
    </Container>
  )
}

export default home