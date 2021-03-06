import { log } from './utils/promise-helpers.js';
import './utils/array-helpers.js';
import { notasService as service } from './nota/service.js';
import { takeUntil, debounceTime, partialize, pipe } from './utils/operators.js';



const partializedTakeUntil = partialize(takeUntil, 3);

const doTake = partializedTakeUntil(() => console.log('oi'));

const operations = pipe(
    partialize(takeUntil, 3),
    partialize(debounceTime, 500)
);

const action = operations(() =>
    service
    .sumItems('2143')
    .then(console.log)
    .catch(console.log)
)

document
    .querySelector('#myButton')
    .onclick = action;