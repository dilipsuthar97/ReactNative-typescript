import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Posts from '../../HomeModule/Posts';
import { AppState } from 'src/Redux/Store';

const initialState: AppState = {
	Main: {
		error: null,
		data: {
			posts: [{ id: 1, title: 'title', body: 'body' }],
		},
	},
	_persist: {
		version: -1,
		rehydrated: true,
	},
};

it('render correctly', () => {
	const mockStore = configureStore();
	const store = mockStore(initialState);
	const wrapper = (
		<Provider store={store}>
			<SafeAreaProvider>
				<Posts navigation={null} />
			</SafeAreaProvider>
		</Provider>
	);

	const tree = renderer.create(wrapper).toJSON();

	expect(tree).toMatchSnapshot();
});
