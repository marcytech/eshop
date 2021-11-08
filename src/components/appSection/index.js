import { observableFactory } from 'lemejs'

import template from './template'
import styles from './styles'

import { appSearch } from '../appSearch'

 export const appSection = (element) => {

  const state = observableFactory({
    title: 'App Main'
  })

    const children = () => ([
      appSearch
    ])



    return {
      state,
      element,
      template,
      styles,
      children,
    }
}