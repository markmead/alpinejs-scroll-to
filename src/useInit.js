export function useInit({ targetId, offsetHeader = false, useSmooth = true }) {
  const scrollToEl = document.getElementById(targetId)
  const scrollToElPos = scrollToEl.getBoundingClientRect()

  let scrollOffset = 0

  if (offsetHeader) {
    scrollOffset = document.querySelector('[x-scroll-to-header]').clientHeight
  }

  window.scrollTo({
    top: scrollToElPos.top - scrollOffset,
    left: 0,
    behavior: useSmooth ? 'smooth' : 'auto',
  })
}
