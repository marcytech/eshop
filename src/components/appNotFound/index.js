import { observableFactory } from 'lemejs';

import template from './template'
import styles from './styles'

const appNotFound = (element) => {
    
    const state = observableFactory({
      title: 'Not Found!',
    });

    const hooks = () => ({});

    return {
      element,
      state,
      template,
      styles,
      hooks,
    };
}

export { appNotFound }