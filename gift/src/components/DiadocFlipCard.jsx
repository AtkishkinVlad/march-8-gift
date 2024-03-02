import ReactCardFlip from 'react-card-flip';

import { HeartIcon64Regular } from '@skbkontur/icons';

export const DiadocFirstFlipCard = ({ isFlipped, setIsFlipped }) => (
    <ReactCardFlip isFlipped={isFlipped} flipDirection='vertical'>
        <button className='card__button' onClick={setIsFlipped}>
            Первая карточка с тайной о самом важном
        </button>
        <button className='card__button' onClick={setIsFlipped}>
            Самое важное — быть среди любимых в этот день (обнимаю)
        </button>
    </ReactCardFlip>
)

export const DiadocSecondFlipCard = ({ isFlipped, setIsFlipped }) => (
    <ReactCardFlip isFlipped={isFlipped} flipDirection='vertical'>
        <button className='card__button' onClick={setIsFlipped}>
            <HeartIcon64Regular />
            <p>
                Сердечко для тебя
            </p>
        </button>
        <button className='card__button' onClick={setIsFlipped}>
            Самое важное — быть среди любимых в этот день (обнимаю)
        </button>
    </ReactCardFlip>
)

export const DiadocThirdFlipCard = ({ isFlipped, setIsFlipped }) => (
    <ReactCardFlip isFlipped={isFlipped} flipDirection='vertical'>
        <button className='card__button' onClick={setIsFlipped}>
            Первая карточка с тайной о самом важном
        </button>
        <button className='card__button' onClick={setIsFlipped}>
            Самое важное — быть среди любимых в этот день (обнимаю)
        </button>
    </ReactCardFlip>
)