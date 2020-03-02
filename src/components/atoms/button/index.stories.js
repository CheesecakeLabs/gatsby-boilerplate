import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import { actions } from '@storybook/addon-actions'

import Button from './index'

storiesOf('Atoms', module).add('Button', () => {
  const children = text('Content', 'Click me')

  return <Button {...actions('onClick')}>{children}</Button>
})
