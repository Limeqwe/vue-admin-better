import BaseApi from '../utils/baseApi'
// import request from 'axios'
export default class user extends BaseApi {
  static async Totest(id) {
    const url = `/play1/${id}`
    const data = await this.$get(url)
    return data
  }
}
// export function getTest(id) {
//   return request({
//     url: `/api/test/play1/${id}`,
//     // baseURL: 'http://localhost:8080',
//     method: 'get',
//     timeout: 10000,
//   })
// }
