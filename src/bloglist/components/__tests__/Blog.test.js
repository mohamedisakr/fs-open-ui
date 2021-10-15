import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import Blog from '../Blog'

test('renders title', () => {
  const blog = {
    id: '61660824ff82642821bb6c3c',
    title: 'React Cookbook',
    user: {name: 'Mohamed Sakr'},
  }
  const component = render(<Blog blog={blog} />)
  expect(component.container).toHaveTextContent(blog.title)
})

test('renders title - method 2', () => {
  const blog = {
    id: '61660824ff82642821bb6c3c',
    title: 'React Cookbook',
    user: {name: 'Mohamed Sakr'},
  }
  const component = render(<Blog blog={blog} />)
  const element = component.getByText(/React Cookbook/i)
  expect(element).toBeDefined()
})
