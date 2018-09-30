import React, { Component } from 'react'
import styled from 'react-emotion'
import Card from '../components/Card'
import gameCards from '../gameCards.json'
import "./Wrapper.css"


class Gameboard extends Component {
  state = {
    cardsArray: [],
    clickedArray: [],
    score: 0,
    highScore: 0
  }

  componentDidMount(){  //Initialize our array
    this.setState({
      cardsArray: gameCards})
  }

  clickHandler = (CardName) => {
    let shuffledArray = this.shuffleCards(); //Shuffle cards after click
    if(this.state.clickedArray.includes(CardName)){ //WRONG Reset
      this.setState({
        score: 0,
        clickedArray: [],
        cardsArray: shuffledArray
      })
    } else{ //Not Clicked, add to score
      let newArray = this.state.clickedArray;
      newArray.push(CardName);
      this.setState({
        score: this.state.score + 1,
        clickedArray: newArray,
        cardsArray: shuffledArray
      }, function() { // called by React after the state is updated
        if(this.state.score > this.state.highScore){
        this.setState({
          highScore: this.state.score
        })}
      })
    }   
  }

  shuffleCards = () => {
      var array = [].concat(this.state.cardsArray);
      var currentIndex = array.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) { // While there remain elements to shuffle...
        randomIndex = Math.floor(Math.random() * currentIndex); // Pick a remaining element...
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
  }

  render() {
    return (
      <div className="scoreBoard">
       Score: {this.state.score} &nbsp;&nbsp;&nbsp;&nbsp; High Score: {this.state.highScore}
       <div className="wrapper">
        {this.state.cardsArray.map(card => (
          <Card
            name={card.name}
            image={card.image}
            clickHandler={this.clickHandler}
        />))}
       </div>
      </div>
    )
  }
}


export default Gameboard;
