import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from "react"
import InputColor from "react-input-color"
import MtChicken from "../components/mtChicken"

const Home: NextPage = () => {

  const [outlineColor, setOutlineColor] = React.useState({})
  const [tosakaColor, setTosakaColor] = React.useState({})
  const [headColor, setHeadColor] = React.useState({})
  const [eyeColor, setEyeColor] = React.useState({})
  const [beakColor, setBeakColor] = React.useState({})
  const [bodyColor, setBodyColor] = React.useState({})
  const [footColor, setFootColor] = React.useState({})
  const [moustacheColor, setMoustacheColor] = React.useState({})
  const [tailColor, setTailColor] = React.useState({})


  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>
        <div style={{width: "500px"}}>
        <MtChicken
          outlineColor={outlineColor}
          tailColor={tailColor}

        />
        </div>
        <div id="color-pickers" style={{margin: "30px"}}>
        <p>アウトライン</p>
        <InputColor
          initialValue="#999"
          onChange={setOutlineColor}
          style={{ height: 30, width: 70, padding: 0}}
          placement="left"
        />
        <p>とさか</p>
        <InputColor
          initialValue="#b3b3b3"
          onChange={setTosakaColor}
          style={{ height: 30, width: 70, padding: 0}}
          placement="right"
        />
        <p>くちばし</p>
        <InputColor
          initialValue="#ccc"
          onChange={setBeakColor}
          style={{ height: 30, width: 70, padding: 0}}
          placement="right"
        />
        <p>しっぽ</p>
        <InputColor
          initialValue="#fff"
          onChange={setTailColor}
          style={{ height: 30, width: 70, padding: 0}}
          placement="right"
        />
        <p>あし</p>
        <InputColor
          initialValue="#ccc"
          onChange={setFootColor}
          style={{ height: 30, width: 70, padding: 0}}
          placement="right"
        />
      </div>

        
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home
