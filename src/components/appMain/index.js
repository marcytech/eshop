import { observableFactory } from 'lemejs'

import template from './template'
import styles from './styles'


import '../../assets/styles/main.css'

/**
 * Here import your custom css files
 *   import '../assets/styles/grid.css'
 */

const appMain = (element) => {
  const state = observableFactory({
    title: 'App Main',
  });


  const hooks = ({ methods }) => ({ });

  const children = () => [];

  const events = ({ on, queryOnce }) => ({ });

  const methods = () => ({ });

  return {
    state,
    element,
    template,
    styles,
    events,
    methods,
    children,
    hooks
  };
};

export { appMain };
