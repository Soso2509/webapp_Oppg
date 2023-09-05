import { createQuestion } from './2-time'

it('should collect all answers submitted', () => {
  const question = createQuestion('What is your favorite color?')
  question.submit('blue')
  question.submit('red')
  question.submit('green')
  expect(question.getAnswers()).toEqual(['blue', 'red', 'green'])
})

it('should not collect answers submitted after the time limit', async () => {
  const question = createQuestion('What is your favorite color?', true)
  question.startTimer(10)
  question.submit('blue')
  question.submit('red')

  await new Promise((resolve) => setTimeout(resolve, 10))

  question.submit('green')
  expect(question.getAnswers()).toEqual(['blue', 'red'])
})

it('should collect answers submitted before the timer is started', async () => {
  const question = createQuestion('What is your favorite color?', true)
  question.submit('blue')
  question.submit('red')
  question.startTimer(10)
  question.submit('green')

  await new Promise((resolve) => setTimeout(resolve, 10))

  expect(question.getAnswers()).toEqual(['green'])
})

it('should not allow to get answers before the timer is expired', async () => {
  const question = createQuestion('What is your favorite color?', true)
  question.startTimer(10)
  question.submit('blue')
  question.submit('red')
  expect(() => question.getAnswers()).toThrow()
})
