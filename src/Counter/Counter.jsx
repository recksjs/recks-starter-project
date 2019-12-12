import Recks from 'recks';
import { Subject } from 'rxjs';
import { map, scan, startWith } from 'rxjs/operators';
import './Counter.scss';


function SheepCounter() {
    const input$ = new Subject();
    const count$ = input$.pipe(
        startWith(2),
        scan((acc, curr) => acc + curr),
    );

    const herd$ = count$.pipe(
        map(count => {
            if (count < 0) {
                return '  🦔';
            }

            const herd = '🐑🐑🐑🐑🐑🐑🐑      🐄🐐🐖🦃🐓      🐇🐇';
            return herd.slice(0, count * 2);
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

export { SheepCounter as Counter };
