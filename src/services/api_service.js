import Axios from 'axios'

export const getGame = gameID => (
  Axios.get(`${process.env.API_URL}/game/${gameID}`)
)

export const getQuestion = questionID => (
  Axios.get(`${process.env.API_URL}/question/${questionID}`)
)

export const submitAnswer = data => {
  const path = `${process.env.API_URL}/game-question/${data.id}`
  return Axios.put(path, { answer: data.answer })
}

export const getScore = gameID => (
  Axios.get(`${process.env.API_URL}/game/${gameID}/calculate`)
)

export const createGame = () => (
  Axios.post(`${process.env.API_URL}/game`)
)