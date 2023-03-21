import axiosApi from './AxiosApi.js'

const apiList = {
  list: {
    method: 'POST',
    url: `/online/list`
  },
  t: {
    method: 'POST',
    url: `/online/t`
  }
}

export default {
  list(data) {
    return axiosApi({
      ...apiList.list,
      formData: true,
      data
    })
  },
  t(data) {
    return axiosApi({
      ...apiList.t,
      formData: true,
      data
    })
  }
}
