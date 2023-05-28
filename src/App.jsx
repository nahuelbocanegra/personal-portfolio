
import './App.css'
import NavBar from './componentes/NavBar';
import Contact from './componentes/Contact';
import Project from "./componentes/Project"
import Main from "./componentes/Main"
import AbautMe from './componentes/AbautMe';
import Content from './componentes/Content';

function App() {
  

  return (
    <div className="App">
      <Content></Content>
     <NavBar></NavBar>
     <Main></Main>
     <AbautMe></AbautMe>
     <Project></Project>
     <Contact></Contact>
    </div>
  )
}

export default App
