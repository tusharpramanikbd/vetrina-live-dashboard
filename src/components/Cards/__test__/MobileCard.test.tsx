import { render, screen } from '@testing-library/react'
import MobileCard from '../MobileCard'

describe('Mobile card testing', () => {
  it('Mobile card render testing', () => {
    render(<MobileCard />)
    // screen.debug()
    const element = screen.getByRole('link')
    expect(element).toHaveTextContent(/show more/i)
  })
})
