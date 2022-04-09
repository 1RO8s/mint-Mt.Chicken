

const Toggle = ({text}) => {
  const msg = text || "[message]"
  return (
    <label className="flex flex-col items-center cursor-pointer mx-3 my-3">
      <div className="ml-3 text-gray-700 font-medium">
        {msg}
      </div>
    <div className="relative">
      <input type="checkbox" className="sr-only"/>
      <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
      <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
    </div>
    
    </label>
  )
}
export default Toggle