import axios from 'axios'

export const fetchApiQuotes = async callback => {
  try{
    const url = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes'
    const res = await axios(url)
    callback({
      phrase: res.data[0].quote,
      author: res.data[0].author
    })
  } catch(error) {
    console.error(error)
  }
}