import { add } from './1-basics'

describe('add', () => {
  it('adds two numbers', () => {
    expect(add(1, 2)).toBe(3)
  })

  it('adds two negative numbers', () => {
    expect(add(-1, -2)).toBe(-3)
  })

  it('fails to add two strings', () => {
    expect(() => add(1, '2')).toThrow()
  })
})
