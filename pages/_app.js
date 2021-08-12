import "../styles/globals.css"
import "@material-tailwind/react/tailwind.css"
import { Provider } from "react-redux"
import store from "../redux/app/store"
import ProgressBar from "@badrap/bar-of-progress"
import Router from "next/router"
import { CookiesProvider } from "react-cookie"

const progress = new ProgressBar({
  size: 2,
  color: "#38a169",
  className: "bar-of-progress",
  delay: 70,
})

Router.events.on("routeChangeStart", progress.start)
Router.events.on("routeChangeComplete", progress.finish)
Router.events.on("routeChangeError", progress.finish)

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <CookiesProvider>
        <Component {...pageProps} />
      </CookiesProvider>
    </Provider>
  )
}

export default MyApp
