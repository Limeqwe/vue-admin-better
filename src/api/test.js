import request from 'axios'

export function getTest(id) {
  return request({
    url: `http://localhost:8080/api/test/play1/${id}`,
    method: 'get',
    timeout: 10000,
  })
}
