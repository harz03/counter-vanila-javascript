let count = 0;

const value = document.getElementById('value');
const buttons = document.querySelectorAll('.btn');

buttons.forEach((items) => {
  items.addEventListener('click', (e) => {
    console.log(e);
    console.log(items);
    if (items.classList.contains('increase')) {
      count += 1;
      value.textContent = count;
    } else if (items.classList.contains('decrease')) {
      count -= 1;
      value.textContent = count;
    } else {
      count = 0;
      value.textContent = count;
    }
    count >= 0 ? (value.style.color = 'green') : (value.style.color = 'red');
    count === 0 ? (value.style.color = 'black') : -1;
  });
});
