import axiosApi from './AxiosApi.js'

const apiList = {
  page: {
    url: `/smsTemplate/page`,
    method: 'POST'
  },
  save: {
    url: `/smsTemplate`,
    method: 'POST'
  },
  update: {
    url: `/smsTemplate`,
    method: 'PUT'
  },
  delete: {
    url: `/smsTemplate`,
    method: 'DELETE'
  },
  check: {
    url: `/smsTemplate/check`,
    method: 'GET'
  },
  preview: {
    method: 'POST',
    url: `/smsTemplate/preview`
  },
  export: {
    method: 'POST',
    url: `/smsTemplate/export`
  },
  import: {
    method: 'POST',
    url: `/smsTemplate/import`
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
  check (customCode) {
    const data = { customCode: customCode }
    return axiosApi({
      ...apiList.check,
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
