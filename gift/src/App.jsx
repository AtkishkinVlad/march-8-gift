import './App.css'

import { Congratulations } from './components/Congratulations';
import { Header } from './components/Header';
import { SeparatorBlock } from './components/SeparatorBlock';
import { Cards } from './components/Cards';

function App() {
  
  return (
    <div className='content'>
      <Header />
      <Congratulations />
      <SeparatorBlock />
      <Cards />
    </div>
  )
}

export default App
