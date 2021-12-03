import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import NavBar from '../components/NavBar';

describe('NavBar Element Tests', () => {
  test('Check if Component Renders in DOM', () => {
    render(
      <Provider store={store}>
        <Router>
            <NavBar />
        </Router>
      </Provider>,
    );
    expect(screen.queryByText(/COVID/)).toBeTruthy();
    expect(screen.queryByText(/Description/)).toBeNull();
  });
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
        <Router>
            <NavBar />
        </Router>
      </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});