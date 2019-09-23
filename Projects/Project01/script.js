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
    try {
        httpRequest = new XMLHttpRequest();
    } catch (requestError) {
        return false; 
    }
    alert(httpRequest);
    return
}

if (window.addEventListener) {
    window.addEventListener("load", getRequestObject, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", getRequestObject);
}