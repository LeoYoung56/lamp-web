import axiosApi from './AxiosApi.js'

const apiList = {
  page: {
    url: `/role/page`,
    method: 'POST'
  },
  save: {
    url: `/role`,
    method: 'POST'
  },
  update: {
    url: `/role`,
    method: 'PUT'
  },
  delete: {
    url: `/role`,
    method: 'DELETE'
  },
  saveUserRole: {
    url: `/role/saveUserRole`,
    method: 'POST'
  },
  saveRoleAuthority: {
    url: `/role/saveResource`,
    method: 'POST'
  },
  preview: {
    method: 'POST',
    url: `/role/preview`
  },
  export: {
    method: 'POST',
    url: `/role/export`
  },
  import: {
    method: 'POST',
    url: `/role/import`
  }
}

export default {
  page (data) {
    return axiosApi({
      ...apiList.page,
      // formData: true,
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
  get (id) {
    return axiosApi({
      url: `/role/${id}`,
      method: 'GET'
    })
  },
  getDetails (id) {
    return axiosApi({
      url: `/role/details`,
      method: 'GET',
      data: { id }
    })
  },
  check (code) {
    return axiosApi({
      url: `/role/check`,
      method: 'GET',
      data: { code }
    })
  },
  saveUserRole (data) {
    return axiosApi({
      ...apiList.saveUserRole,
      data
    })
  },
  findUserIdByRoleId (roleId) {
    return axiosApi({
      url: `/role/userList`,
      method: 'GET',
      data: { roleId }
    })
  },
  findAuthorityIdByRoleId (roleId) {
    return axiosApi({
      url: `/role/resourceList`,
      method: 'GET',
      data: { roleId }
    })
  },
  saveRoleAuthority (data) {
    return axiosApi({
      ...apiList.saveRoleAuthority,
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
