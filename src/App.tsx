import { useState } from 'react'
import { Routes } from 'react-router'
import { Route, useParams } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import { HomePage } from './pages/HomePage'
import { SchemaPage } from './pages/SchemaPage'
import "./App.scss"

function App() {
  let { id } = useParams();
  console.log(useParams())

  return (
    <div className='text-white'>
      <header className='bg-[#2d2d2d] w-full h-[7vh]'><Header/></header>
      <main className='bg-[#171717] min-h-[93vh]'>
        <Routes>
          <Route path=''  element={<HomePage/>}/>
          <Route path='/:id/schema' element={<SchemaPage/>}/>
          <Route path='*' element={<h1>Not found</h1>}/>
        </Routes>
      </main>
      {/* <footer className='bg-[#668d53] w-full h-[7vh]'><Footer/></footer> */}
    </div>
  )
}

export default App
