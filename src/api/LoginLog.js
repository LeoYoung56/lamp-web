import axiosApi from './AxiosApi.js'

const apiList = {
  page: {
    method: 'POST',
    url: `/loginLog/page`
  },
  delete: {
    method: 'DELETE',
    url: `/loginLog`
  },
  clear: {
    method: 'DELETE',
    url: `/loginLog/clear`
  },
  preview: {
    method: 'POST',
    url: `/loginLog/preview`
  },
  export: {
    method: 'POST',
    url: `/loginLog/export`
  }
}

export default {
  page(data) {
    return axiosApi({
      ...apiList.page,
      data
    })
  },
  delete(data) {
    return axiosApi({
      ...apiList.delete,
      data
    })
  },
  clear(data) {
    return axiosApi({
      ...apiList.clear,
      data
    })
  },
  preview(data) {
    return axiosApi({
      ...apiList.preview,
      data
    })
  },
  export(data) {
    return axiosApi({
      ...apiList.export,
      responseType: "blob",
      data
    })
  }
}
