import AuthModal from '@/components/modal/authModal'
import Header from '@/components/navbar/header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return <RecoilRoot>
    <main>
      <Header />
    <Component {...pageProps} />
    </main>
    <AuthModal />
    <ToastContainer />
  </RecoilRoot>
}
