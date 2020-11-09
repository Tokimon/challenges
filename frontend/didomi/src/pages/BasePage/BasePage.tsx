import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'

import { initConsents } from '../../store/actions';

import BaseLayout from '../../components/BaseLayout/BaseLayout';



/**
 * Component to wrap pages with the basic layout.
 * It also fills the redux store with data from the server.
 */
function BasePage({ ...props }) {
  const dispatch = useDispatch();

  useEffect(() => { dispatch(initConsents()); }, [dispatch]);

  return (<BaseLayout {...props} />);
}

BasePage.displayName = 'BasePage';

export default BasePage;
