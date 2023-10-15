import './style.scss';
import { start } from './components/clock';

document.querySelector('#app').innerHTML = /*html */ `
  <div>
    <h1>Clock</h1>
    <div id="clock">

      <div class="hands hour-hand"></div>
      <div class="hands minute-hand"></div>
      <div class="hands second-hand"></div>

    </div>
    <button class="action">Stop/start</button>
  </div>
`;

start(document.querySelector('#clock'));
