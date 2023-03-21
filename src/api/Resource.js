import axiosApi from './AxiosApi.js'

const apiList = {
  page: {
    method: 'POST',
    url: `/resource/page`
  },
  save: {
    method: 'POST',
    url: `/resource`
  },
  update: {
    method: 'PUT',
    url: `/resource`
  },
  delete: {
    method: 'DELETE',
    url: `/resource`
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
  }
}
