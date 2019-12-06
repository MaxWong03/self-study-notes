import React from 'react';
import { render } from '@testing-library/react';
import Picker from './Picker';

describe('Picker Component', () => {
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
});