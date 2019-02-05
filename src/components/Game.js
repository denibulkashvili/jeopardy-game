import React, { Component } from 'react';
import Team from './Team';
import Card from './Card';
import Button from './Button';
import { questions } from '../questions';


export class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isGameRunning: false,
            firstTeamName: 'Team A',
            firstTeamScore: 0,
            secondTeamName: 'Team B',
            secondTeamScore: 0,
            firstTeamTurn: true
        }
        this.handleGameButtonClick = this.handleGameButtonClick.bind(this)
    }
  
  get gameGrid() {
      return (this.state.isGameRunning ? questions.map((q, index) => 
                                            <Card 
                                                key={index} 
                                                question={q.question} 
                                                id={index} 
                                                answer={q.answer} 
                                                onTurnComplete={this.completeTurn}/>)
                                        : <p>Press Start to play the game</p>)
  }
  get gameButtonLabel() {
      return (this.state.isGameRunning ? "Stop" : "Start");
  }
  handleGameButtonClick() {
      this.setState(prevState => ({
          isGameRunning: !prevState.isGameRunning
      }))
  }

  changeTeamTurn() {
      this.setState(prevState => ({
        firstTeamTurn: !prevState.firstTeamTurn
      }))
  }
  get whichTeamTurn() {
      return (this.state.firstTeamTurn ? this.state.firstTeamName : this.state.secondTeamName)
  }
  completeTurn = (points) => {
      const currentTeam = this.whichTeamTurn;
      if (currentTeam === this.state.firstTeamName) {
          this.setState(prevState => ({
              firstTeamScore: prevState.firstTeamScore + points
          }))
      } else {
        this.setState(prevState => ({
            secondTeamScore: prevState.secondTeamScore + points
        })) 
      }
      this.changeTeamTurn()
  }


  render() {
    return (
      <div className="game-container">
        <h1>Jeopardy Game</h1>
        <Team 
            teamName={this.state.firstTeamName} 
            teamScore={this.state.firstTeamScore} />
        <Team 
            teamName={this.state.secondTeamName} 
            teamScore={this.state.secondTeamScore} />

        <div className="grid">
            {this.gameGrid}
        </div>

        <Button className="btn game-btn" buttonLabel={this.gameButtonLabel} onClick={this.handleGameButtonClick}/>
      </div>
    )
  }
}

export default Game;
