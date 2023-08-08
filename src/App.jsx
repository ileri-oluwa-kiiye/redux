// import Practise from "./components/practise"
import styled from "styled-components"
import './index.css'
import { useState } from 'react'
import Advancedform from './components/advancedForm'
import Basicform from './components/basicform'

function App() {

  const [view, setView] = useState("basic")
  return (
    <Wrapdiv className="App">
      <Nav>
        <H3
          onClick={()=> setView('basic')}
          style = {{color: view==='basic'? "white" :'#718096'}}
        >
          Basic
        </H3>
        <H3
          onClick={()=> setView('advanced')}
          style={{color: view ==='advanced'? 'white' : '#718096'}}
        >
          Advanced
        </H3>
      </Nav>
      { view==='basic'? <Basicform /> : <Advancedform />}
    </Wrapdiv>
  )
}


const Wrapdiv = styled.div`
  max-width: max-content;
  min-width: 40vw;
  margin: auto;
  padding: 4vw 10%;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  max-width: 250px;
  margin: auto;
`

const H3 = styled.h3`
  /* colour: white; */
  font-size: 30px;
  margin: 40px;
  margin-bottom: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  /* &:active{
    color: white!important;
  } */
`



export default App
