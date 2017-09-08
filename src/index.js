import {run} from '@cycle/run'
import {makeDOMDriver} from '@cycle/dom'
import singleSpaCycle from '@pcmnac/single-spa-cycle';
import rootComponent from './root.component.js';

const cycleLifecycles = singleSpaCycle({
	run,
	rootComponent,
	drivers: { DOM: makeDOMDriver(domElementGetter())},
});

export const bootstrap = [
	cycleLifecycles.bootstrap
];

export const mount = [
	cycleLifecycles.mount
];

export const unmount = [
	cycleLifecycles.unmount
];

function domElementGetter() {
	// Make sure there is a div for us to render into
	let el = document.getElementById('app3');
	if (!el) {
		el = document.createElement('div');
		el.id = 'app3';
		document.body.appendChild(el);
	}

	return el;
}
