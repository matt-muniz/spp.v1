import { isMobile } from 'mobile-device-detect'

const state = () => ({
  layout: isMobile ? 'mobile' : 'mobile'
})

const getters = {
  layout(state) {
    return state.layout
  }
}

export { state, getters }
