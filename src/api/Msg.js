import axiosApi from './AxiosApi.js'

const apiList = {
  page: {
    url: `/page`,
    method: 'POST'
  },
  mark: {
    url: `/anyone/myMsg/mark`,
    method: 'POST'
  },
  save: {
    url: ``,
    method: 'POST'
  },
  delete: {
    url: ``,
    method: 'DELETE'
  },
  preview: {
    method: 'POST',
    url: `/preview`
  },
  export: {
    method: 'POST',
    url: `/export`
  },
  import: {
    method: 'POST',
    url: `/import`
  }
}

export default {
  page (data, custom = {}) {
    return axiosApi({
      ...apiList.page,
      data,
      custom
    })
  },
  save (data) {
    return axiosApi({
      ...apiList.save,
      data
    })
  },
  delete (data) {
    return axiosApi({
      ...apiList.delete,
      data
    })
  },
  mark (data) {
    return axiosApi({
      ...apiList.mark,
      data
    })
  },
  get (id) {
    return axiosApi({
      url: `/${id}`,
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
