import React, { Component } from 'react';
import homePage from '../assets/KWIZZ.png';
import {Link} from 'react-router-dom';

export default class  extends Component {
    render() {
        return (
            <div className='App'>
                <div className='projects-container'>
                <h1 className='label text'>Kwizz!</h1>
                <p className='text about' id='project-info'>My Group and I at DevMountain decided to clone the Quiz Creation app, Kahoot.it. We wanted to implement a new technology for our project and we thought Web Sockets would be a great opportunity to implement something new. On the landing page, you can either sign in and create a quiz to host, or you plug in a quiz id to join a hosted quiz. Kwizz! allows you to edit and delete quizes at will and even has a funny animation at the end!<br/><br/><a href='https://github.com/Kahoot-Clone/kahoot-clone.git'>Github Repo</a></p>
                   <img className='project-preview' src={homePage} alt='home page' />
                   <p className='text about' >Technologies used: (JavaScript) React, Redux, Node, Express, Chart.js, Socket.io, and Auth0</p>
                   <Link to='/' className='text'>Home</Link>

                </div> 
            </div> 
        )
    }
}