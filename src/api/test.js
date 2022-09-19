// import request from 'axios'
import request from '@/utils/request2'

export function getTest(id) {
  return request({
    url: `/api/test/play1/${id}`,
    // baseURL: 'http://localhost:8080',
    method: 'get',
    timeout: 10000,
  })
}
