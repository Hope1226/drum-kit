const keys = document.querySelectorAll(".keys");

keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    const audio = document.querySelector(`audio[data-key="${e.target.id}"]`)
    setInterval(() => {
      audio.play()
    }, 2000)
  })
})

window.addEventListener('keydown', (e) => {
  const auido = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if(!auido) return;
  auido.currentTime = 0;
  auido.play();
  
  console.log(auido)
})                                   