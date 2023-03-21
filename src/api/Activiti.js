import axiosApi from './AxiosApi.js'

const apiList = {
  //查询模型
  findModel: {
    method: 'post',
    url: `/model/pageModel`
  },
  //删除模型
  save: {
    method: 'post',
    url: `/model/save`,
    formData: true,
  },
  deleteModel: {
    method: 'delete',
    url: `/model/delete`,
    formData: true,
  },
  //发布流程
  publishModel: {
    method: 'post',
    url: `/model/publish`
  },

  //查询流程定义
  pageDefinition: {
    method: 'post',
    url: `/definition/page`
  },
  deleteDefinition: {
    method: 'delete',
    url: `/definition/delete`
  },
  updateSuspendState: {
    method: 'put',
    url: `/definition/updateSuspendState`
  },
  defUpload: {
    method: 'post',
    url: `/definition/upload`
  },
  saveModelByPro: {
    method: 'POST',
    url: `/definition/saveModelByPro`
  },

  readResource: {
    method: 'get',
    url: `/definition/readResource`
  },

  //表单查询
  formQuery: {
    method: 'post',
    url: `/formCore/query`
  },

  formItemQuery: {
    method: 'post',
    url: `/formCoreItem/query`
  },

  //流程实例
  updateSuspendStateInst: {
    method: 'get',
    url: `/instance/updateSuspendStateInst`
  },

  //请假相关实例
  saveInstant: {
    method: 'post',
    url: `/bizLeave/save`
  },
  deleteInst: {
    method: 'post',
    url: `/bizLeave/delete`
  },
  pageInstant: {
    method: 'post',
    url: `/bizLeave/pageBiz`
  },
  getDetailInst: {
    method: 'get',
    url: `/bizLeave/get`
  },

  //报销相关实例

  saveInstantReimbursement: {
    method: 'post',
    url: `/bizReimbursement/save`
  },
  deleteInstReimbursement: {
    method: 'post',
    url: `/bizReimbursement/delete`
  },
  pageInstantReimbursement: {
    method: 'post',
    url: `/bizReimbursement/pageBiz`
  },
  getDetailInstReimbursement: {
    method: 'get',
    url: `/bizReimbursement/get`
  },

  //待办
  pageTask: {
    method: 'post',
    url: `/bizLeave/pageRunTask`
  },
  pageHiTask: {
    method: 'post',
    url: `/bizLeave/pageHiTask`
  },
  pageTaskReimbursement: {
    method: 'post',
    url: `/bizReimbursement/pageRunTask`
  },
  pageHiTaskReimbursement: {
    method: 'post',
    url: `/bizReimbursement/pageHiTask`
  },
  getItemDetail: {
    method: 'get',
    url: `/bizItem/get`
  },
  getItemList: {
    method: 'get',
    url: `/bizItem/find`
  },
  saveItem: {
    method: 'post',
    url: `/bizItem/save`
  },

  //任务
  updateAssignee: {
    method: 'get',
    url: `/task/updateAssignee`
  },
  getReadyTaskByInst: {
    method: 'get',
    url: `/task/getReadyTaskByInst`
  },
}

export default {
  pageModel (data) {
    return axiosApi({
      ...apiList.findModel,
      data
    })
  },
  addModel (data) {
    return axiosApi({
      ...apiList.save,
      data
    })
  },
  deleteModel (data) {
    return axiosApi({
      ...apiList.deleteModel,
      data
    })
  },
  publishModel (data) {
    return axiosApi({
      ...apiList.publishModel,
      data
    })
  },
  pageDefinition (data) {
    return axiosApi({
      ...apiList.pageDefinition,
      data
    })
  },
  deleteDefinition (data) {
    return axiosApi({
      ...apiList.deleteDefinition,
      data
    })
  },
  updateSuspendState (data) {
    return axiosApi({
      ...apiList.updateSuspendState,
      formData: true,
      data
    })
  },
  defUpload (data) {
    return axiosApi({
      ...apiList.defUpload,
      data
    })
  },
  saveModelByPro(data) {
    return axiosApi({
      ...apiList.saveModelByPro,
      formData: true,
      data
    })
  },
  readResource(data) {
    return axiosApi({
      ...apiList.readResource,
      data
    })
  },
  formQuery(data) {
    return axiosApi({
      ...apiList.formQuery,
      data
    })
  },
  formItemQuery(data) {
    return axiosApi({
      ...apiList.formItemQuery,
      data
    })
  },
  saveInstant(data) {
    return axiosApi({
      ...apiList.saveInstant,
      data
    })
  },
  pageInstant(data) {
    return axiosApi({
      ...apiList.pageInstant,
      data
    })
  },
  getDetailInst(data) {
    return axiosApi({
      ...apiList.getDetailInst,
      data
    })
  },
  updateSuspendStateInst(data) {
    return axiosApi({
      ...apiList.updateSuspendStateInst,
      data
    })
  },
  deleteInst(data) {
    return axiosApi({
      ...apiList.deleteInst,
      data
    })
  },
  pageTask(data) {
    return axiosApi({
      ...apiList.pageTask,
      data
    })
  },
  pageHiTask(data) {
    return axiosApi({
      ...apiList.pageHiTask,
      data
    })
  },
  pageTaskReimbursement(data) {
    return axiosApi({
      ...apiList.pageTaskReimbursement,
      data
    })
  },
  pageHiTaskReimbursement(data) {
    return axiosApi({
      ...apiList.pageHiTaskReimbursement,
      data
    })
  },
  getItemDetail(data) {
    return axiosApi({
      ...apiList.getItemDetail,
      data
    })
  },
  getItemList(data) {
    return axiosApi({
      ...apiList.getItemList,
      data
    })
  },
  saveItem(data) {
    return axiosApi({
      ...apiList.saveItem,
      data
    })
  },
  updateAssignee(data) {
    return axiosApi({
      ...apiList.updateAssignee,
      data
    })
  },
  getReadyTaskByInst(data) {
    return axiosApi({
      ...apiList.getReadyTaskByInst,
      data
    })
  },

  saveInstantReimbursement(data) {
    return axiosApi({
      ...apiList.saveInstantReimbursement,
      data
    })
  },
  deleteInstReimbursement(data) {
    return axiosApi({
      ...apiList.deleteInstReimbursement,
      data
    })
  },
  pageInstantReimbursement(data) {
    return axiosApi({
      ...apiList.pageInstantReimbursement,
      data
    })
  },
  getDetailInstReimbursement(data) {
    return axiosApi({
      ...apiList.getDetailInstReimbursement,
      data
    })
  },
}
