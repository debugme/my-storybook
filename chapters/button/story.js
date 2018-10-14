import React from 'react'
import { shallow } from 'enzyme'
import { storiesOf } from '@storybook/react'
import { specs, describe, it } from 'storybook-addon-specifications'
import expect from 'expect'
import { action } from '@storybook/addon-actions'

import { Button } from './component'

storiesOf('Button', module)
  .add('with caption', () => {
    const story = <Button caption="hello" onClick={action('clicked')} />

    specs(() => describe('Button', () => {
      it('should show passed in caption', () => {
        const component = shallow(story)
        expect(component.text()).toContain('hello')
      })
    }))

    return story
  })