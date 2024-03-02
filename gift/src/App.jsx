import './App.css'

import { Congratulations } from './components/Congratulations';
import { Header } from './components/Header';
import { SeparatorBlock } from './components/SeparatorBlock';
import { Cards } from './components/Cards';
import { Icons } from './components/Icons';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className='content'>
      <Icons />
      <Header />
      <main>
        <Congratulations />
        <SeparatorBlock />
        <Cards />
      </main>
      <Footer />
    </div>
  )
}

export default App
