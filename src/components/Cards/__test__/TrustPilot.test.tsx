import { render, screen } from '@testing-library/react'
import TrustPilotCard from '../TrustPilotCard'

describe('Turst pilot card testing', () => {
  it('Turst pilot card render testing', () => {
    render(<TrustPilotCard />)
    const element = screen.getByText('Trustpilot')
    expect(element).toBeInTheDocument()
  })
})
