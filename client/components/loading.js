import React from "react";

const Loading = ({ isLoading}) => {
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

  if (isLoading) {
    console.log('# Now loading...')
    return (
      <div
        id="overlay"
        className="fixed bg-gray-300"
        style={overlay}
      >
        <p id="modalContent" className="flex flex-col w-fit">
          ミント中...
        </p>
      </div>
    )
  } else {
    console.log('# finish loading!!')
    return <></>
  }
}
export default Loading
