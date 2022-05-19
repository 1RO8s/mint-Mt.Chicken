//import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Alert from '../components/alert'

const Home = () => {
  return (
    <div className=''>
      <Head>
        <title>Mt.Chicken</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lily+Script+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header>
      </header>
      <main className='flex flex-col h-screen border-2 justify-center items-center'>
        <span className=' text-xl'></span>
        <a href='/home' className='text-3xl hover:underline'>Click here for mint</a>
      </main>
    </div>
  )
}

export default Home
