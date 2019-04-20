import React from 'react';
import ReactDOM from 'react-dom';
import ApplicationDemo from './entities/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ApplicationDemo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
