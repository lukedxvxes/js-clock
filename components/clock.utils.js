export const getTime = () => {
  const now = new Date();
  const hours = now.getHours();
  const mins = now.getMinutes();
  const secs = now.getSeconds();

  return [hours, mins, secs];
};

export const renderNumbers = (clockEl) => {
  for (let i = 1; i <= 12; i++) {
    const numberEl = document.createElement('div');
    numberEl.classList.add('number');
    numberEl.classList.add(`number-${i}`);
    numberEl.innerHTML = i;
    clockEl.append(numberEl);
  }
};
