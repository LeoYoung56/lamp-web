import axiosApi from './AxiosApi.js'

const apiList = {
  page: {
    method: 'POST',
    url: `/datasourceConfig/page`
  },
  query: {
    method: 'POST',
    url: `/datasourceConfig/query`
  },
  update: {
    method: 'PUT',
    url: `/datasourceConfig`
  },
  save: {
    method: 'POST',
    url: `/datasourceConfig`
  },
  delete: {
    method: 'DELETE',
    url: `/datasourceConfig`
  },
  export: {
    method: 'POST',
    url: `/datasourceConfig/export`
  },
  preview: {
    method: 'POST',
    url: `/datasourceConfig/preview`
  },
  import: {
    method: 'POST',
    url: `/datasourceConfig/import`
  },
  testConnect: {
    method: 'POST',
    url: `/datasourceConfig/testConnect`
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
  query (data, custom = {}) {
    return axiosApi({
      ...apiList.query,
      data,
      custom
    })
  },
  save (data, custom = {}) {
    return axiosApi({
      ...apiList.save,
      data,
      custom
    })
  },
  update (data, custom = {}) {
    return axiosApi({
      ...apiList.update,
      data,
      custom
    })
  },
  delete (data, custom = {}) {
    return axiosApi({
      ...apiList.delete,
      data,
      custom
    })
  },
  export (data, custom = {}) {
    return axiosApi({
      ...apiList.export,
      responseType: "blob",
      data,
      custom
    })
  },
  preview (data, custom = {}) {
    return axiosApi({
      ...apiList.preview,
      data,
      custom
    })
  },
  import (data, custom = {}) {
    return axiosApi({
      ...apiList.import,
      data,
      custom
    })
  },
  testConnect (data, custom = {}) {
    return axiosApi({
      ...apiList.testConnect,
      data,
      custom
    })
  }
}
