import { App as AppSettings } from 'antd'
import { BrowserRouter } from 'react-router-dom'
import { RoutesApp } from 'settings/routes'
import { ThemeProvider } from 'settings/theme'

import '../../settings/theme/css/base.css'
import '../../settings/theme/css/normalize.css'

export const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppSettings>
          <RoutesApp />
        </AppSettings>
      </ThemeProvider>
    </BrowserRouter>
  )
}
