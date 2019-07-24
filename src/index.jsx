import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import 'styles.css'

import CommentList from 'components/CommentList'
import CommentForm from 'components/CommentForm'

function App() {
  const [comments, setComments] = useState([
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
  ])

  return (
    <div>
      <CommentForm />
      <CommentList comments={comments} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
