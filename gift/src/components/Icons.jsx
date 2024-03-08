import diadoc from '../assets/diadoc.svg';
import pagediadoc from '../assets/pagediadoc.svg';
import incoming from '../assets/doc-arrow-in-64-regular.svg';
import outgoing from '../assets/doc-arrow-out-64-regular.svg';

export const Icons = () => (
    <>
      <img className='diadoc' src={diadoc} loading='lazy' />
      <img className='pagediadoc' src={pagediadoc} loading='lazy' />
      <img className='incoming' src={incoming} loading='lazy' />
      <img className='outgoing' src={outgoing} loading='lazy' />
    </>
)