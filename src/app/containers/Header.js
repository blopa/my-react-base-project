import React from 'react';

import '../styles/Header.css';
import logo from '../logo.png';
import PropTypes from 'prop-types';

export class Header extends React.Component {
  logout() {
    this.props.logout();
  }
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  render() {
    return (
      <div className="nav-menu no-print">
        {this.props.isLogged ? (
          <div className="logout">
            <button type="submit" className="btn btn-danger" onClick={this.logout}>Logout</button>
          </div>
        ) : null}
        <div>
          <a href="#" className="nav-disabled">
            <img className="logo" src={logo} title="Made with squarespace.com"/>
          </a>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  // https://reactjs.org/docs/typechecking-with-proptypes.html
  isLogged: PropTypes.bool,
  logout: PropTypes.func
};

