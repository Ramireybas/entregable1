import { useState } from 'react'
import quoteBox from './components/QuoteBox'
import './App.css'
import quotes from './quotes.json'

function App() {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  console.log(quotes)

  const [index, setIndex] = useState(randomIndex)
  const change = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setIndex(randomIndex);
  }
  const colors = [ "#CD5C5C","#6DDF0E", "#0E5ADF", "#DFD30E" ]
  const randomColor = Math.floor(Math.random() * colors.length)
  document.body.style = `background: ${colors[randomColor]}`

  return (
    <div className="card" style={{color: colors[randomColor]}}>
      <div><i class="fa-solid fa-quote-left"></i>{quotes[index].quote}</div>
      <div className="author-text" > {quotes[index].author}</div>
      <quoteBox
        color={colors}
        quoteBox={quotes[index].author} />

      <button style={{background: colors[randomColor]}} onClick={change} ><i class="fa-solid fa-angle-right"></i> </button>
    </div>
  )
}

export default App
