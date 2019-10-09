import axios from 'axios'

import toast from '../libs/toast'

axios.interceptors.response.use(
  function (response) {
    toast.success('Operação bem sucedida!')
    return response
  },
  function (error) {
    if (error.response) {
      toast.error(error.response.data.message)
    }
  }
)
