import mutationTypes from '@/commons/constants/mutation-types'
import store from '@/commons/store'
import toast from '../libs/toast'

class ErrorHandler {
  requestOrResponse (error) {
    store.commit(mutationTypes.SET_LOADING, false)
    toast.error(error.response.data.message)
    return Promise.reject(error)
  }
}

const errorHandler = new ErrorHandler()
export default errorHandler
