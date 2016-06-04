import React from 'react';
import Login from '../../src/components/Login';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
} from 'react-addons-test-utils';
import { expect } from 'chai';

describe('Login', () => {

  it('contains an input text', () => {
    const component = renderIntoDocument(
      <Login />
    );
    const inputs = scryRenderedDOMComponentsWithTag(component, 'input');
    expect(inputs.length).to.equal(1);
  });
});
