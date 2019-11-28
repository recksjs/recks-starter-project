import Recks from 'recks';
import { Counter } from './Counter/Counter';
import './App.scss';

function App () {
    return <div class="app">
        <div class="app-header">
            <h1>Recks 🐶</h1>
            <h2>is ready to serve</h2>
            <h3><a href="https://github.com/recksjs/recks" target="_blank">[github]</a></h3>
        </div>
        <div class="app-body">
            <Counter />
        </div>
    </div>
}

export { App }