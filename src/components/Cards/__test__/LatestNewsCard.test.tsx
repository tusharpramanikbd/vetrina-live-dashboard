import { render, screen } from '@testing-library/react'
import LatestNewsCard from '../LatestNewsCard'

describe('Latest News card testing', () => {
  it('Latest News card render testing', () => {
    render(<LatestNewsCard />)
    const element = screen.getByText(/latest news/i)
    expect(element).toBeInTheDocument()
  })
})
