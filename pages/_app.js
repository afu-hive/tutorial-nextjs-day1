import Header from '../src/components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto p-5 min-h-screen page">
        <Component {...pageProps} />
      </div>
      <div className="bg-gray-400" style={{ height: 120 }}>
        
      </div>
    </div>
  )
}

export default MyApp
