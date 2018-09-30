import React from 'react'
import styled from 'react-emotion'

const CardWrapper = styled('div')({
  background: '#fff',
  borderColor: 'black',
  borderWidth: '2px',
  margin: '10px',
  // position: 'relative',
  borderStyle: 'solid',
  boxShadow: '0 3px 6px #999, 0 3px 6px #999'
})

const Image = styled('img')({
  width: '170px',
  height: '170px'
})

const Card = props => (
  <CardWrapper>
    <Image alt={props.name} src={props.image} onClick={() => props.clickHandler(props.name)}/>
  </CardWrapper>
);

export default Card