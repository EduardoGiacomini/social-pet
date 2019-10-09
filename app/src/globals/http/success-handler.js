import mutationTypes from '@/commons/constants/mutation-types'
import store from '@/commons/store'
import toast from '../libs/toast'

class SuccessHandler {
  request (config) {
    store.commit(mutationTypes.SET_LOADING, true)
    return config
  }
  response (response) {
    store.commit(mutationTypes.SET_LOADING, false)
    toast.success('Operação bem sucedida!')
    return response
  }
}

const successHandler = new SuccessHandler()
export default successHandler
