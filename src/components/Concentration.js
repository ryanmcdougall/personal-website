import React, { Component } from 'react';
import gamePic from '../assets/Concentration.png';
import {Link} from 'react-router-dom';

export default class Concentration extends Component {
    render() {
        return (
            <div className='App'>
                <div className='projects-container'>
                <h1 className='label text'>Concentration Game</h1>
                <p className='text about' id='project-info'>This is a functioning memory card game that I created for a front end programming challenge. The game begins with a deck of 52 cards that are dealt face down. The player is only allowed to flip two cards at the same time. If the two cards match, then they will be removed from the table. If the two do not match, they will be flipped back over. The goal is to get all 52 cards removed in the least amount of attempts (having 2 cards flipped to be checked). The game will test your memory, can you remember where each card is?<br/><br/><a href='https://github.com/ryanmcdougall/CircadenceChallenge'>Github Repo</a></p>
                   <img className='project-preview' src={gamePic} alt='home page' />
                   <p className='text about' >Technologies used: (JavaScript) React and Node (FRONT END CHALLENGE)</p>
                   <Link to='/' className='text'>Home</Link>

                </div> 
            </div> 
        )
    }
}