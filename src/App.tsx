import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './setup/router/Router';
import './main.scss';

function App() {
	return (
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	);
}

export default App;
