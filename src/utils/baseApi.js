import { get, post } from './request'

export default class BaseApi {
  static $get = get
  static $post = post
}
