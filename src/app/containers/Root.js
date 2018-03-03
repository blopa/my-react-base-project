import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {Header} from './Header';
import {Home} from './routes/Home';
import '../styles/Root.css';
import PropTypes from 'prop-types';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({userData: state});
const mapDispatchToProps = dispatch => (
  {
    action: () => (
      dispatch(
        {
          type: 'ACTION_1',
          payload: {}
        }
      )
    )
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Root);

Root.propTypes = {
  // https://reactjs.org/docs/typechecking-with-proptypes.html
  userData: PropTypes.object,
  action: PropTypes.func
};
