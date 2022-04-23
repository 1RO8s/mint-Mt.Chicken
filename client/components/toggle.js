const Toggle = ({ title, ruby, state, setState }) => {
  
  const switchToggle = () => {
    setState(!state)
    console.log(`## state:${state}`)
  }

  return (
    <label className="mx-3 my-3 flex cursor-pointer flex-col items-center">
      <div className="flex flex-col ml-3 font-medium text-gray-700">
        <span className="text-xs">{ruby}</span>
        <span className="text-sm">{title}</span>
      </div>
      <div className="relative">
        <input type="checkbox" className="sr-only" onClick={switchToggle}/>
        <div className="block h-8 w-14 rounded-full bg-gray-600"></div>
        <div className="dot absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition"></div>
      </div>
    </label>
  )
}
export default Toggle