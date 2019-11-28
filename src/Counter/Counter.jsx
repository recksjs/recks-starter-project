import Recks from 'recks';
import { Subject } from 'rxjs';
import { startWith, scan } from 'rxjs/operators';
import './Counter.scss';


function Counter() {
    const input$ = new Subject();
    const view$ =
        input$.pipe(
            startWith(0),
            scan((acc, curr) => acc + curr)
        );

    return <div class="counter">
        <button onClick={() => input$.next(-1)}>-</button>
        { view$ }
        <button onClick={() => input$.next( 1)}>+</button>
    </div>
}

export { Counter }