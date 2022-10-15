import request from 'axios'

export function getTest(id) {
  return request({
    url: `/api/test/play1/${id}`,
    // baseURL: 'http://localhost:8090',
    method: 'get',
  })
}

export function postTest(param) {
  return request({
    url: `/api/test/play2`,
    // baseURL: 'http://localhost:8090',
    method: 'post',
    params: param,
  })
}

export function postInformation(param) {
  return request({
    url: `api/test/SelectInformationById`,
    //baseURL:'httpL//localhost:8090',
    method: 'post',
    params: param,
  })
}
export function getList(listName) {
  return request({
    url: `/api/test/selectListByListName/${listName}`,
    method: 'get',
  })
}

export function login(param) {
  return request({
    url: `/api/test/login`,
    // baseURL: 'http://localhost:8090',
    method: 'post',
    params: param,
  })
}
