import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Picker from './Picker';

const mockStore = configureStore([]);

afterEach(cleanup);

describe('Picker Component', () => {
  let store;
  
  beforeEach(() => {
    store = mockStore({
      
    })
  });

  it('renders without crashing', () => {
    const fn = jest.fn();
    render(
      <Picker
        value={'mma'}
        onChange={fn}
        options={['reactjs', 'frontend', 'mma']}
      />
    );
  });

  it('changes value when onChange function is called', () => {

  });
});