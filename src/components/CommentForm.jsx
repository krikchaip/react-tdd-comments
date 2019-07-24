import React, { useState } from 'react'

function CommentForm() {
  const [comment, setComment] = useState('')
  const [author, setAuthor] = useState('')

  return (
    <form className="comment-form">
      <textarea
        className="box"
        placeholder="Write something..."
        value={comment}
        onChange={e => setComment(e.target.value)}
      />
      <label htmlFor="author">Your Name</label>
      <input
        className="input-field"
        type="text"
        id="author"
        placeholder="Input value"
        value={author}
        onChange={e => setAuthor(e.target.value)}
      />
      <button className="button" disabled={!Boolean(comment && author)}>
        Add Comment
      </button>
    </form>
  )
}

export default CommentForm
