import React from 'react'
import { Footer,Header, Skills,Projects, About} from './container'
import { Navbar } from './components'
import './App.scss'

const App = () => {
    return (
        <div className= 'app'>
            <Navbar />
            <Header/>
            <About />
             <Projects />
            <Skills />
            x
            <Footer />
           
        </div>
    )
}

export default App
