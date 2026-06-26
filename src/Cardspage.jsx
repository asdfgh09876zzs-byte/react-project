// import NavBar from "./NavBar";
{/* <NavBar/> */}

import Cardcomponent from "./Cardcomponent";
export default function Cardspage() {
  let card1Title = "div 1";
  let Card2Title = "div 2";
  let Card3Title = "div 3";
  let Card4Title = "div 4";
  let Card5Title = "div 5";
  return (
    <div>
     <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-14">
      {/* <div className="bg-blue-400 h-50">div 6</div>
      <div className="bg-blue-400 h-50 col-span-2">div 6</div> */}
      {/* <div className="bg-blue-400 h-50 rounded-3xl p-5">div 6</div>
      <div className="bg-blue-400 h-50 rounded-3xl p-5">div 6</div>
      <div className="bg-blue-400 h-50 rounded-3xl p-5">div 6</div>
      <div className="bg-blue-400 h-50 rounded-3xl p-5">div 6</div> */}
      <Cardcomponent cardTitle={card1Title} backgroundcolor={"bg-red-400"}/>
      <Cardcomponent cardTitle={Card2Title} backgroundcolor={"bg-red-500"}/>
      <Cardcomponent cardTitle={Card3Title} backgroundcolor={"bg-red-600"}/>
      <Cardcomponent cardTitle={Card4Title} backgroundcolor={"bg-red-700"}/>
      <Cardcomponent cardTitle={Card5Title} backgroundcolor={"bg-red-800"}/>
    </div>
    </div>
  )
}
