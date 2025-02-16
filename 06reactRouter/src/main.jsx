import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Github from './Components/Github/Github'
import User from './Components/User/User'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {path: "",
//       element:<Home/>
//       }, 
//       {path:"about",
//       element:<About/>
//       },
//       {path:"contact",
//       element:<Contact/>
//       },
//       {
//         path:"github",
//         element:<Github/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}  >
    <Route path='/' element={<Home/>}  />
    <Route path='/about' element={<About/>}  />
    <Route path='/contact' element={<Contact/>}  />
    <Route path='/user/:userId' element={<User/>}  />
    <Route path='/github' element={<Github/>}>
    <Route path=':githubId' element={<Github/>}/>
    </Route>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
