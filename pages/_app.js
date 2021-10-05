import React, { useEffect } from 'react'
import 'rsuite/styles/index.less'
import 'assets/styles/globals.css'
import { Provider } from 'react-redux'
import { useStore } from 'redux/store/index'
import { LANGUAGE } from 'redux/store/actionTypes'

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  useEffect(() => {
    store.dispatch({
      type: LANGUAGE,
      payload: localStorage.getItem('Lang') ? localStorage.getItem('Lang') : 'en',
    })
  }, [store])
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
