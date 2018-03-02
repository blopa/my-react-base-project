import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Loop.css';

export class Loop extends React.Component {
  render() {
    const deb = (
      <ul>
        {this.props.items.map((o, k) => {
          const child = React.cloneElement(this.props.children, {data: o});
          return (
            <li key={k}>
              {child}
            </li>
          );
        }, this)}
      </ul>
    );
    return deb;
  }
}

Loop.propTypes = {
  children: PropTypes.element.isRequired,
  items: PropTypes.array
  // https://reactjs.org/docs/typechecking-with-proptypes.html
};
