import BaseApi from '../utils/baseApi'

export default class user extends BaseApi {
  static async Totest() {
    const url = '/play1/1'
    const data = await this.$get(url)
    return data
  }
}
