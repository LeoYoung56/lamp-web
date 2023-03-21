import axiosApi from './AxiosApi.js'

const apiList = {
  page: {
    method: 'POST',
    url: `/tenant/page`
  },
  update: {
    method: 'PUT',
    url: `/tenant`
  },
  save: {
    method: 'POST',
    url: `/tenant`
  },
  saveInit: {
    method: 'POST',
    url: `/tenant/init`
  },
  updateStatus: {
    method: 'POST',
    url: `/tenant/status`
  },
  remove: {
    method: 'DELETE',
    url: `/tenant/deleteAll`
  },
  list: {
    method: 'POST',
    url: `/tenant/query`
  },
  preview: {
    method: 'POST',
    url: `/tenant/preview`
  },
  export: {
    method: 'POST',
    url: `/tenant/export`
  },
  import: {
    method: 'POST',
    url: `/tenant/import`
  },
  initConnect: {
    method: 'POST',
    url: `/tenant/initConnect`
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
  // 同步创建租户，防止在切换回默认数据源时，执行其他方法
  async saveInit (data) {
    return axiosApi({
      ...apiList.saveInit,
      data
    })
  },
  update (data) {
    return axiosApi({
      ...apiList.update,
      data
    })
  },
  updateStatus (data) {
    return axiosApi({
      ...apiList.updateStatus,
      formData: true,
      data
    })
  },
  remove (data) {
    return axiosApi({
      ...apiList.remove,
      data
    })
  },
  list (data) {
    return axiosApi({
      ...apiList.list,
      data
    })
  },
  check (code) {
    return axiosApi({
      method: 'GET',
      url: `/tenant/check/${code}`
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
  initConnect (data) {
    return axiosApi({
      ...apiList.initConnect,
      custom: {
        timeout: 60000
      },
      data,
    })
  }
}
