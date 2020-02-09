import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select/*, boolean*/} from '@storybook/addon-knobs';

import { ListCard } from '../../components';

const themed = "Themed"
const list = ["change from", "day to", "night"]
const riddle ="Riddle"
const emoji = ["🐓","🌾", "🦊", "🚣"]
const stories = storiesOf('ListCard', module);

stories.addDecorator(withKnobs);



stories
.add('with emoji list', () => <ListCard header={riddle} items={emoji}></ListCard>)
.add('with custom themes', () => {
  const theme = select('custom theme', ['light', 'dark'], 'dark');
  return <ListCard header={themed} items={list} theme={theme}/>


 });
