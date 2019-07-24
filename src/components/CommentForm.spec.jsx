import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import CommentForm from 'components/CommentForm'

describe('<CommentForm />', () => {
  it('button is initially disabled', () => {
    const { getByText } = render(<CommentForm />)

    expect(getByText(/Add Comment/i)).toBeDisabled()
  })

  it('button enabled when both comment and author are filled', () => {
    const comment = { target: { value: 'test comment' } }
    const author = { target: { value: 'winner' } }

    const { getByText, getByLabelText, getByPlaceholderText } = render(
      <CommentForm />
    )

    fireEvent.change(getByPlaceholderText(/Write something/i), comment)
    fireEvent.change(getByLabelText(/Your Name/i), author)

    expect(getByText(/Add Comment/i)).toBeEnabled()
  })
})
