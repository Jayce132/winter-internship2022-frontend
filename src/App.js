import React from "react";

const HeaderNoButton = () => (
    <header><img src="./assets/img/ddroidd_logo.svg" height="115" width="260"/>
        <h1>Winter Internship</h1>
        <div className="primary-button-replacement"></div>
    </header>
);

// const Footer = () => (
//
// );

// const HomeBody = () => (
//     <div id="main">
//         <article id="mutable-inner-body">
//             <div className="destructuring">
//                 <img src="assets/img/destructuring.svg" alt="" width="60%"/>
//                 <img src="assets/img/WebPage_logo.svg" width="40%"/>
//             </div>
//             <div className="secondary-button-container">
//                 <button className="secondary-button">Join Us</button>
//             </div>
//         </article>
//         <nav></nav>
//         <aside></aside>
//     </div>
// );

const FormBody = () => (
    <div id="main">
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <article id="mutable-inner-body">
            <form action="http://localhost:3000/posted" method="post">
                <div className="form-application-container">
                    <div><h2>Application Form</h2></div>

                    <div className="form-container">

                        <div className="form-group1">
                            <label htmlFor="first-name">First Name:</label>
                            <input placeholder="First Name" required id="first-name" type="text" name="first-name"
                                   pattern="[a-zA-Z]+" title="Name should only contain letters."/>
                        </div>

                        <div className="form-group2">
                            <label htmlFor="last-name">Last Name:</label>
                            <input placeholder="Last Name" required id="last-name" type="text" name="last-name"
                                   pattern="[a-zA-Z]+" title="Name should only contain letters."/>
                        </div>

                    </div>
                </div>

                <div className="form-application-container-2">
                    <div><h3>Address</h3></div>
                    <div className="form-container-address">

                        <div className="form-group3">
                            <label htmlFor="address-line1">Address Line 1:</label>
                            <input placeholder="Street name & number" required id="address-line1" type="text"
                                   name="address-line1" minLength="5" pattern="[a-zA-Z0-9\s]+"
                                   title="Address should only contain letters, numbers and spaces."/>
                        </div>

                        <div className="form-group4">
                            <label htmlFor="address-line2">Address Line 2:</label>
                            <input placeholder="Suite, apartment" id="address-line2" type="text" name="address-line2"
                                   pattern="[a-zA-Z0-9\s]+"
                                   title="Address should only contain letters, numbers and spaces."/>
                        </div>

                    </div>
                </div>

                <div className="form-application-container-3">
                    <div className="form-container">

                        <div className="form-group5">
                            <label htmlFor="city">City:</label>
                            <input placeholder="City" required id="city" type="text" name="city" pattern="[a-zA-Z\s]+"
                                   title="City name should only contain letters and spaces."/>
                        </div>

                        <div className="form-group6">
                            <label htmlFor="state">State:</label>
                            <input placeholder="State" required id="state" type="text" name="state" list="state list"
                                   pattern="[Cc]alifornia|[Gg]eorgia|[Ii]llinois|[Ll]ouisiana|[Vv]ermont|[Tt]exas"
                                   title="Only states in the list are available."/>
                            <datalist id="state list">
                                <option>California</option>
                                <option>Georgia</option>
                                <option>Illinois</option>
                                <option>Louisiana</option>
                                <option>Vermont</option>
                                <option>Texas</option>
                            </datalist>
                        </div>

                        <div className="form-group7">
                            <label htmlFor="zip-code">Zip code:</label>
                            <input placeholder="Zip code" required id="zip-code" type="number" name="zip-code"/>
                        </div>
                    </div>
                </div>

                <div className="form-application-container-2">

                    <div><h3>Contact information</h3></div>

                    <div className="form-container">

                        <div className="form-group8">
                            <label htmlFor="phone-number">Phone number:</label>
                            <input placeholder="555-5555" required id="phone-number" type="number" name="phone-number"/>
                        </div>

                        <div className="form-group9">
                            <label htmlFor="email-address">Email address:</label>
                            <input placeholder="john@doe.com" required id="email-address" type="email"
                                   name="email-address"/>
                        </div>

                    </div>
                </div>

                <div className="secondary-button-container2">
                    <button id="secondary-button">Join Us</button>
                </div>
            </form>
        </article>
        <nav></nav>
        <aside></aside>
    </div>
);

const FinalBody = () => (
    <div id="main">
        <article id="mutable-inner-body">
            <div className="final-message-container">
                <h1 className="final-message">Excellent!</h1>
                <h1 className="final-message">See you in February 2022!</h1>
            </div>
        </article>
        <nav></nav>
        <aside></aside>
    </div>
);

// const FormHeaderBody = () => (
//     <>
//         <HeaderNoButton/>
//         <FormBody/>
//     </>
// );

export {FormBody, HeaderNoButton, FinalBody}