import axiosApi from './AxiosApi.js'

const apiList = {
  page: {
    method: 'POST',
    url:`/dictionary/page`,
  },
  update: {
    method: 'PUT',
    url: `/dictionary`
  },
  save: {
    method: 'POST',
    url: `/dictionary`
  },
  delete: {
    method: 'DELETE',
    url: `/dictionary`
  },
  pageType: {
    method: 'POST',
    url:`/dictionary/pageType`,
  },
  updateType: {
    method: 'PUT',
    url: `/dictionary/type`
  },
  saveType: {
    method: 'POST',
    url: `/dictionary/type`
  },
  deleteType: {
    method: 'DELETE',
    url: `/dictionary/type`
  },
  codes: {
    method: 'POST',
    url: `/dictionary/codes`
  },
}

export default {
  codes (data) {
    return axiosApi({
      ...apiList.codes,
      data
    })
  },
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
  pageType (data) {
    return axiosApi({
      ...apiList.pageType,
      data
    })
  },
  saveType (data) {
    return axiosApi({
      ...apiList.saveType,
      data
    })
  },
  updateType (data) {
    return axiosApi({
      ...apiList.updateType,
      data
    })
  },
  deleteType (data) {
    return axiosApi({
      ...apiList.deleteType,
      data
    })
  },
}
