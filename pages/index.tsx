import React from "react";
import Layout from "components/Layout";
import LoginForm from "components/LoginForm";
import useUser from "lib/useUser";

export default function Home() {
  const { user } = useUser({
    redirectTo: "/",
  });

  return (
    <Layout>
      {!user?.isLoggedIn && <LoginForm />}

      {user && (
        <>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      )}
    </Layout>
  );
}
