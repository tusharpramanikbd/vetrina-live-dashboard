import { render, screen } from '@testing-library/react'
import CustomerSupportCard from '../CustomerSupportCard'

describe('Customer support card testing', () => {
  it('Customer support card render testing', () => {
    render(<CustomerSupportCard />)
    const element = screen.getByText(/customer support/i)
    expect(element).toBeVisible()
  })
})
