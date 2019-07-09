import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class UserHeader extends Component {
  render() {
    const { user } = this.props;

    if (!user) return null;
    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.users.find(singleUser => singleUser.id === ownProps.userId),
});

export default connect(mapStateToProps)(UserHeader);

UserHeader.propTypes = {
  user: PropTypes.object,
};
