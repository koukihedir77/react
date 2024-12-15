
import './App.css';
import About from './About';
import FormComponent from './FormComponent';
import NavTest from './NavTest';
import { Button } from 'react-bootstrap';
import Dame from './Dame.jpg'

function App() {
  return (
<>
      <NavTest/>
      <FormComponent/>



<h1>Workshop React JS</h1>
<h2>2 eme</h2>
        <About/>

  
<img src={Dame} alt='Not Found'/>
<Button variant='success'>Success</Button>
</>
  )  
}





export default App;
