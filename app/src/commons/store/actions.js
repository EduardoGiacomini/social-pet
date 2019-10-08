import actionTypes from '@/commons/constants/action-types'

export default {
  [actionTypes.VERIFY_TOUR_STATUS] () {
    return localStorage.tourStatus
  }
}
