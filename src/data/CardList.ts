import ConfigureShopCard from '../components/Cards/ConfigureShopCard'
import TrustPilotCard from '../components/Cards/TrustPilotCard'
import InviteFriendCard from '../components/Cards/InviteFriendCard'
import CustomerSupportCard from '../components/Cards/CustomerSupportCard'

import VisitorsCard from '../components/Cards/VisitorsCard'
import OrdersCard from '../components/Cards/OrdersCard'
import MobileCard from '../components/Cards/MobileCard'
import ExtensionMarketplaceCard from '../components/Cards/ExtensionMarketplaceCard'
import LatestNewsCard from '../components/Cards/LatestNewsCard'

export const rightColumnCards = [
  {
    id: '1',
    Card: ConfigureShopCard,
  },
  {
    id: '2',
    Card: TrustPilotCard,
  },
  {
    id: '3',
    Card: InviteFriendCard,
  },
  {
    id: '4',
    Card: CustomerSupportCard,
  },
]

export const leftColumnCards = [
  {
    id: '1',
    Card: VisitorsCard,
  },
  {
    id: '2',
    Card: OrdersCard,
  },
  {
    id: '3',
    Card: MobileCard,
  },
  {
    id: '4',
    Card: ExtensionMarketplaceCard,
  },
  {
    id: '5',
    Card: LatestNewsCard,
  },
]
