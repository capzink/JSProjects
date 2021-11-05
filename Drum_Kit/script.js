function removeTransition(e) {
   if (e.propertyName !== 'transform') return;
   e.target.classList.remove('playing');
 }

 function sound(e) {
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   const button = document.querySelector(`div[data-key="${e.keyCode}"]`);
   if (!audio) return;
   button.classList.add('playing');
   audio.currentTime = 0;
   audio.play();
 }

 const buttons = document.querySelectorAll('div');
 buttons.forEach(b => b.addEventListener('transitionend', removeTransition));
 window.addEventListener('keydown', sound);
