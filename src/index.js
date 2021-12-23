import "./styles/main.scss";
import './index.html';
import React from 'react'
import ReactDOM from 'react-dom'
import {FormBody, HeaderNoButton, FinalBody} from "./App";
//This is an example of how to load an external JS module inside this one, please remove the following 2 lines
// import {getCurrentDate} from './exampleModule';
//
// console.log(getCurrentDate())

document.getElementById("primary-button").addEventListener ("click", renderFormPage, false);
document.getElementById("secondary-button").addEventListener ("click", renderFormPage, false);

function renderFormPage() {
    ReactDOM.render(<HeaderNoButton />, document.getElementById('please work'));
    ReactDOM.render(<FormBody />, document.getElementById('main'));
    // document.getElementById("secondary-button").addEventListener ("submit", renderFinalPage, false);
    // $('#form_id').on('submit', function(e){
    //     e.preventDefault();
    //     $.ajax({
    //         type: "POST",
    //         url: "/",
    //         data: $(this).serialize(),
    //         success: function() {
    //             alert('success');
    //         }
    //     });
    // });
}

// function renderFinalPage() {
//     ReactDOM.render(<FinalBody />, document.getElementById('main'));
// }


