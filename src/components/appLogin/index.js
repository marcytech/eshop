import { observableFactory } from 'lemejs'

import { appBanner } from '../appBanner'
import { appAuthType } from '../appAuthType'

import template from './template'
import styles from './styles'

 export const appLogin = (element) => {

  const state = observableFactory({
    title: 'App Main'
  }) 

    const children = () => ([
      appBanner,
      appAuthType
    ])



    return {
      state,
      element,
      template,
      styles,
      children,
    }
}