// Add falling lilies
function createLily() {
  const lily = document.createElement('div');
  lily.innerHTML = '🌸';
  lily.classList.add('lily');
  lily.style.left = Math.random() * 100 + 'vw';
  lily.style.animationDuration = Math.random() * 3 + 2 + 's';
  document.body.appendChild(lily);

  setTimeout(() => {
    lily.remove();
  }, 5000);
}

setInterval(createLily, 300);

// Button click event
document.getElementById('valentineButton').addEventListener('click', () => {
  alert('You are the only one eligible to be my Valentine! Will you?');
});
