import React from 'react'
import styled from 'react-emotion'

const HeaderWrapper = styled('header')({
  width: '100%',
  height: 120,
  boxShadow: '0 2px 2px 2px rgba(0,0,0,.3)',
  textAlign: 'center',
  padding: '10px 10px 10px 10px',
  backgroundColor: 'salmon'
})


const Header = () => (
  <HeaderWrapper>
    <h1>Welcome to the Memory Click Game</h1>
    <h2>Click an image, earn a point.  Click the same image twice?  Lose all points</h2>
  </HeaderWrapper>
)

export default Header