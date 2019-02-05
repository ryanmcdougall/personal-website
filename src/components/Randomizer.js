import React, { Component } from 'react';
import OWpic from '../assets/Randomizer.png';
import {Link} from 'react-router-dom';

export default class Randomizer extends Component {
    render() {
        return (
            <div className='App'>
                <div className='projects-container'>
                <h1 className='label text'>Randomizer</h1>
                <p className='text about' id='project-info'>Disclaimer: This is a very broken app I created my first week of School, however, it will be explained as to why it is under my projects tab. This was my first solo experience at DevMountain. I wanted to share this project to show my level of improvement and how far I've grown as a Jr. Dev., comparatively to the depth/functionality of my other projects. As for the programming, it is very broken and had to get a lot of help/attention from instructors and student mentors. In the future, I plan to remake this app and provide a much cleaner final product to really showcase how far I have come! <br/><br/><a href='https://github.com/ryanmcdougall/NoDBproject'>Github Repo</a></p>
                   <img className='project-preview' src={OWpic} alt='home page' />
                   <p className='text about' >Technologies used: (JavaScript) React, Node, and Express</p>
                   <Link to='/' className='text'>Home</Link>

                </div> 
            </div> 
        )
    }
}