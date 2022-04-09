//import React from "react";
import Image from 'next/image'
import { FaTwitter } from 'react-icons/fa'
import { VscClose } from 'react-icons/vsc'

const Modal = ({ showModal, setShowModal }) => {
  const modalContent = {
    background: 'white',
    padding: '10px',
    borderRadius: '3px',
  }

  const overlay = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  const closeModal = () => {
    setShowModal(false)
  }

  if (showModal) {
    console.log('open Modal!!')
    return (
      <div
        id="overlay"
        className="fixed z-50 flex justify-center bg-gray-300"
        style={overlay}
      >
        <div id="modalContent" style={modalContent}>
          <VscClose className="rounded hover:bg-slate-200" onClick={closeModal}/>
          <div className="flex flex-row">
            <div className="m-2 h-52 w-52 bg-slate-200 px-10">
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={100}
                height={200}
              />
            </div>
            <div className="m-2 flex flex-col bg-slate-300 p-2">
              <p>ミントが完了しました</p>
              <button className="m-1 rounded bg-yellow-300 px-4 py-2">
                Download
              </button>
              <a className="" href="https://tailwindcss.com/" target="_blank">
                <button className="m-1 flex w-80 justify-center rounded bg-sky-300 px-1 py-2">
                  <FaTwitter className="my-auto mx-1" />
                  <span className="mx-1">Tweet</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    console.log('hidden Modal')
    return <></>
  }
}
export default Modal
