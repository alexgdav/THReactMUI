import React, { Component } from 'react';
import { Card as Base } from '@material-ui/core';
import classNames from 'classnames';
import './ListCard.scss'
import PropTypes from 'prop-types';


class ListCard extends Component {

  render() {
    const {
      children,
      className,
      header,
      items,
      theme
    } = this.props

  const itemsMap = items.map((item, index) =>
    <li key={index}>{item}</li>
  )

  const themeObj = {};

  switch(theme) {
    case 'light':
      themeObj.class = 'day';
      break;
    case 'dark':
      themeObj.class = 'night';
      break;
    default:
      themeObj.class = 'day';
  }
    const classes = classNames('ui-list-card', className, {[themeObj.class]: [theme] })

    return (

      <Base className={classes}>
        <header>{header}</header>
          <div >
            <ul>{itemsMap}</ul>
            {children}
          </div>
      </Base>

    )
  }
}

 ListCard.propTypes = {

classes: PropTypes.object,
/**
 * @ignore
 */
className: PropTypes.string,

}

/* ListCard.defaultProps = {
};*/

export default ListCard;
