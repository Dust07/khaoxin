import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.scss'

import { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import ErrorBoundary from './error';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, [])
  return (
    <ErrorBoundary>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ErrorBoundary>
  )
}

export default MyApp
