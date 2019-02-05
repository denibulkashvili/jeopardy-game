import React from 'react'

const Team = (props) => {

    
    return (
      <div className="team">
        <h2 className="team-name">{props.teamName}</h2>
        <p className="team-score">$ {props.teamScore}</p>
        </div>
    )
}

export default Team
