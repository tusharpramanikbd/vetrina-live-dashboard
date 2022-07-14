import { fireEvent, render, screen, within } from '@testing-library/react'
import OrdersCard from '../OrdersCard'

describe('Order Card Testing', () => {
  it('Order card render testing', () => {
    render(<OrdersCard />)
    const elements = screen.getAllByText(/orders/i)
    expect(elements.length).toBe(2)
  })

  it('should not display the wrong selected option', () => {
    render(<OrdersCard />)
    const element = screen.getByRole('button')

    fireEvent.mouseDown(element)

    const listbox = within(screen.getByRole('listbox'))

    fireEvent.click(listbox.getByText(/this day/i))
    expect(element).not.toHaveTextContent(/this week/i)
  })
})
