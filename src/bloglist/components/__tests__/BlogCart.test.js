import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import BlogCart from '../BlogCart'

test("<BlogCart /> should blog's title and author", async () => {
  const id = 1
  const title = 'test title'
  const likes = 0
  const url = 'example.com/test-title'
  const user = 'test name'
  const handleDelete = jest.fn()

  const component = render(
    <BlogCart
      id={id}
      title={title}
      likes={likes}
      url={url}
      user={user}
      handleDelete={handleDelete}
    />,
  )

  const titleElement = await component.findByText(/test title/i)
  const urlElement = await component.findByText(/example.com/i)

  expect(titleElement).toBeTruthy()
  expect(urlElement).toBeTruthy()
})
