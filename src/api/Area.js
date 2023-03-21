import axiosApi from './AxiosApi.js'

const apiList = {
  page: {
    method: 'POST',
    url: `/area/page`,
  },
  update: {
    method: 'PUT',
    url: `/area`
  },
  save: {
    method: 'POST',
    url: `/area`
  },
  delete: {
    method: 'DELETE',
    url: `/area`
  },
  query: {
    method: 'POST',
    url: `/area/query`
  },
  linkage: {
    method: 'GET',
    url: `/area/linkage`
  },
  tree: {
    method: 'GET',
    url: `/area/tree`
  },
}

export default {
  page(data) {
    return axiosApi({
      ...apiList.page,
      data
    })
  },
  tree(data) {
    return axiosApi({
      ...apiList.tree,
      data
    })
  },
  query(data) {
    return axiosApi({
      ...apiList.query,
      data
    })
  },
  linkage(data) {
    return axiosApi({
      ...apiList.linkage,
      data
    })
  },
  save(data) {
    return axiosApi({
      ...apiList.save,
      data
    })
  },
  update(data) {
    return axiosApi({
      ...apiList.update,
      data
    })
  },
  delete(data) {
    return axiosApi({
      ...apiList.delete,
      data
    })
  },
  check(code, id) {
    return axiosApi({
      method: 'GET',
      url: `/area/check/` + code,
      data: {id: id}
    })
  }
}
