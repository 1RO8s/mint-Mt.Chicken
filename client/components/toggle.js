

const Toggle = ({text}) => {
  const msg = text || "[message]"
  return (
    <label class="flex items-center cursor-pointer mx-3 my-3">
    <div class="relative">
      <input type="checkbox" class="sr-only"/>
      <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>
      <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
    </div>
    <div class="ml-3 text-gray-700 font-medium">
      {msg}
    </div>
    </label>
  )
}
export default Toggle