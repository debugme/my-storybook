import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Button } from './component'

storiesOf('Button', module)
  .add('with caption', () =>
    <Button caption="hello" onClick={action('clicked')} />
  )