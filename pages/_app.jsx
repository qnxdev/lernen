import '../styles/globals.css'
import '../styles/Home.css'
import '../styles/Page.css'
import '../styles/Button.css'
import '../styles/Item.css'
import '../styles/SignUp.css'
import { StateProvider } from '../lib/store'

/*Main App File - This is not a page*/

function Lernen({ Component, pageProps }) {
  return <StateProvider>
    <Component {...pageProps} />
  </StateProvider>
}

export default Lernen
