import { render, screen } from '@testing-library/react'
import ConfigureShopCard from '../ConfigureShopCard'

describe('Configure your shop card testing', () => {
  it('Configure your shop card render testing', () => {
    render(<ConfigureShopCard />)
    const element = screen.getByText('Configure your shop')
    expect(element).toBeInTheDocument()
  })
})
