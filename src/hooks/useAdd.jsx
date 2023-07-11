import React from 'react'

/**
 *
 * @param {*} id
 * @param {*} val
 * @param {*} data
 * @param {*} setData
 * @returns
 */
export default function useAdd(id, val, data, setData) {
  val.id = id
  setData([...data, val])

  return data;
}
