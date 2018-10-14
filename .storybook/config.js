import { configure, setAddon } from '@storybook/react'
import enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import JSXAddon from 'storybook-addon-jsx'

enzyme.configure({ adapter: new Adapter() })

setAddon(JSXAddon)
const loadStories = () =>
  require('../chapters/button/story.js')

configure(loadStories, module)