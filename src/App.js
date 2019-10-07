import React from 'react'

import logo from './logo.svg'

import Quote from './components/Quote'
import useApiQuotes from './hooks/useApiQuotes'
import { fetchApiQuotes } from './utils'

const App = () => {
  
  const [quote, setQuote] = useApiQuotes()

  const onClick = () => fetchApiQuotes(setQuote)
  
  if(!quote) return null
  return (
    <div className="container">
      <img className="logo" src={logo} />
      <Quote data={quote}></Quote>
      <button onClick={onClick}>New quote</button>
    </div>
  )
}

export default App
