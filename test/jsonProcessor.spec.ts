import { describe, expect, test } from 'vitest';
import { jsonProcessorForArray } from '../utils/jsonProcessor';
const objectJsonString = `
  {
    "name": "test",
    "count": 4,
    "done": true,
    "type": "array",
    "item": {},
    "list1": [
      {
        "key1": "value101",
        "key2": "value102"
      },
      {
        "key1": "value201",
        "key2": "value202"
      }
    ],
    "list2": [
      {
        "key3": "value103",
        "key4": "value104"
      },
      {
        "key3": "value203",
        "key4": "value204"
      }
    ]
  }
`

const arrayJsonString = `
  [
    {
      "key1": "value101",
      "key2": "value102"
    },
    {
      "key1": "value201",
      "key2": "value202"
    }
  ]
`

const errorJsonString = `
    "list": [
      {
        "key1": "value101",
        "key2": "value102"
      },
      {
        "key1": "value201",
        "key2": "value202"
      }
    ]
  }
`

describe("get type of json string", () => {
  test('get type of object json string', () => {
    const expectType = 'object'
    const jsonProcessor = jsonProcessorForArray(objectJsonString)
    expect(jsonProcessor.type).toEqual(expectType)
  })
  test('get type of array json string', () => {
    const expectType = 'array'
    const jsonProcessor = jsonProcessorForArray(arrayJsonString)
    expect(jsonProcessor.type).toEqual(expectType)
  })
})

describe("get values of json string", () => {
  const expectArrayJsonValues = [
    {
      key1: "value101",
      key2: "value102"
    },
    {
      key1: "value201",
      key2: "value202"
    }
  ]
  const expectObjectJsonValues = [
    [
      {
        key1: "value101",
        key2: "value102"
      },
      {
        key1: "value201",
        key2: "value202"
      }
    ],
    [
      {
        key3: "value103",
        key4: "value104"
      },
      {
        key3: "value203",
        key4: "value204"
      }
    ]
  ]
  test('get values of object json string', () => {
    const jsonProcessor = jsonProcessorForArray(objectJsonString)
    const values = jsonProcessor.values
    expect(values).toEqual(expectObjectJsonValues)
  })
  test('get values of array json string', () => {
    const jsonProcessor = jsonProcessorForArray(arrayJsonString)
    const values = jsonProcessor.values
    expect(values).toEqual(expectArrayJsonValues)
  })
  test('get values of error json string', () => {
    const jsonProcessor = jsonProcessorForArray(errorJsonString)
    const values = jsonProcessor.values
    expect(values).toEqual([])
  })
})

describe.skip("test json processor", () => {
  test('test json processor instance', () => {
    console.log('hello test');
  })
})