import request from 'axios'

export function getTest(id) {
  return request({
    url: `/api/test/play1/${id}`,
    baseURL: 'http://localhost:8080',
    method: 'get',
  })
}

export function postTest(param) {
  return request({
    url: `/api/test/play2`,
    baseURL: 'http://localhost:8080',
    method: 'post',
    params: param,
  })
}
