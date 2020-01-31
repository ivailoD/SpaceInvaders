"use strict";
//import * as PIXI from "pixi.js";
var PIXI = require('pixi.js'); 
function main() {
    window.onload = function () {
        var app = new PIXI.Application({
            width: 800,
            height: 600,
            backgroundColor: 0xaaaaaa
        });
        document.body.appendChild(app.view);
        console.log("app started");
    };
}
