import React from 'react';
import styles from '../../styles/Home.scss';

export class Home extends React.Component {
  render() {
    return (
      <div className={styles['main-container']}>
        <section>
          <h2>Hello World</h2>
          <p>This is my basic React setup. yay</p>
        </section>
      </div>
    );
  }
}

Home.propTypes = {
  // https://reactjs.org/docs/typechecking-with-proptypes.html
};
