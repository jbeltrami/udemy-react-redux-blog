import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './userHeader';

class PostList extends Component {
  componentDidMount() {
    const { fetchPostsAndUsers: fetchData } = this.props;
    fetchData();
  }

  renderList() {
    const { posts } = this.props;
    return posts.map(post => (
      <div className="item" key={post.id}>
        <i className="large middle aligned icon user"></i>
        <div className="content">
          <div className="description">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
          <UserHeader userId={post.userId} />
        </div>
      </div>
    ));
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => ({ posts: state.posts });

PostList.propTypes = {
  fetchPostsAndUsers: PropTypes.func,
  posts: PropTypes.array,
};

export default connect(
  mapStateToProps,
  { fetchPostsAndUsers }
)(PostList);
