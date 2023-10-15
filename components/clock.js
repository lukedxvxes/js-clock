import './clock.scss';
import { getTime, renderNumbers } from './clock.utils';

export const start = (clockEl) => {
  renderNumbers(clockEl);

  let interval;
  const actionBtn = document.querySelector('button.action');
  const hourHand = document.querySelector('.hour-hand');
  const minuteHand = document.querySelector('.minute-hand');
  const secondHand = document.querySelector('.second-hand');

  const updateAnalog = (hours, mins, secs) => {
    const hrsAsDeg = hours * 30 + mins / 2;
    const minsAsDeg = mins * 6;
    const secsAsDeg = secs * 6;

    hourHand.style.setProperty('--rotation', hrsAsDeg);
    minuteHand.style.setProperty('--rotation', minsAsDeg);
    secondHand.style.setProperty('--rotation', secsAsDeg);
  };

  const updateClockInterval = () => {
    const [hours, mins, secs] = getTime();
    updateAnalog(hours, mins, secs);
  };

  actionBtn.addEventListener('click', () => {
    if (interval) {
      clearInterval(interval);
      interval = false;
    } else {
      interval = setInterval(updateClockInterval, 1000);
    }
  });

  interval = setInterval(updateClockInterval, 1000);
};
