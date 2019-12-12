import Recks from 'recks';
import Puppy1 from './puppy@1.png';
import Puppy2 from './puppy@2.png';
import Puppy3 from './puppy@3.png';
import './Logo.scss';

function Logo() {
    return <img
        class="logo"
        src={ Puppy1 }
        srcset={`${Puppy1} 1x, ${Puppy2} 2x, ${Puppy3} 3x`}
        alt="Puppy"
        />
}

export { Logo }