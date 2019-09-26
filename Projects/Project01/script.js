/*  Project 01_11_02

    Author: Connor J Webdale 
    Date: 9.20.19 

    Filename: script.js
*/

"use strict";
// setting global variables 
let httpRequest = false;
let entry = "^IXIC";

function getRequestObject() {
    // try and catch structure to create an XHR object 
    try {
        httpRequest = new XMLHttpRequest();
    } catch (requestError) {
        return false; 
    }
    alert(httpRequest);
    return
}

// stops any default submission from executing 
function stopSubmission(evt) {
    alert("stopSubmission()");
    if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnValue = false;
    }
}

// testing the function 
if (window.addEventListener) {
    window.addEventListener("load", getRequestObject, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", getRequestObject);
}