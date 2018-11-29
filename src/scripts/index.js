import '../styles/index.scss';
import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
	constructor(props) {
        super(props);
    }

	render() {
        return (
            <div class="container mx-auto">
                <h1 class="mb-4">Hello world</h1>
                <p class="mb-3">The following image gets copied as a static asset using <a href="https://github.com/tiaanduplessis/parcel-plugin-asset-copier">parcel-plugin-asset-copier</a>.</p>
                <p class="mb-3">So it can be used inside a React component without importing the assets.</p>
                <img class="mt-4 block" src="./img/juice.jpg" />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

// Hot Module Replacement
if (module.hot) {
	module.hot.accept();
}

