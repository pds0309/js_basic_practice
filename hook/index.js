import Bark from './components/Bark.js';
import Bark2 from './components/Bark2.js';
import useBeforePageLeave from './components/useBeforeMouseLeave.js'


const app = document.getElementById("app");
const a = () => {console.log("HI")}
app.innerHTML = `
  <div id="bark"> 
</div>
<div id="bark2"></div>`;
const bark = document.getElementById("bark");
const bark2 = document.getElementById("bark2");
Bark(bark);
Bark2(bark2);