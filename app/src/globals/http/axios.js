import axios from 'axios'
import successHandler from './success-handler'
import errorHandler from './error-handler'

axios.interceptors.request.use(successHandler.request, errorHandler.requestOrResponse)
axios.interceptors.response.use(successHandler.response, errorHandler.requestOrResponse)
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.timeout = 4 * 60 * 1000
