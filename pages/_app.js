import '../styles/globals.css'
import Layout from '../components/Layout'
import { AuthProvider } from '../components/Context.js'


function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  )
}

export default MyApp
