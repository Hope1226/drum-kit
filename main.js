const keys = document.querySelectorAll(".keys");

keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    const audio = document.querySelector(`audio[data-key="${e.target.id}"]`)
    const key = document.querySelector(`.keys[data-key="${e.target.id}"]`);
    audio.play()
    key.classList.add('playing');
    setTimeout(() => {
    key.classList.remove('playing')
    }, 100)
  })
})

window.addEventListener('keydown', (e) => {
  const auido = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.keys[data-key="${e.keyCode}"]`);
  if(!auido) return;
  auido.currentTime = 0;
  auido.play();
  key.classList.add('playing');
  setTimeout(() => {
    key.classList.remove('playing')
  }, 100)    
})                                   