import { useState } from 'react';

import { DiadocFirstFlipCard, DiadocSecondFlipCard, DiadocThirdFlipCard } from './DiadocFlipCard';

export const Cards = () => {
  const [isFlippedFirstCard, setIsFlippedFirstCard] = useState(false);
  const [isFlippedSecondCard, setIsFlippedSecondCard] = useState(false);
  const [isFlippedThirdCard, setIsFlippedThirdCard] = useState(false);

  return (
    <section className='cards'>
        <DiadocFirstFlipCard isFlipped={isFlippedFirstCard} setIsFlipped={() => setIsFlippedFirstCard(!isFlippedFirstCard)} />
        <DiadocSecondFlipCard isFlipped={isFlippedSecondCard} setIsFlipped={() => setIsFlippedSecondCard(!isFlippedSecondCard)} />
        <DiadocThirdFlipCard isFlipped={isFlippedThirdCard} setIsFlipped={() => setIsFlippedThirdCard(!isFlippedThirdCard)} />
    </section>
  )
}