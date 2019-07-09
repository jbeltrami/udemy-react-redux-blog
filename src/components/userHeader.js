import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchUser } from '../actions';

class UserHeader extends Component {
  componentDidMount() {
    const { fetchUser: getUser, userId } = this.props;

    getUser(userId);
  }

  render() {
    const { user } = this.props;

    if (!user) return null;
    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.users.find(singleUser => singleUser.id === ownProps.userId),
});

export default connect(
  mapStateToProps,
  { fetchUser }
)(UserHeader);

UserHeader.propTypes = {
  fetchUser: PropTypes.func,
  userId: PropTypes.number,
  user: PropTypes.object,
};
