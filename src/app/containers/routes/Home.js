import React from 'react';
import {fetchData} from '../../helper/functions.js';
import {Main} from '../../components/Main.js';
import {Loop} from '../../components/Loop.js';

import '../../styles/Home.css';

export class Home extends React.Component {
  componentDidMount() {
    const f = d => {
      this.setState({
        forums: d.filter(fo => fo.parentForum === null),
        loadedData: true
      });
    };
    const ef = () => {
      this.setState({
        requestFailed: true
      });
    };
    fetchData('https://my-json-server.typicode.com/blopa/fun-forum/forums', f, ef);

    const p = d => {
      this.setState({
        posts: d,
        loadedData: true
      });
    };
    const ep = () => {
      this.setState({
        requestFailed: true
      });
    };
    fetchData('https://my-json-server.typicode.com/blopa/fun-forum/posts', p, ep);
  }
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Main>
        <div>

        </div>
      </Main>
    );
  }
}

Home.propTypes = {
  // https://reactjs.org/docs/typechecking-with-proptypes.html
};
