import axiosApi from './AxiosApi.js'

const apiList = {
  page: {
    method: 'POST',
    url: `/user/page`
  },
  save: {
    method: 'POST',
    url: `/user`
  },
  update: {
    method: 'PUT',
    url: `/user`
  },
  updateBaseInfo: {
    method: 'PUT',
    url: `/user/base`
  },
  avatar: {
    method: 'PUT',
    url: `/user/avatar`
  },
  delete: {
    method: 'DELETE',
    url: `/user`
  },
  reset: {
    method: 'POST',
    url: `/user/reset`
  },
  updatePassword: {
    method: 'PUT',
    url: `/user/password`
  },
  reload: {
    method: 'POST',
    url: `/user/reload`
  },
  preview: {
    method: 'POST',
    url: `/user/preview`
  },
  export: {
    method: 'POST',
    url: `/user/export`
  },
  import: {
    method: 'POST',
    url: `/user/import`
  },
  find: {
    method: 'GET',
    url: `/user/findAll`
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
  updateBaseInfo (data) {
    return axiosApi({
      ...apiList.updateBaseInfo,
      data
    })
  },
  updatePassword (data) {
    return axiosApi({
      ...apiList.updatePassword,
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
      method: 'GET',
      url: `/user/${id}`
    })
  },
  reset (data) {
    return axiosApi({
      ...apiList.reset,
      data
    })
  },
  avatar (data) {
    return axiosApi({
      ...apiList.avatar,
      data
    })
  },
  reload (userId) {
    return axiosApi({
      ...apiList.reload,
      formData: true,
      data: { userId: userId }
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
  },
  find (data) {
    return axiosApi({
      ...apiList.find,
      data
    })
  }
}
