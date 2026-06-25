import { BrowserRouter, Route, Routes } from "react-router-dom"
import Aboutpage from "./Aboutpage";
import Cardspage from "./Cardspage"
import ContactPage from "./ContactPage"
import Homepage from "./Homepage"
import Notfound from "./Notfound"
export default function App() {
  return (
    <div>
        <BrowserRouter> 
        <Routes>
            <Route path="*" element={<Notfound/>}/>

            <Route path="/" element={<Homepage/>} />
            <Route path="Aboutpage" element={<Aboutpage/>} />
            <Route path="Cards" element={<Cardspage/>} />
            <Route path="Conta" element={<ContactPage/>} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}
