import React from 'react'
import ReactDOM from 'react-dom'

import 'styles.css'

import CommentList from 'components/CommentList'

function App() {
  const comments = [
    {
      id: 1,
      comment: 'I do love writing tests',
      author: 'The Notester'
    },
    {
      id: 2,
      comment: 'Nothing is better than a good comment app',
      author: 'Comment Hater'
    }
  ]

  return <CommentList comments={comments} />
}

ReactDOM.render(<App />, document.getElementById('root'))
