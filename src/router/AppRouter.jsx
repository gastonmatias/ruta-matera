import { Route, Routes } from "react-router-dom"
import { Layout } from "../components/Layout"
import { Home, Products } from "../pages"
import { About } from "../pages/About"

export const AppRouter = () => {
  return (
    
    <Layout>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/productos" element={<Products/>}/>
          <Route path="/acerca-de" element={<About/>}/>
          <Route path="/*" element={<Home/>}/>
      </Routes>
    </Layout>
  )
}