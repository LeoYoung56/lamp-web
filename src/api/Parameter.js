import axiosApi from './AxiosApi.js'

const apiList = {
  page: {
    method: 'POST',
    url: `/parameter/page`,
  },
  update: {
    method: 'PUT',
    url: `/parameter`
  },
  save: {
    method: 'POST',
    url: `/parameter`
  },
  delete: {
    method: 'DELETE',
    url: `/parameter`
  },
  preview: {
    method: 'POST',
    url: `/parameter/preview`
  },
  export: {
    method: 'POST',
    url: `/parameter/export`
  },
  import: {
    method: 'POST',
    url: `/parameter/import`
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
