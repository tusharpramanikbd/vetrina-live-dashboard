import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
import { ThemeProvider } from '@mui/material'
import { MyTheme } from './MuiCustomTheme'

function App() {
  return (
    <>
      <ThemeProvider theme={MyTheme}>
        <Dashboard />
      </ThemeProvider>
    </>
  )
}

export default App
