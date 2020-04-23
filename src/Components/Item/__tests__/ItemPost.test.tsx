import React from 'react';
import renderer from 'react-test-renderer'

import ItemPost from '../ItemPost';

it('render correctly with defaults', () => {
    const tree = renderer.create(<ItemPost item={{id: 100, title: 'title'}}/>).toJSON();
    expect(tree).toMatchSnapshot();
})