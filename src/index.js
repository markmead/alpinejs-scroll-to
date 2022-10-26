import { useClick } from './useClick'
import { useInit } from './useInit'

export default function (Alpine) {
  Alpine.magic('scrollTo', (el, {}) => (scrollData) => {
    if (scrollData.targetId) {
      return useInit(scrollData)
    }

    useClick(el, scrollData)
  })
}
