import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import * as markdown from './notes/component-a.notes.md';

import { ComponentAComponent } from '../app/storybook/component-a/component-a.component';
storiesOf('Component A', module)
  .add('Chris', () => ({
    component: ComponentAComponent,
    props: {
      name: 'Chris',
      myEvent: action('Hello Chris!')
    },
  }), { notes: { markdown }})
  .add('Jane', () => ({
    component: ComponentAComponent,
    props: {
      name: 'Jane',
      myEvent: action('Hello Jane!')
    },
  }), { notes: { markdown }})
  .add('Joe', () => ({
    component: ComponentAComponent,
    props: {
      name: 'Joe',
      myEvent: action('Hello Joe!')
    },
  }), { notes: { markdown }});
