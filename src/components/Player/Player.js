import React, { useState, useEffect } from 'react';
import playerData from '../../player.json';
import Cart from '../Cart/Cart';
import Details from '../Details/Details';

import './PLayer.css';



const Player = () => {
    console.log(playerData);
    const [players, setPlayers] = useState([]);
    const [cart, setCart] = useState([]);

    const handleAddPlayers = (player) => {
        console.log('Player added', player);
        const newCart = [...cart, player];
        setCart(newCart);
    }
    useEffect(() => {
        setPlayers(playerData);
    }, []);
    return (
        <div className="container d-flex">
            <div className="player-container">
                <div className="row">
                    {
                        players.map(pl => <Details
                            handleAddPlayers={handleAddPlayers}
                            player={pl}></Details>)
                    }
                </div>
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>

    );
};

export default Player;