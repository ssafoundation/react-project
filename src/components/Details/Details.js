import React from 'react';
import './Details.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Details = (props) => {
    // console.log(props)
    const { img, name, team, salary } = props.player;
    return (
        <div className="col-md-3">
            <div className="player-wrap">
                <div className="player">
                    <img src={img} alt="" />
                </div>
                <div className="detail-info">
                    <h4 className="name">{name}</h4>

                    <p>Playing role : {team}</p>
                    <p>Salary : ${salary}</p>
                    <button className="btn btn-outline-primary add-btn" onClick={() => props.handleAddPlayers(props.player)}> <FontAwesomeIcon icon={faPlus} /><span className="icon">Add Player</span></button>
                </div>
            </div>

        </div>
    );
};

export default Details;