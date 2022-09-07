import Header from '../src/components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <div style={{ padding: '20px 0', width: '100%', backgroundColor: '#ccc' }}>
        FOOTER
      </div>
    </div>
  )
}

export default MyApp
