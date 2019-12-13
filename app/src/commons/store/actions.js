import axios from 'axios'
import actionTypes from '@/commons/constants/action-types'
import mutationTypes from '@/commons/constants/mutation-types'

export default {
  async [actionTypes.CREATE_ACCOUNT] ({ commit }, user) {
    const { data } = await axios.post(`http://localhost:3000/api/user`, user)
    commit(mutationTypes.SET_USER, data)
    return data
  },
  [actionTypes.VERIFY_TOUR_STATUS] () {
    return localStorage.tourStatus
  }
}
