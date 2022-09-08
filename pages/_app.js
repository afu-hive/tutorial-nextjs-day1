import { useEffect } from 'react'
import { RecoilRoot, useRecoilState } from 'recoil'
import { reactLocalStorage } from 'reactjs-localstorage'
import Header from '../src/components/Header'
import userStore from '../src/stores/user'
import '../styles/globals.css'
import { auth } from '../src/firebase'

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useRecoilState(userStore.user)

  const checkUserLogin = () => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser({
          age: 0,
          firstName: authUser.email,
          lastName: authUser.email,
          isLogin: true,
          sex: '-',
          username: authUser.email,
          uid: authUser.uid,
        })
      }
    })
    // const userLocal = reactLocalStorage.getObject('user')
    // if (userLocal.isLogin === true) {
    //   setUser(userLocal)
    // }
  }

  useEffect(() => {
    checkUserLogin()
  }, [])

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

function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <MyApp Component={Component} pageProps={pageProps} />
    </RecoilRoot>
  )
}

export default App
