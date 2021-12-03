import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import Details from '../components/Details';

describe('Details Element Tests', () => {
  test('Check if Component Renders in DOM', () => {
    render(
      <Provider store={store}>
        <Router>
          <Details />
        </Router>
      </Provider>,
    );
    expect(screen.queryByText(/2021/)).toBeNull();
    expect(screen.queryByText(/Description/)).toBeNull();
  });
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Details />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
