export function myMap(arr, cb) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    result[result.length] = cb(arr[i], i, arr)
  }
  return result
}

export function myFilter(arr, cb) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) result[result.length] = arr[i]
  }
  return result
}

export function myConcat(arr1, arr2) {
  const result = []
  for (let i = 0; i < arr1.length; i++) result[result.length] = arr1[i]
  for (let j = 0; j < arr2.length; j++) result[result.length] = arr2[j]
  return result
}

export function myFind(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) return arr[i]
  }
}

export function myEvery(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (!cb(arr[i], i, arr)) return false
  }
  return true
}

export function mySome(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) return true
  }
  return false
}

export function myIncludes(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return true
  }
  return false
}

export function myJoin(arr, separator) {
  let str = ''
  const sep = separator === undefined ? ',' : separator
  for (let i = 0; i < arr.length; i++) {
    str += arr[i]
    if (i < arr.length - 1) str += sep
  }
  return str
}

export function myPush(arr, val) {
  arr[arr.length] = val
  return arr
}

export function myReverse1(arr) {
  const result = []
  for (let i = arr.length - 1; i >= 0; i--) result[result.length] = arr[i]
  return result
}

export function myReverse2(arr) {
  let i = 0
  let j = arr.length - 1
  while (i < j) {
    const tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
    i++
    j--
  }
  return arr
}

export function myReduce(arr, cb, initial) {
  let acc = initial
  for (let i = 0; i < arr.length; i++) {
    acc = cb(acc, arr[i], i, arr)
  }
  return acc
}

export function mySort(arr, cb) {
  const a = []
  for (let i = 0; i < arr.length; i++) a[i] = arr[i]
  for (let i = 0; i < a.length - 1; i++) {
    for (let j = 0; j < a.length - 1 - i; j++) {
      if (cb(a[j], a[j + 1]) > 0) {
        const tmp = a[j]
        a[j] = a[j + 1]
        a[j + 1] = tmp
      }
    }
  }
  return a
}

export function mySlice(arr, start, end) {
  const result = []
  const len = arr.length
  let s = start === undefined ? 0 : start < 0 ? len + start : start
  let e = end === undefined ? len : end < 0 ? len + end : end
  for (let i = s; i < e && i < len; i++) result[result.length] = arr[i]
  return result
}
