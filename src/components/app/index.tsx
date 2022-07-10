import React from 'react';
import { Counter } from '../counter';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { UsersList } from '../users-list';

function App() {
	return (
		<Provider store={store}>
			<UsersList />
			<Counter />
		</Provider>
	);
}

export default App;
