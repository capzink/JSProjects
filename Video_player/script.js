const video = document.getElementById('videoid');
const time =document.querySelector('.timestamp');
const play=document.getElementById('play')
const stopvid=document.getElementById('stop')
const progress=document.getElementById('progress')


//functions

//play and pause video
const playandpause = ()=>{
  if (video.paused) {
    video.play();
  } else {
    video.pause();
   
  }
}
//stop video
const stopVideo = () =>{
  video.currentTime =0
  video.pause()
}

//update play icon
const updateplay = ()=>{
  if(video.paused){
    play.innerHTML ='<i class="bi bi-play-fill" style="font-size: 2rem;"></i>'
  }
  else{
    play.innerHTML ='<i class="bi bi-pause-fill" style="font-size: 2rem;"></i>'

  }
}

//video progress

const videoprogress = ()=>{
  progress.value = ( video.currentTime/ video.duration)*100;

  //get minutes
  let mins = Math.floor (video.currentTime /60);
  if(mins < 10){
    mins = '0' + String(mins)
  }
  //get seconds
  let secs = Math.floor (video.currentTime % 60);
  if(secs < 10){
    secs = '0' + String(secs)
  }

  timestamp.innerHTML = `${mins}:${secs}`


}

const skiptime = ()=>{
  video.currentTime =(+progress.value *video.duration)/100

}



//event listernes

video.addEventListener("click", playandpause);
video.addEventListener("play", updateplay);
video.addEventListener("pause", updateplay);
video.addEventListener("timeupdate", videoprogress);

play.addEventListener("click", playandpause)


stopvid.addEventListener("click", stopVideo)


progress.addEventListener('change', skiptime)





