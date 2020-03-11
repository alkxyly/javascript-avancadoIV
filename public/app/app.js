import { log } from './utils/promise-helpers.js';
import './utils/array-helpers.js';
import { notasService as service } from './nota/service.js';
import { takeUntil, debounceTime } from './utils/operators.js';

const showMessage = () => console.log('OI');


const operation1 = takeUntil(3, () =>
    service
    .sumItems('2143')
    .then(console.log)
    .catch(console.log)
);

const operation2 = debounceTime(500, operation1)

document
    .querySelector('#myButton')
    .onclick = operation2;