import '../styles/index.scss';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
	constructor(props) {
        super(props);
    }

	render() {
        return (
            <div className="container mx-auto px-3">
                <h1 className="mb-4">Hello world</h1>

                <div className="mb-3">
                    <h2 className="mb-3">Styling</h2>
                    <ul>
                        <li>SCSS</li>
                        <li>Post CSS</li>
                        <li>Autoprefixer</li>
                        <li><a href="https://tailwindcss.com/">Tailwind</a></li>
                    </ul>
                </div>

                <div className="mb-3">
                    <h2 className="mb-3">Images</h2>
                    <p className="mb-3">The following image gets copied as a static asset using <a href="https://github.com/tiaanduplessis/parcel-plugin-asset-copier">parcel-plugin-asset-copier</a> so it can be used inside a React component without importing the assets.</p>
                    <img className="mt-4 block w-64" src="./img/juice.jpg" />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

