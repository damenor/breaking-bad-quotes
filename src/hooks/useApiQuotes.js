import { useEffect, useState } from 'react'
import { fetchApiQuotes } from '../utils'

const useApiQuotes = () => {

  const [quote, setQuote] = useState()
  
  
  useEffect(() => {
    fetchApiQuotes(setQuote)
  }, [])

  return [quote, setQuote]

}

export default useApiQuotes