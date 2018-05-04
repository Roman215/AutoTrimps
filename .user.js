// ==UserScript==
// @name         AutoTrimps-Roman215
// @version      1.0.0.0-roman215-5-4-2018
// @namespace    https://roman215.github.io/AutoTrimps
// @updateURL    https://Roman215.github.io/AutoTrimps/.user.js
// @description  Automate all the trimps!
// @author       zininzinin, spindrjr, Ishkaru, genBTC, Roman215
// @include      *trimps.github.io*
// @include      *kongregate.com/games/GreenSatellite/trimps
// @connect      *Roman215.github.io/AutoTrimps*
// @connect      *trimps.github.io*
// @connect      self
// @grant        none
// ==/UserScript==

var script = document.createElement('script');
script.id = 'AutoTrimps-script';
//This can be edited to point to your own Github Repository URL.
script.src = 'https://roman215.github.io/AutoTrimps/AutoTrimps2.js';
//script.setAttribute('crossorigin',"use-credentials");
script.setAttribute('crossorigin',"anonymous");
document.head.appendChild(script);
