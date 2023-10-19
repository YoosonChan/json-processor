// [ ] 获取json字段属性方法
// [ ] 提取对应属性内容
// [ ] 转换为数组或者文件
// [ ] 转换为对象
// TODO: 深层遍历处理

import _ from 'lodash';

type JsonProcessorTarget<T = any> = T | T[]

type JsonType = "array" | "object"

/**
 * 此方法针对的场景是，一个对象的值为数组，或者一个对象数组。
 * @param jsonString 
 * @returns 
 */
export function jsonProcessorForArray(jsonString: string) {
  let parsedData: JsonProcessorTarget | undefined
  try {
    parsedData = JSON.parse(jsonString)
  } catch (error) {
    console.error('There is something wrong with the JSON string: ', (error as Error).message);
  }

  const type = getJsonType(parsedData)
  const values = getJsonValues(type, parsedData)

  return {
    type,
    values
  }
}

const getJsonType = (target?: JsonProcessorTarget) => {
  if (_.isArray(target)) {
    return "array"
  } else if (_.isObject(target)) {
    return "object"
  }
  return
}

const getJsonValues = (type?: JsonType, target?: JsonProcessorTarget) => {
  if (type === 'array') {
    return target ?? []
  } else if (type === 'object') {
    return getObjectValues(target)
  }
  return []
}

const getObjectValues = (target?: JsonProcessorTarget, isDeep = false) => {
  // 找出是数组的key
  const validObject = _.pickBy(target, _.isArray)
  const _keys = _.keys(validObject)
  return _keys.map((key) => validObject[key])
}
