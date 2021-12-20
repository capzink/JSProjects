const values = document.querySelectorAll('input')
const changeVals = function (){
  const mix=this.dataset.nemonic || ' ';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + mix)
  
}
values.forEach(e=>e.addEventListener('change',changeVals))
values.forEach(e=>e.addEventListener('mousemove',changeVals))

