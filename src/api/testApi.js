import request from 'axios'

export function selectListByRuleId(ruleId) {
  return request({
    url: `/api/test/selectListByRuleId/${ruleId}`,
    baseURL: 'http://localhost:8080',
    method: 'get',
  })
}

export function selectAllBook() {
  return request({
    url: `/api/test/selectAllBook`,
    // baseURL: 'http://localhost:8090',
    method: 'get',
  })
}

export function selectBookByBookName(bookName) {
  return request({
    url: `/api/test/selectBookByBookName/${bookName}`,
    baseURL: 'http://localhost:8080',
    method: 'get',
  })
}

export function selectWriterBook(authorName) {
  return request({
    url: `/api/test/selectWriterBook/${authorName}`,
    baseURL: 'http://localhost:8080',
    method: 'get',
  })
}

export function selectWriterInformation(authorName) {
  return request({
    url: `/api/test/selectWriterInformation/${authorName}`,
    // baseURL: 'http://localhost:8090',
    method: 'get',
  })
}

export function deleteRule(id) {
  return request({
    url: `/api/test/deleteRule/${id}`,
    // baseURL: 'http://localhost:8090',
    method: 'get',
  })
}

export function getRule() {
  return request({
    url: `/api/test/getRule`,
    // baseURL: 'http://localhost:8090',
    method: 'get',
  })
}

export function setRule(param) {
  return request({
    url: `/api/test/setRule`,
    baseURL: 'http://localhost:8080',
    method: 'post',
    params: param,
  })
}

export function RandomSelectBook(param) {
  return request({
    url: `/api/test/RandomSelectBook`,
    // baseURL: 'http://localhost:8090',
    method: 'post',
    params: param,
  })
}

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

export function login(param) {
  return request({
    url: `/api/test/login`,
    // baseURL: 'http://localhost:8090',
    method: 'post',
    params: param,
  })
}
export function postListByListName(param) {
  return request({
    url: `api/test/selectListByListName`,
    method: 'post',
    params: param,
  })
}
export function postPieInformation(param) {
  return request({
    url: `api/test/selectPieInformation`,
    method: 'post',
    params: param,
  })
}
