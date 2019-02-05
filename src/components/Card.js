import React, { Component } from 'react';
import Button from './Button';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardState: 0
        }
        this.handleCardButtonClick = this.handleCardButtonClick.bind(this);
    }

    get cardButtonLabel() {
        switch(this.state.cardState) {
            case 0:
                return "Show the question";
            case 1:
                return "Show the answer";
            case 2:
                return "Add points";
            default:
                return "";
        }
    }
    get cardPoints() {
        return ((this.props.id + 1) * 100);
    }
    handleCardButtonClick() {
        if (this.state.cardState === 2) {
            console.log(`Added ${this.cardPoints} points.`);
            this.props.onTurnComplete(this.cardPoints);
        } else {
            this.setState({
                cardState: this.state.cardState + 1
            })
        }
        
    }
    get cardContent() {
        switch(this.state.cardState) {
            case 0:
                return <p className="card-points">${this.cardPoints}</p>;
            case 1:
                return <p className="card-question">{this.props.question}</p>;
            case 2:
                return <p className="card-question">{this.props.answer}</p>;
            default:
                return "";
        }
    } 

    render() {
        return (
            <div className="card">
                <div className="card-content">
                    {this.cardContent}
                </div>
                <Button className="btn card-btn" buttonLabel={this.cardButtonLabel} onClick={this.handleCardButtonClick} /> 
            </div>
        )
    }
}

export default Card
