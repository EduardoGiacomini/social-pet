import axios from 'axios'
import actionTypes from '@/commons/constants/action-types'

export default {
  async [actionTypes.CREATE_ACCOUNT] ({ dispatch }, user) {
    try {
      const { data } = await axios.post(`http://localhost:3000/api/user`, user)
      // await dispatch(actionTypes.AFTER_LOGIN, data)
      console.log(data)
    } catch (error) {
      console.log(error)
      return error
    }
  },
  [actionTypes.VERIFY_TOUR_STATUS] () {
    return localStorage.tourStatus
  }
}
