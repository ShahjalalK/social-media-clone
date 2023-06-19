
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-circular-progressbar/dist/styles.css';
import Layout from '@/layout/layout';
import EditProfileModal from '@/components/profileModal/editProfileModal';
import PostModal from '@/components/postModal/postModal';
import "swiper/css";

export default function App({ Component, pageProps }: AppProps) {
  return <RecoilRoot>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    <PostModal />
    <EditProfileModal />
    <ToastContainer />
  </RecoilRoot>
}
