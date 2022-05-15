const Toggle = ({ title, ruby, state, setState }) => {
  
  const switchToggle = () => {
    setState(!state)
    console.log(`## state:${state}`)
  }

  return (
    <label className="mx-3 my-3 flex cursor-pointer flex-col">
      <div className="flex flex-col font-medium text-gray-700 text-left">
        <span className="text-xs font-ubuntu">{ruby}</span>
        <span className="text-sm font-mplus1 font-bold">{title}</span>
      </div>
      <div className="relative">
        <input type="checkbox" className="sr-only" onClick={switchToggle}/>
        <div className="block h-8 w-14 rounded-full bg-slate-200 border-slate-300 border-2"></div>
        <div className="dot absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition"></div>
      </div>
    </label>
  )
}
export default Toggle