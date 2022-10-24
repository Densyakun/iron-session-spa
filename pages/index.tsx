import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout'
import LoginForm from '../components/LoginForm'
import useUser from '../lib/useUser'

const Home: NextPage = () => {
  const { user } = useUser()

  return (
    <Layout IS_PLACE_LOGOUT_BUTTON={user?.loginPasswordIsExist ?? false}>
      <Head>
        <title>Iron Session SPA</title>
      </Head>

      {user && (
        <>
          {user.isLoggedIn
            ? <pre>{JSON.stringify(user, null, 2)}</pre>
            : <LoginForm />}
        </>
      )}
    </Layout>
  )
}

export default Home
