import request from '@/utils/request'

// 电话前缀列表
export function getTelCode() {
    return request({
        url: 'web/getTelCode',
        method: 'get'
    })
}

// 登陆
export function userLogin(data) {
    return request({
        url: 'web/userLogin',
        method: 'post',
        data
    })
}

// 获取验证码
export function getCode(data) {
    return request({
        url: 'web/getCode',
        method: 'get',
        params: data
    })
}

export function userRegister(data) {
    return request({
        url: 'web/userRegister',
        method: 'post',
        data
    })
}

export function getCurrencyPriceAndIncrease(data)
{
    return request({
        url: 'web/getCurrencyPriceAndIncrease',
        method: 'get',
        params: data
    })
}

export function getInfo(data)
{
    return request({
        url: 'web/getInfo',
        method: 'get',
        params: data
    })
}

export function getCurrencyAndValue(data)
{
    return request({
        url: 'web/getCurrencyAndValue',
        method: 'get',
        params: data
    })
}

export function getGG()
{
    return request({
        url: 'web/getGG',
        method: 'get'
    })
}

export function getCutttencyInfo()
{
    return request({
        url: 'web/getCutttencyInfo',
        method: 'get'
    })
}

export function getBanner()
{
    return request({
        url: 'web/getBanner',
        method: 'get'
    })
}

export function getLogo(data)
{
    return request({
        url: 'web/getLogo',
        method: 'get',
        params: data
    })
}

export function getText(data)
{
    return request({
        url: 'web/getText',
        method: 'get',
        params: data
    })
}

export function getSetting()
{
    return request({
        url: 'web/getSetting',
        method: 'get'
    })
}

export function getQrcode()
{
    return request({
        url: 'web/getQrcode',
        method: 'get'
    })
}

export function getmarketList(data)
{
    return request({
        url: 'web/getmarketList',
        method: 'get',
        params: data
    })
}
export function getCurrencyMessage(data)
{
    return request({
        url: 'web/getCurrencyMessage',
        method: 'get',
        params: data
    })
}
export function addCollectCurrenct(data)
{
    return request({
        url: 'web/addCollectCurrenct',
        method: 'post',
        data: data
    })
}

export function getFabiList()
{
    return request({
        url: 'web/getFabiList',
        method: 'get'
    })
}

