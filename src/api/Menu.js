import axiosApi from './AxiosApi.js'

const apiList = {
  allTree: {
    method: 'POST',
    url: `/menu/tree`
  },
  save: {
    method: 'POST',
    url: `/menu`
  },
  update: {
    method: 'PUT',
    url: `/menu`
  },
  delete: {
    method: 'DELETE',
    url: `/menu`
  }
}

export default {
  allTree (data) {
    return axiosApi({
      ...apiList.allTree,
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
