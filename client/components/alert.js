import React from 'react'
import { VscClose } from 'react-icons/vsc'

const Alert = ({ type, message }) => {
  const [showModal, setShowModal] = React.useState(true)
  const closeAlert = () => {
    setShowModal(false)
  }

  if (showModal) {
    return (
      <div
        class="alert alert-dismissible fade show mb-3 inline-flex w-full items-center rounded-lg bg-yellow-100 py-5 px-6 text-base text-yellow-700"
        role="alert"
      >
        <span class="mr-1 font-bold">Holy guacamole! </span>
        <span>ウォレットを接続してください</span>
        <button
          type="button"
          class="ml-auto box-content h-4 w-4 rounded-none border-none p-1 text-yellow-900 opacity-50 hover:text-yellow-900 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={closeAlert}
        >
          <VscClose />
        </button>
      </div>
    )
  } else {
    return <></>
  }
}
export default Alert
