import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RendererProvider } from 'react-fela'
import { createRenderer } from 'fela'
import Menu from '../components/Menu'

// Redux
import { PersistGate } from 'redux-persist/integration/react'
import storeConfig from '../redux/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {
  const renderer = createRenderer()
  const { store, persist } = storeConfig()
  
  return (
    <Provider store={store}>
      <PersistGate persistor={persist}>
        <RendererProvider renderer={renderer}>
          <Menu></Menu>
          <Component {...pageProps} />
        </RendererProvider>
      </PersistGate>
    </Provider>
  )
}
export default MyApp
