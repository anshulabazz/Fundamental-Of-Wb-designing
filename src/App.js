import styled from 'styled-components'
import './App.css';
import About from './components/About';
import Heros from './components/Heros'
import Whos from './components/Whos';
import Workss from './components/Workss';
import Contacts from './components/Contacts';
const Container = styled.div`
  height:100vh;
  background: linear-gradient(127deg,#000540,#000329,#000113 70.71%), linear-gradient(227deg,#000540,#000329,#000113 70.71%);
`

function App() {
    return (
      <Container>
            <Heros />
            <Whos />
            <Workss />
            <About />
            <Contacts/>
            </Container>
  );
}

export default App;
