

export function createCounter() {
  let count = 0
  return function () {
    return ++count
  }
}
