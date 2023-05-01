import request from 'axios'

export function selectListByRuleId(ruleId) {
  return request({
    url: `/api/beta/selectListByRuleId/${ruleId}`,
    baseURL: 'http://localhost:8080',
    method: 'get',
  })
}

export function selectAllBook() {
  return request({
    url: `/api/beta/selectAllNovel`,
    // baseURL: 'http://localhost:8090',
    method: 'get',
  })
}

export function selectBookByBookName(bookName) {
  return request({
    url: `/api/beta/selectNovelByNovelName/${bookName}`,
    baseURL: 'http://localhost:8080',
    method: 'get',
  })
}

export function selectWriterBook(authorName) {
  return request({
    url: `/api/beta/selectNovelByWriterName/${authorName}`,
    baseURL: 'http://localhost:8080',
    method: 'get',
  })
}

export function selectWriterInformation(authorName) {
  return request({
    url: `/api/beta/selectWriterInformationByWriterName/${authorName}`,
    // baseURL: 'http://localhost:8090',
    method: 'get',
  })
}

export function deleteRule(id) {
  return request({
    url: `/api/beta/deleteRuleByRuleId/${id}`,
    // baseURL: 'http://localhost:8090',
    method: 'get',
  })
}

export function getRule() {
  return request({
    url: `/api/beta/getAllRule`,
    // baseURL: 'http://localhost:8090',
    method: 'get',
  })
}

export function setRule(param) {
  return request({
    url: `/api/beta/setRule`,
    baseURL: 'http://localhost:8080',
    method: 'post',
    params: param,
  })
}

export function RandomSelectBook(param) {
  return request({
    url: `/api/beta/randomSelectNovel`,
    // baseURL: 'http://localhost:8090',
    method: 'post',
    params: param,
  })
}

export function getTest(id) {
  return request({
    url: `/api/beta/play1/${id}`,
    // baseURL: 'http://localhost:8090',
    method: 'get',
  })
}

export function postTest(param) {
  return request({
    url: `/api/beta/play2`,
    // baseURL: 'http://localhost:8090',
    method: 'post',
    params: param,
  })
}

export function login(param) {
  return request({
    url: `/api/beta/login`,
    // baseURL: 'http://localhost:8090',
    method: 'post',
    params: param,
  })
}

export function postPieInformation(param) {
  return request({
    url: `api/beta/selectRuleListByRuleId`,
    method: 'post',
    params: param,
  })
}
