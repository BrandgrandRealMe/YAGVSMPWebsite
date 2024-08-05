import "@/styles/globals.scss";
import "@/styles/partials/_navbar.scss";
import 'react-toastify/dist/ReactToastify.css';
import "@/styles/partials/_header.scss";

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }