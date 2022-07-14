import { fireEvent, render, screen, within } from '@testing-library/react'
import VisitorsCard from '../VisitorsCard'

describe('Visitor Card Testing', () => {
  it('Visior card render testing', () => {
    render(<VisitorsCard />)
    const element = screen.getByText(/visitors/i)
    expect(element).toBeInTheDocument()
  })

  it('should display the correct selected option', () => {
    render(<VisitorsCard />)
    const element = screen.getByRole('button')

    fireEvent.mouseDown(element)

    const listbox = within(screen.getByRole('listbox'))

    fireEvent.click(listbox.getByText(/this week/i))
    expect(element).toHaveTextContent(/this week/i)
  })

  it('should display the correct number of options', () => {
    render(<VisitorsCard />)
    const element = screen.getByRole('button')

    fireEvent.mouseDown(element)

    const listbox = screen.getAllByRole('option')

    expect(listbox.length).toBe(3)
  })
})
