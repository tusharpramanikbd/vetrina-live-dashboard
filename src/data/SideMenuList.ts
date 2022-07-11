import DashboardIcon from '../icons/DashboardIcon'
import CatalogueIcon from '../icons/CatalogueIcon'
import OrdersIcon from '../icons/OrdersIcon'
import CustomersIcon from '../icons/CustomersIcon'
import MarketingIcon from '../icons/MarketingIcon'
import DeliveryIcon from '../icons/DeliveryIcon'
import PaymentIcon from '../icons/PaymentIcon'
import StoreDesignIcon from '../icons/StoreDesignIcon'
import SubscriptionIcon from '../icons/SubscriptionIcon'
import IntegrationsIcon from '../icons/IntegrationsIcon'
import ExtensionsIcon from '../icons/ExtensionsIcon'
import SettingsIcon from '../icons/SettingsIcon'
import LogoutIcon from '../icons/LogoutIcon'
import CustomerSupportIcon from '../icons/CustomerSupportIcon'
import ShareShopIcon from '../icons/ShareShopIcon'
import ViewShopIcon from '../icons/ViewShopIcon'

const SideMenuList = [
  {
    id: '1',
    title: 'Dashboard',
    icon: DashboardIcon,
    isSideMenuItem: true,
  },
  {
    id: '2',
    title: 'Catalogue',
    icon: CatalogueIcon,
    isSideMenuItem: true,
    subMenuItems: [
      {
        id: '2.1',
        title: 'Sub Catalogue 1',
      },
      {
        id: '2.2',
        title: 'Sub Catalogue 2',
      },
      {
        id: '2.3',
        title: 'Sub Catalogue 2',
      },
    ],
  },
  {
    id: '3',
    title: 'Orders',
    icon: OrdersIcon,
    isSideMenuItem: true,
    badge: 14,
  },
  {
    id: '4',
    title: 'Customers',
    icon: CustomersIcon,
    isSideMenuItem: true,
  },
  {
    id: '5',
    title: 'Marketing',
    icon: MarketingIcon,
    isSideMenuItem: true,
    subMenuItems: [
      {
        id: '5.1',
        title: 'Discount codes',
      },
      {
        id: '5.2',
        title: 'Exit intent',
      },
      {
        id: '5.3',
        title: 'Checkout Features',
      },
      {
        id: '5.4',
        title: 'Post-purchase conversion',
      },
      {
        id: '5.5',
        title: 'Cart abandonment',
      },
      {
        id: '5.6',
        title: 'Timer checkout',
      },
      {
        id: '5.7',
        title: 'Sell on Social',
      },
      {
        id: '5.8',
        title: 'Special Offer',
      },
      {
        id: '5.9',
        title: 'Seasonal Offer',
      },
    ],
  },
  {
    id: '6',
    title: 'Delivery Options',
    icon: DeliveryIcon,
    isSideMenuItem: true,
  },
  {
    id: '7',
    title: 'Payment Options',
    icon: PaymentIcon,
    isSideMenuItem: true,
  },
  {
    id: '8',
    title: 'Store Design',
    icon: StoreDesignIcon,
    isSideMenuItem: true,
  },
  {
    id: '9',
    title: 'Subscription',
    icon: SubscriptionIcon,
    isSideMenuItem: true,
  },
  {
    id: '10',
    title: 'Integrations',
    icon: IntegrationsIcon,
    isSideMenuItem: true,
  },
  {
    id: '11',
    title: 'Extensions',
    icon: ExtensionsIcon,
    isSideMenuItem: true,
  },
  {
    id: '12',
    title: 'Settings',
    icon: SettingsIcon,
    isSideMenuItem: true,
  },
  {
    id: '13',
    title: 'Log out',
    icon: LogoutIcon,
    isSideMenuItem: true,
  },
  {
    id: '14',
    isDividerItem: true,
  },
  {
    id: '15',
    title: 'Customer Support',
    icon: CustomerSupportIcon,
    isSideMenuItem: true,
  },
  {
    id: '16',
    title: 'Share your shop',
    icon: ShareShopIcon,
    isSideMenuItem: true,
  },
  {
    id: '17',
    title: 'View your shop',
    icon: ViewShopIcon,
    isSideMenuItem: true,
  },
  {
    id: '18',
    isDropdown: true,
    title: 'Select your shop',
    items: [
      {
        id: '18.1',
        data: 'Fenoh Store',
      },
      {
        id: '18.2',
        data: 'Fenoh Store 2',
      },
      {
        id: '18.3',
        data: 'Fenoh Store 3',
      },
      {
        id: '18.4',
        data: 'Fenoh Store 4',
      },
      {
        id: '18.5',
        data: 'Fenoh Store 5',
      },
    ],
  },
]

export default SideMenuList
