import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, select/*, boolean*/} from '@storybook/addon-knobs';

import { ListCard } from '../../components';
import { Button } from '../../components';
const themed = "Themed"
const list = ["change from", "day to", "night"]
const riddle ="Riddle"
const emoji = ["🐓","🌾", "🦊", "🚣"]
const buttons = [<Button>Click</Button>, <Button>These</Button>, <Button>Buttons</Button>]

const stories = storiesOf('ListCard', module);

stories.addDecorator(withKnobs);




stories
.add('with buttons', () => (
    <ListCard header="With Buttons!" items={buttons}/>
  ))
.add('with emoji list', () => <ListCard header={riddle} items={emoji}></ListCard>)
.add('with custom themes', () => {
  const theme = select('custom theme', ['light', 'dark'], 'dark');
  return <ListCard header={themed} items={list} theme={theme}/>


 });
