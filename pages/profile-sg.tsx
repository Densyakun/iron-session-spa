import React from "react";
import Layout from "components/Layout";
import useUser from "lib/useUser";

export default function SgProfile() {
  const { user } = useUser({
    redirectTo: "/",
  });

  return (
    <Layout>
      {user && (
        <>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      )}
    </Layout>
  );
}
