import axiosApi from './AxiosApi.js'

const apiList = {
  getChart: `/dashboard/chart`,
  getItem: `/dashboard/item`
}

export default {
  getChart (data) {
    return axiosApi({
      method: 'GET',
      url: apiList.getChart,
      data
    })
  },
  getItem (data) {
    return axiosApi({
      method: 'GET',
      url: apiList.getItem,
      data
    })
  },
}
