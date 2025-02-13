import './style.css'
import './video.css'
import { setupVideoAnimation } from './video.js'

document.querySelector('#app').innerHTML = `
  <video class="video" preload="auto" muted playsinline autoplay onloadedmetadata="this.pause()">
    <source src="/airpods.mp4" type="video/mp4">
  </video>
  <div id="container"></div>
`

setupVideoAnimation()
