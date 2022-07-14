import { render, screen } from '@testing-library/react'
import InviteFriendCard from '../InviteFriendCard'

describe('Invite friend card testing', () => {
  it('Invite friend card render testing', () => {
    render(<InviteFriendCard />)
    const element = screen.getByText(/invite friend/i)
    expect(element).toBeInTheDocument()
  })
})
