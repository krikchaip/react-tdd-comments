import React from 'react'
import ReactDOM from 'react-dom'

import 'styles.css'

import CommentCard from 'components/CommentCard'

function App() {
  return (
    <CommentCard
      comment="React Testing Library is great."
      author="Luke Ghenco"
    />
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
