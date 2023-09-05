export function createQuestion(question, timed = false) {
  const answers = []

  let acceptAnswers = !timed
  let allowGetAnswers = !timed

  function submit(answer) {
    if (!acceptAnswers) return
    answers.push(answer)
  }

  function getAnswers() {
    if (!allowGetAnswers) throw new Error('Answers not available yet')
    return answers
  }

  function startTimer(timeLimit) {
    acceptAnswers = true
    setTimeout(() => {
      acceptAnswers = false
      allowGetAnswers = true
    }, timeLimit)
  }

  return {
    question,
    submit,
    getAnswers,
    startTimer,
  }
}
