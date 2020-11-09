import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { render } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom'
import userEvent from '@testing-library/user-event';

import ConsentForm, { consentLabels, OnSubmitHandler } from './ConsentForm';



describe('Components / ConsentForm', () => {
  const name = 'toke';
  const email = 't@k.e';
  const checkboxValues = consentLabels;



  const renderWithRouter = (onSubmit?: OnSubmitHandler) => render(
    <Router>
      <ConsentForm onSubmit={onSubmit} />
    </Router>
  );

  const fillForm = (getByTestId: any, skipName?: string) => {
    if (skipName !== 'name') {
      fireEvent.change(getByTestId('name'), { target: { value: name } });
    }

    if (skipName !== 'email') {
      fireEvent.change(getByTestId('email'), { target: { value: email } });
    }

    if (skipName !== 'checkbox') {
      userEvent.click(
        getByTestId('checkbox_0').querySelector('input') as Element
      );
    }
  }



  describe('Button', () => {
    describe('When clicked', () => {
      test('Calls "onSubmit" with correct data', () => {
        // Intial setup
        const consentEntry = { name, email, consents: [checkboxValues[0]] };
        const onSubmit = jest.fn();

        const { getByTestId } = renderWithRouter(onSubmit);

        fillForm(getByTestId);

        const Button = getByTestId('button');
        userEvent.click(Button);

        expect(onSubmit).toHaveBeenCalledWith(consentEntry);
      });

      test('Links to "/consents" page', () => {
        const { getByTestId } = renderWithRouter();

        const Button = getByTestId('button');

        expect(Button).toHaveAttribute('href', '/consents');
      });
    });

    test('Is not disabled when Name, Email are filled and at least one consent is given', () => {
      const { getByTestId } = renderWithRouter();

      expect(getByTestId('button')).toHaveAttribute('aria-disabled', 'true');

      fillForm(getByTestId);

      expect(getByTestId('button')).toHaveAttribute('aria-disabled', 'false');
    });

    describe('Is disabled when', () => {
      test.each(
        ['name', 'email', 'checkbox']
      )('"%s" is not filled', (skipName) => {
        const { getByTestId } = renderWithRouter();

        expect(getByTestId('button')).toHaveAttribute('aria-disabled', 'true');

        fillForm(getByTestId, skipName);

        expect(getByTestId('button')).toHaveAttribute('aria-disabled', 'true');
      });
    });
  })
})
