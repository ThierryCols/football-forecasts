import React, { PropTypes } from 'react';

class Rankings extends React.Component {
  getUsers() {
    return this.props.users;
  }
  displayUserScore() {

  }
  render() {
    return (<div className="rankings">
      {this.getUsers().map(this.displayUserScore)}
    </div>);
  }
}

Rankings.propTypes = {
  users: PropTypes.array,
};

export default Rankings;
