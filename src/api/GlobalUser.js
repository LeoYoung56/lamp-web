import axiosApi from './AxiosApi.js'

const apiList = {
  page: {
    url: `/globalUser/page`,
    method: 'POST'
  },
  save: {
    method: 'POST',
    url: `/globalUser`
  },
  update: {
    method: 'PUT',
    url: `/globalUser`
  },
  remove: {
    method: 'DELETE',
    url: `/globalUser/delete`
  },
  check: {
    method: 'GET',
    url: `/globalUser/check`
  },
  preview: {
    method: 'POST',
    url: `/globalUser/preview`
  },
  export: {
    method: 'POST',
    url: `/globalUser/export`
  },
  import: {
    method: 'POST',
    url: `/globalUser/import`
  },
  reset: {
    method: 'PUT',
    url: `/globalUser/reset`
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
      data: data || {}
    })
  },
  update (data) {
    return axiosApi({
      ...apiList.update,
      data: data || {}
    })
  },
  remove (data) {
    return axiosApi({
      ...apiList.remove,
      formData: true,
      data: data || {}
    })
  },
  check (data) {
    return axiosApi({
      ...apiList.check,
      formData: true,
      data: data || {}
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
  reset (data) {
    return axiosApi({
      ...apiList.reset,
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
