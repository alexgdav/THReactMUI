import React, { Component } from 'react';
import { Card as Base } from '@material-ui/core';
// import PropTypes from 'prop-types';


class ListCard extends Component {

  render() {
    const {
      items
    } = this.props

  const itemsMap = items.map((item, index) =>
    <li key={index}>{item}</li>
  )


    return (
      <Base>
        <ul>{itemsMap}</ul>
      </Base>
    )
  }

}

/* ListCard.propTypes = {


};*/

/* ListCard.defaultProps = {
};*/

export default ListCard;
