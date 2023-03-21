import axiosApi from './AxiosApi.js'

const apiList = {
  page: {
    method: 'POST',
    url: `/optLog/page`
  },
  delete: {
    method: 'DELETE',
    url: `/optLog`
  },
  clear: {
    method: 'DELETE',
    url: `/optLog/clear`
  },
  preview: {
    method: 'POST',
    url: `/optLog/preview`
  },
  export: {
    method: 'POST',
    url: `/optLog/export`
  },
  import: {
    method: 'POST',
    url: `/optLog/import`
  }
}

export default {
  page (data) {
    return axiosApi({
      ...apiList.page,
      data
    })
  },
  get (id) {
    return axiosApi({
      url: `/optLog/${id}`,
      method: 'get'
    })
  },
  delete (data) {
    return axiosApi({
      ...apiList.delete,
      data
    })
  },
  clear (data) {
    return axiosApi({
      ...apiList.clear,
      data
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
