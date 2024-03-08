import ReactCardFlip from 'react-card-flip';

import { HeartIcon64Regular } from '@skbkontur/icons/icons/HeartIcon/HeartIcon64Regular';
import { StarIcon64Regular } from '@skbkontur/icons/icons/StarIcon/StarIcon64Regular';
import { People3Icon64Regular } from '@skbkontur/icons/icons/People3Icon/People3Icon64Regular';

export const DiadocFirstFlipCard = ({ isFlipped, setIsFlipped }) => (
    <ReactCardFlip isFlipped={isFlipped} flipDirection='vertical'>
        <button className='card__button' onClick={setIsFlipped}>
            <StarIcon64Regular />
        </button>
        <button className='card__button' onClick={setIsFlipped}>
            Освещай своей красотой всё вокруг ⭐
        </button>
    </ReactCardFlip>
)

export const DiadocSecondFlipCard = ({ isFlipped, setIsFlipped }) => (
    <ReactCardFlip isFlipped={isFlipped} flipDirection='vertical'>
        <button className='card__button' onClick={setIsFlipped}>
            <HeartIcon64Regular />
        </button>
        <button className='card__button' onClick={setIsFlipped}>
            Люби и будь любима 😻
        </button>
    </ReactCardFlip>
)

export const DiadocThirdFlipCard = ({ isFlipped, setIsFlipped }) => (
    <ReactCardFlip isFlipped={isFlipped} flipDirection='vertical'>
        <button className='card__button' onClick={setIsFlipped}>
            <People3Icon64Regular />
        </button>
        <button className='card__button' onClick={setIsFlipped}>
            Больше отдыхай с близкими 👨‍👩‍👦‍👦 
        </button>
    </ReactCardFlip>
)