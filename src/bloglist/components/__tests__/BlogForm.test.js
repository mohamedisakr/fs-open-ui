import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import BlogForm from '../BlogForm'

test('<BlogForm /> updates parent state and calls onSubmit', async () => {
  const createBlog = jest.fn()

  const component = render(<BlogForm createBlog={createBlog} />)

  const titleElement = await component.findByPlaceholderText(/Title/i)
  const urlElement = await component.findByPlaceholderText(/url/i)
  const form = component.container.querySelector('form')

  fireEvent.change(titleElement, {
    target: {value: 'react testing library is awesome'},
  })

  fireEvent.change(urlElement, {
    target: {value: 'example.com/react-testing-library-awesome'},
  })
  fireEvent.submit(form)

  expect(createBlog.mock.calls).toHaveLength(1)
  //   expect(createBlog.mock.calls[0][0].content).toBe(
  //     'testing of forms could be easier',
  //   )
})
