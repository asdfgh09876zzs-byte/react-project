import NavBar from "./NavBar";

export default function Cardspage() {
  return (
    <div>
      <NavBar/>
     <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-14">
      <div className="bg-blue-400 h-50">div 6</div>
      <div className="bg-blue-400 h-50 col-span-2">div 6</div>
      <div className="bg-blue-400 h-50">div 6</div>
      <div className="bg-blue-400 h-50">div 6</div>
      <div className="bg-blue-400 h-50">div 6</div>
      <div className="bg-blue-400 h-50">div 6</div>
    </div>
    </div>
  )
}
