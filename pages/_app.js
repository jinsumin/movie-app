import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  <Layout>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
