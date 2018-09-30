import React, { Component } from "react";
import styled from 'react-emotion'
import Card from './components/Card'
import Gameboard from './components/Gameboard'
import Header from './components/Header'

const Content = styled('div')({
  marginTop: 50,
})

class App extends Component {
  render() {
    return (
        <div>
            <Header />
            <Content>
              <Gameboard>

              </Gameboard>
            </Content>
        </div>
    );
  }
}

export default App;
