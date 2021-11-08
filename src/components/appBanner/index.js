import { observableFactory } from 'lemejs'

import template from './template'
import styles from './styles'

 export const appBanner = (element) => {

  const state = observableFactory({
    title: 'App Main'
  })



    return {
      state,
      element,
      template,
      styles,
    }
}