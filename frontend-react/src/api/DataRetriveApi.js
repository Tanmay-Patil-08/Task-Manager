import {apiClient} from './ApiClient'

export const retriveAllTasks = (username)=> apiClient.get(`/users/${username}/task`)
export const retriveTaskById = (username,id)=> apiClient.get(`/users/${username}/task/${id}`)

export const deleteTaskById = (username,id)=> apiClient.delete(`/users/${username}/task/${id}`)

export const updateTaskById = (username,id,task)=> apiClient.put(`/users/${username}/task/${id}`,task)
export const createNewTask = (username,task)=> apiClient.post(`/users/${username}/task`,task)

export const countOfActiveTask = ()=> apiClient.get(`/tasks/count`)