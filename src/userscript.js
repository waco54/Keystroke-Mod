// ==UserScript==
// @name         Keystroke Mod
// @namespace    http://tampermonkey.net/
// @version      1.01
// @description  Adds WASD and SHIFT keystrokes to any website
// @author       Waco
// @match        https://games.crazygames.com/en_US/tank-off/index.html
// @match        https://martiangames.com/game.php?params=game/554/Tank-Off/
// @match        https://www.crazygames.com/game/tank-off/
// @icon         https://waco54.github.io/Keystroke-Mod/assets/icon.ico
// @grant        none
// ==/UserScript==

let script = document.createElement('script');
script.src = "https://waco54.github.io/Keystroke-Mod/src/main.js";
document.body.appendChild(script);
