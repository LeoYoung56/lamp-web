import axiosApi from './AxiosApi.js'

const apiList = {
  page: {
    url: `/smsTask/page`,
    method: 'POST'
  },
  save: {
    url: `/smsTask`,
    method: 'POST'
  },
  update: {
    url: `/smsTask`,
    method: 'PUT'
  },
  delete: {
    url: `/smsTask`,
    method: 'DELETE'
  },
  preview: {
    method: 'POST',
    url: `/smsTask/preview`
  },
  export: {
    method: 'POST',
    url: `/smsTask/export`
  },
  import: {
    method: 'POST',
    url: `/smsTask/import`
  }
}

export default {
  page (data) {
    return axiosApi({
      ...apiList.page,
      data
    })
  },
  save (data) {
    return axiosApi({
      ...apiList.save,
      data
    })
  },
  update (data) {
    return axiosApi({
      ...apiList.update,
      data
    })
  },
  delete (data) {
    return axiosApi({
      ...apiList.delete,
      data
    })
  },
  get (id) {
    return axiosApi({
      url: `/smsTask/detail/${id}`,
      method: 'GET'
    })
  },
  preview (data) {
    return axiosApi({
      ...apiList.preview,
      data
    })
  },
  export (data) {
    return axiosApi({
      ...apiList.export,
      responseType: "blob",
      data
    })
  },
  import (data) {
    return axiosApi({
      ...apiList.import,
      data
    })
  }
}
