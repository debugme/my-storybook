import { configure } from '@storybook/react'

const loadStories = () =>
  require('../chapters/button/story.js')

configure(loadStories, module)