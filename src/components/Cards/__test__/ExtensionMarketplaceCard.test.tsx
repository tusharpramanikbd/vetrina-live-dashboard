import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import ExtensionMarketplaceCard from '../ExtensionMarketplaceCard'
import store from '../../../app/store'

const MockExtentionCard = () => {
  return (
    <Provider store={store}>
      <ExtensionMarketplaceCard />
    </Provider>
  )
}

describe('Extension marketplace card testing', () => {
  it('Extension marketplace card render testing', () => {
    render(<MockExtentionCard />)
    const element = screen.queryByText(/extensions marketplace/i)
    expect(element).toBeInTheDocument()
  })
})
