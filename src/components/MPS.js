import React, { Component } from 'react';
import homePage from '../assets/MPS.png';
import {Link} from 'react-router-dom';

export default class  extends Component {
    render() {
        return (
            <div className='App'>
                <div className='projects-container'>
                <h1 className='label text'>MPS Rentals.</h1>
                <p className='text about' id='project-info'>I decided to create an E-Commerce for my Father's construction company. I wanted to challenge myself and be able create a viable project that he can someday use. I used Redux to store the user cart and transfer the information to each component. Users can sign in and select a product and quantity. They can then purchase the cart and pay with their desired payment method through the external library "Stripe".<br/> <br/><a href='https://github.com/ryanmcdougall/PersonalProject.git'>Github Repo</a></p>
                   <img className='project-preview' src={homePage} alt='home page' />
                   <p className='text about' >Technologies Used: (JavaScript) React, Redux, Node, Express, and Stripe. This web app is also mobile responsive.</p>
                    <a className='text' id='margin-link' href='https://mpsdemo.com' target='_blank' rel="noopener noreferrer">Click here to see the site!</a>
                    <Link to='/' className='text'>Home</Link>
                </div> 
            </div> 
        )
    }
}