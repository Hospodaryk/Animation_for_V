const numberOfanimations = 100;
const animationContainer = document.querySelector('.animations');

for (let i = 0; i < numberOfanimations; i++) {
  const animation = document.createElement('div');
  animation.className = 'animation';
  animation.style.left = `${Math.random() * 100}vw`;
  animation.style.animationDelay = `${Math.random() * 10}s`;
  // animation.style.fontSize = `${Math.random() * 10 + 10}px`;
  animation.innerText = "⚙️";
  animationContainer.appendChild(animation);
}
