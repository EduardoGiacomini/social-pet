import mutationTypes from '@/commons/constants/mutation-types'

export default {
  [mutationTypes.SET_LOADING] (state, loadingStatus) {
    state.loading = loadingStatus
  }
}
