import Recks from 'recks';
import './App.scss';
import { Counter } from './Counter/Counter';
import { Logo } from './Logo/Logo';

function App () {
    return <div class="app">
        <div class="app__header">
            <div class="app__header__title">
                <h2>Recks</h2>
                <h3>is ready to serve</h3>
            </div>
            <div class="app__header__separator"></div>
            <div class="app__header__logo">
                <Logo />
            </div>
        </div>
        <div class="app__body">
            <Counter />
        </div>
        <div class="app__footer">
            🐙 <a class="app__github-link" href="https://github.com/recksjs/recks" target="_blank">github.com/recksjs/recks</a> 🐈
        </div>
    </div>
}

export { App };
