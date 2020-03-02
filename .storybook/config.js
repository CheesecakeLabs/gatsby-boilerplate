import { addDecorator, configure } from '@storybook/react'

import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'
import { withSmartKnobs } from 'storybook-addon-smart-knobs'
import { withA11y } from '@storybook/addon-a11y'

const stories = require.context('../src/components', true, /stories\.js$/)

function loadStories() {
  stories.keys().forEach(stories)
}

addDecorator(withInfo)
addDecorator(withKnobs)
addDecorator(withSmartKnobs({ignoreProps: ['className', 'children']}))
addDecorator(withA11y)

configure(loadStories, module)