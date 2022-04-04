//import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import InputColor from 'react-input-color'
import MtChicken from '../components/mtChicken'
import Toggle from '../components/toggle'

const Home = () => {
  //let accounts;
  //const isConneted = accounts == undefined;

  const connectWallet = async () => {
    const { ethereum } = window
    if (!ethereum) {
      console.log('Metamask not detected')
      return
    } else {
      console.log('Metamask')
      console.log(ethereum)
    }

    let chainId = await ethereum.request({ method: 'eth_chainId' })
    console.log('Connected to chain:' + chainId)
    //const rinkebyChainId = '0x4'
    const mumbaiChainId = '0x13881'

    if (chainId !== mumbaiChainId) {
      alert('You are not connected to the Mumbai Testnet!')
      return
    }

    const accounts = await ethereum.request({ method: 'eth_requestAccounts' })

    console.log('Found account', accounts[0])
    console.log('connect!')
  }

  const [outlineColor, setOutlineColor] = React.useState({})
  const [tosakaColor, setTosakaColor] = React.useState({})
  const [headColor, setHeadColor] = React.useState({})
  const [headShadowColor, setHeadShadowColor] = React.useState({})
  const [eyeColor, setEyeColor] = React.useState({})
  const [beakColor, setBeakColor] = React.useState({})
  const [bodyColor, setBodyColor] = React.useState({})
  const [bodyShadowColor, setBodyShadowColor] = React.useState({})
  const [footColor, setFootColor] = React.useState({})
  const [moustacheColor, setMoustacheColor] = React.useState({})
  const [tailColor, setTailColor] = React.useState({})
  const [tailShadowColor, setTailShadowColor] = React.useState({})

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-green-50 py-2">
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
      <div className="text-center ">
        <h1 className="text-6xl font-bold">Mt.Chicken</h1>
        <button
          className="m-5 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-400"
          onClick={connectWallet}
        >
          connect Wallet
        </button>
      </div>
      <main className="flex w-full flex-1 flex-row items-center justify-center px-20 text-center">
        <div className="w-1/2">
          <MtChicken
            outlineColor={outlineColor}
            headColor={headColor}
            headShadowColor={headShadowColor}
            eyeColor={eyeColor}
            tailColor={tailColor}
            tailShadowColor={tailShadowColor}
            beakColor={beakColor}
            tosakaColor={tosakaColor}
            footColor={footColor}
            moustacheColor={moustacheColor}
            bodyColor={bodyColor}
            bodyShadowColor={bodyShadowColor}
          />
        </div>
        <div id="color-pickers">
          <div className="flex flex-row">
            <div className="mx-3 my-1 flex flex-col text-sm">
              <p>アウトライン</p>
              <InputColor
                initialValue="#999"
                onChange={setOutlineColor}
                style={{ height: 30, width: 90, padding: 0 }}
                placement="left"
              />
            </div>
            <div className="mx-3 my-1 flex flex-col text-sm">
              <p>とさか</p>
              <InputColor
                initialValue="#b3b3b3"
                onChange={setTosakaColor}
                style={{ height: 30, width: 90, padding: 0 }}
                placement="right"
              />
            </div>
            <div className="mx-3 my-1 flex flex-col text-sm">
              <p>め</p>
              <InputColor
                initialValue="#999"
                onChange={setEyeColor}
                style={{ height: 30, width: 90, padding: 0 }}
                placement="right"
              />
            </div>
            <div className="mx-3 my-1 flex flex-col text-sm">
              <p>かお</p>
              <InputColor
                initialValue="#fff"
                onChange={setHeadColor}
                style={{ height: 30, width: 90, padding: 0 }}
                placement="right"
              />
            </div>
          </div>
          <div className="flex flex-row">
            <div className="mx-3 my-1 flex flex-col text-sm">
              <p>かおの影</p>
              <InputColor
                initialValue="#ccc"
                onChange={setHeadShadowColor}
                style={{ height: 30, width: 90, padding: 0 }}
                placement="right"
              />
            </div>
            <div className="mx-3 my-1 flex flex-col text-sm">
              <p>からだ</p>
              <InputColor
                initialValue="#e6e6e6"
                onChange={setBodyColor}
                style={{ height: 30, width: 90, padding: 0 }}
                placement="right"
              />
            </div>
            <div className="mx-3 my-1 flex flex-col text-sm">
              <p>からだの影</p>
              <InputColor
                initialValue="#b3b3b3"
                onChange={setBodyShadowColor}
                style={{ height: 30, width: 90, padding: 0 }}
                placement="right"
              />
            </div>
            <div className="mx-3 my-1 flex flex-col text-sm">
              <p>しっぽ</p>
              <InputColor
                initialValue="#fff"
                onChange={setTailColor}
                style={{ height: 30, width: 90, padding: 0 }}
                placement="right"
              />
            </div>
          </div>
          <div className="flex flex-row">
            <div className="mx-3 my-1 flex flex-col text-sm">
              <p>しっぽの影</p>
              <InputColor
                initialValue="#ccc"
                onChange={setTailShadowColor}
                style={{ height: 30, width: 90, padding: 0 }}
                placement="right"
              />
            </div>
            <div className="mx-3 my-1 flex flex-col text-sm">
              <p>にくひげ</p>
              <InputColor
                initialValue="#b3b3b3"
                onChange={setMoustacheColor}
                style={{ height: 30, width: 90, padding: 0 }}
                placement="right"
              />
            </div>
            <div className="mx-3 my-1 flex flex-col text-sm">
              <p>くちばし</p>
              <InputColor
                initialValue="#ccc"
                onChange={setBeakColor}
                style={{ height: 30, width: 90, padding: 0 }}
                placement="right"
              />
            </div>
            <div className="mx-3 my-1 flex flex-col text-sm">
              <p>あし</p>
              <InputColor
                initialValue="#ccc"
                onChange={setFootColor}
                style={{ height: 30, width: 90, padding: 0 }}
                placement="right"
              />
            </div>
          </div>
          <div className="flex flex-row">
            <Toggle text="頬の傷" />
            <Toggle text="腹の傷" />
          </div>
          <button
            className="m-5 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-400"
          >
            mint Mt.Chicken
          </button>
          <button
            className="m-5 rounded bg-sky-300 py-2 px-4 font-bold text-white hover:bg-sky-200"
          >
            Twitter
          </button>
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
