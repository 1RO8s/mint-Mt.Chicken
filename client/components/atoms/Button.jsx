const Button = ({ children, onClick }) => {
  return (
    <button
      className={
        'rounded py-2 px-4 font-bold' + ' ' +
        'bg-blue-500 text-white hover:bg-blue-400'
      }
      onClick={onClick}
    >
      <span className="flex font-ubuntu">{children}</span>
    </button>
  )
}
export default Button

export const BaseButton = ({ children, onClick, className }) => {
  return (
    <button
      className={
        'flex items-center' +
        //"rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-400"
        'rounded py-2 px-4 font-bold' + ' ' +
        'border-sky-200 bg-sky-400 hover:bg-sky-300' + ' ' +
        className
      }
      onClick={onClick}
    >
      <span className="flex">{children}</span>
    </button>
  )

  return (
    <button
      className="mx-3 flex w-1/2 place-content-center rounded border-2 border-sky-200 bg-sky-400 py-2 px-4 font-bold hover:bg-sky-300"
      onClick={setRandomColor}
    >
      <span className="flex">
        <span className="mx-1 flex font-mplus1 text-white">おまかせ</span>
      </span>
    </button>
  )

  return (
    <button
      className="mx-3 flex w-1/2 place-content-center rounded bg-yellow-300 py-2 px-4 font-bold hover:bg-yellow-200"
      onClick={openModal}
    >
      <span className="flex">
        <Image
          src="/polygon-matic-logo.svg"
          alt="matic logo"
          width={25}
          height={25}
          className="my-auto mx-1"
          style={{ fill: '#fff' }}
        />
        <span className="mx-1 flex font-ubuntu text-white">Mint</span>
      </span>
    </button>
  )
}

export const ExSmallButton = () => (
  <button
    type="button"
    class="rounded-lg bg-blue-700 px-3 py-2 text-center text-xs font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Extra small
  </button>
)
export const SmallButton = () => (
  <button
    type="button"
    class="rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Small
  </button>
)
export const BsButton = () => (
  <button
    type="button"
    class="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Base
  </button>
)
export const LargeButton = () => (
  <button
    type="button"
    class="rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Large
  </button>
)
export const ExLargeButton = () => (
  <button
    type="button"
    class="rounded-lg bg-blue-700 px-6 py-3.5 text-center text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Extra large
  </button>
)

export const BuyButton = () => (
  <button
    type="button"
    class="mr-2 inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    <svg
      class="mr-2 -ml-1 h-5 w-5"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
    </svg>
    Buy now
  </button>
)
