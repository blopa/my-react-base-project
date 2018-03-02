import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {Header} from './Header';
import {Forum} from './routes/Forum';
import {Post} from './routes/Post';
import {Home} from './routes/Home';
import {Login} from './routes/Login';
import '../styles/Root.css';
import PropTypes from 'prop-types';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.state = {
      loadedData: false,
      requestFailed: false
    };
  }
  logout() {
    this.props.setLogged('', false);
  }
  render() {
    return (
      <div>
        <Header isLogged={this.props.userData.logged} logout={this.logout} />
        <Switch>
          <Route exact path="/login" render={props => <Login isLogged={this.props.userData.logged} logUser={
            (token, logged) => this.props.setLogged(token, logged)
          } {...props}/>} />
          {!this.props.userData.logged ? <Redirect to="/login" /> : null}
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route path="/forum/:id" component={Forum} />
          <Route path="/post/:id" render={props => <Post
            userData={this.props.userData} {...props}
          />}/>
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({userData: state});
const mapDispatchToProps = dispatch => (
  {
    setLogged: (token, logged) => (
      dispatch(
        {
          type: 'LOGIN',
          payload: {
            logged: logged,
            token: token
          }
        }
      )
    )
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Root);

Root.propTypes = {
  // https://reactjs.org/docs/typechecking-with-proptypes.html
  userData: PropTypes.object,
  setLogged: PropTypes.func
};
