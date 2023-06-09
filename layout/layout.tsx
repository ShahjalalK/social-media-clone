import Navbar from "@/components/navbar/navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import React from "react";
import { auth } from "@/firebase/firebase.config";
import AuthModal from "@/components/modal/authModal";
import PageLoading from "@/components/pageLoading";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);

  return (
    <main>
      {user ? (
        loading ? (
          <PageLoading />
        ) : (
          <>
            <Navbar />
            {children}
          </>
        )
      ) : loading ? (
        <PageLoading />
      ) : (
        <AuthModal />
      )}
    </main>
  );
};

export default Layout;
