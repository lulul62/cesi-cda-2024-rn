jest.useFakeTimers();
import React from 'react';
import renderer from 'react-test-renderer';
import { StyledProvider, config } from '@gluestack-ui/themed';
import SplashScreen from '../../../screens/Login/SplashScreen';
it('SplashScreen', () => {
  const tree = renderer
    .create(
      <StyledProvider config={config.theme}>
        <SplashScreen />
      </StyledProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});