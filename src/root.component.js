/** @jsx html */
import {div} from '@cycle/dom'
import xs from 'xstream'
import {html} from 'snabbdom-jsx';

export default function App (sources) {

	const vtree$ = xs.of(
		<div style={{marginTop: '100px'}}>
			<p>My Awesome Cycle.js child app built with JSX</p>
		</div>
	)
	const sinks = {
		DOM: vtree$
	}
	return sinks  
}
