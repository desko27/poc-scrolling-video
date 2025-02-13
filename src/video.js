import { ScrollTrigger, gsap } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

function once(element, event, fn, options) {
  const onceFn = (...args) => {
    element.removeEventListener(event, onceFn)
    fn(...args)
  }
  element.addEventListener(event, onceFn, options)
}

export function setupVideoAnimation() {
  const video = document.querySelector('.video')

  const timeline = gsap.timeline({
    defaults: { duration: 1 },
    scrollTrigger: {
      trigger: '#container',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
    },
  })

  once(video, 'loadedmetadata', () => {
    timeline.fromTo(
      video,
      { currentTime: 0 },
      { currentTime: video.duration || 1 },
    )
  })
}
