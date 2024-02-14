import React from 'react';
import { useState, useEffect } from 'react';
// import Auth from './Auth.jsx';
// import Header from './Header.jsx';
// import Footer from './Footer.jsx';
// import PostForm from './PostForm.jsx';
import '../PostFormModal.css';
// import { CREATE_POST_MUTATION } from "../graphql/mutations";
// import { GET_ALL_POSTS } from "../graphql/mutations";



const Contact = () => {
    //any functions you want here
    return(
        //html like jsx content here
        <div></div>
    )
};

export default Contact;

// Adds deleteCard() to the global scope so each card has access to it.
// window.deleteCard = (e) => {
//   // Grabs the id from the button element attached to the contact card.
//     let id = parseInt(e.id);

//     // Delete the card
//     deleteDb(id);

//     // Reload the DOM
//     fetchCards();
// };

// form.addEventListener('submit', (event) => {
//     // handle the form data
//     event.preventDefault();
//     const name = form.elements['name'].value;
//     const home = form.elements['home-phone'].value;
//     const cell = form.elements['cell-phone'].value;
//     const email = form.elements['email'].value;

//     // Post form data to IndexedDB
//     postDb(name, home, cell, email);

//     // Submit the form
//     form.reset();

//     // Reload the DOM
//     fetchCards();
// });

// const fetchCards = async () => {
//   // Grab card data from IndexedDB
//     const result = await getDb();

//     let card = ` `;

//     // Loop through the data and create the contact card
//     for (let data of result) {
//     console.log(data);
//     card += `
//     <nav id="navbar">
//     <div className="ml-3 nav-btn">
//         <a className="btn btn-sm btn-dark" id="buttonInstall" role="button">Install!</a>
//     </div>
//     <h1 className="mr-3">iContact Cards</h1>
//     </nav>
//     <section className="container">
//     <div className="row justify-space-around m-4" id="card-group">
        
//     </div>
//     <div className="container">
//         <form id="contact-form">
//         <div className="form-group">
//             <label for="name" class="form-label">Name:</label>
//             <input type="text" class="form-input" for="name" id="name" placeholder="Enter Name" required/>
//         </div>
//         <div className="form-group">
//             <label for="home-phone" class="form-label">Home Phone:</label>
//             <input type="tel" class="form-input" for="home-phone" id="home-phone" placeholder="Enter Home Phone #" />
//         </div>
//         <div className="form-group">
//             <label for="cell-phone" class="form-label">Cell Phone:</label>
//             <input type="tel" class="form-input" for="cell-phone" id="cell-phone" placeholder="Enter Cell Phone #" />
//         </div>
//         <div className="form-group">
//             <label for="email" class="form-label">Email:</label>
//             <input type="email" class="form-input" for="email" id="email" placeholder="Enter Email Address" />
//         </div>
//         <div className="flex-row justify-flex-end p-1"">
//             <input class="btn btn-lg btn-info" id="add-card" type="submit" value="Add Contact">
//         </div>
//         </form>
//     </div>
//     <nav id="navbar">
//         <div className="ml-3 nav-btn">
//             <a className="btn btn-sm btn-dark" id="buttonInstall" role="button">Install!</a>
//         </div>
//         <h1 className="mr-3">iContact Cards</h1>
//         </nav>
//         <section className="container">
//         <div className="row justify-space-around m-4" id="card-group">
            
//         </div>
//         <div className="container">
//             <form id="contact-form">
//             <div className="form-group">
//                 <label for="name" class="form-label">Name:</label>
//                 <input type="text" class="form-input" for="name" id="name" placeholder="Enter Name" required/>
//             </div>
//             <div className="form-group">
//                 <label for="home-phone" class="form-label">Home Phone:</label>
//                 <input type="tel" class="form-input" for="home-phone" id="home-phone" placeholder="Enter Home Phone #" />
//             </div>
//             <div className="form-group">
//                 <label for="cell-phone" class="form-label">Cell Phone:</label>
//                 <input type="tel" class="form-input" for="cell-phone" id="cell-phone" placeholder="Enter Cell Phone #" />
//             </div>
//             <div className="form-group">
//                 <label for="email" class="form-label">Email:</label>
//                 <input type="email" class="form-input" for="email" id="email" placeholder="Enter Email Address" />
//             </div>
//             <div className="flex-row justify-flex-end p-1">
//                 <input class="btn btn-lg btn-info" id="add-card" type="submit" value="Add Contact">
//             </div>
//             </form>
//         </div>
//     `;
//     }

//     // Setting innerHTML as card variable
//     document.getElementById('card-group').innerHTML = card;
// };

  // Fetch cards upon being loaded.
// fetchCards();


// function iContact = () => {
// <div className="card card-rounded col-md-3 m-2">
//         <div className="card-header card-rounded">
//         <h1>${data.name}</h1>
//         </div>
//         <div className="card-body">
//         <p>Home Phone: ${data.home_phone}</p>
//         <p>Cell Phone: ${data.cell_phone}</p>
//         <p>Email: ${data.email}</p>
//         </div>
//         <div className="flex-row justify-flex-end p-1">
//         <button className="btn btn-sm btn-danger" id="${data.id}" onclick="deleteCard(this)">Delete</button>
//         </div>
//     </div>
// }

