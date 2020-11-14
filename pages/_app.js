import '../styles/index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faRedoAlt, faBackspace } from '@fortawesome/free-solid-svg-icons'

library.add(faRedoAlt, faBackspace)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
