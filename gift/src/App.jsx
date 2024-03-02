import './App.css'

import { Congratulations } from './components/Congratulations';
import { Header } from './components/Header';

function App() {
  return (
    <div className='content'>
      <Header />
      <Congratulations />
      <figure className='figure'>
        <figcaption className='figcaption'>
          Давай посмотрим на мои пожелания в трех карточках :)  
        </figcaption>
        <img src='https://kontur.ru/Files/Modules/LandingPage/5675i/4bcca3b9-ef92-463e-ba7d-ca6399d1c714.svg' className='arrow' />
      </figure>
    </div>
  )
}

export default App
