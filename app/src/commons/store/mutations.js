import mutationTypes from '@/commons/constants/mutation-types'

export default {
  [mutationTypes.SET_TOUR_COMPLETED] (state) {
    state.tourCompleted = true
  }
}
