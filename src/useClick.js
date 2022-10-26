export function useClick(targetEl, { offsetHeader = false, useSmooth = true }) {
  const targetId = targetEl.href.split('#')[1]
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
