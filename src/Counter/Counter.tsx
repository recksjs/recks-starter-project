import Recks from 'recks';
import { Subject } from 'rxjs';
import { map, scan, startWith } from 'rxjs/operators';
import './Counter.scss';


function Counter() {
    const input$ = new Subject<number>();
    const count$ = input$.pipe(
        startWith(2),
        scan((acc, curr) => acc + curr),
    );

    const herd$ = count$.pipe(
        map(count => {
            if (count < 0) {
                return '  🦔';
            }

            const herd = '🐑🐑🐑🐑🐑🐑🐑🌲🌳🌲🐄🐐🐖🦃🐓🌲🌳🌲🌳🌲🐇🐇';
            const forest =  '🌲🌳'.repeat(Math.max(0 , count - herd.length / 2));
            return (herd + forest).slice(0, count * 2);
        })
    );

    return <div class="counter">
        <h1>Sheep counter</h1>

        <p class="counter-controls">
            <button title="less sheep" onClick={() => input$.next(-1)}>-</button>
            <span title="count" class="counter-count">{ count$ }</span>
            <button title="more sheep" onClick={() => input$.next( 1)}>+</button>
        </p>

        <p title="herd" class="counter-sheep">🐕{ herd$ }</p>
    </div>
}

export { Counter };
