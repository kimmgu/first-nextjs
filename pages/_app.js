// blueprint

import '../styles/globals.css'
import NavBar from '../components/NavBar'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <style jsx global>{`
        nav {
          background-color: lightgray;
        }
        a {
          text-decoration: none;
          color: snow;
          margin-right: 32px;
        }
        .active {
          color: black;
        }
      `}</style>
    </div>
  )
}
