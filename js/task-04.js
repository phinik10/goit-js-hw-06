const counter = document.getElementById('counter');
const decrementBtn = counter.querySelector('[data-action="decrement"]');
const incrementBtn = counter.querySelector('[data-action="increment"]');
const valueSpan = counter.querySelector('#value');
let counterValue = 0;
valueSpan.textContent = counterValue;
const decrementHandler = () => {
  counterValue -= 1;
  valueSpan.textContent = counterValue;
};
const incrementHandler = () => {
  counterValue += 1;
  valueSpan.textContent = counterValue;
};
decrementBtn.addEventListener('click', decrementHandler);
incrementBtn.addEventListener('click', incrementHandler);