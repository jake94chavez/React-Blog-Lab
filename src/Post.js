import React, { Component } from 'react';
import logo from './logo.svg';
import './Post.css';
import Comment from './Comment.js'

class Post extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>By {this.props.author}</p>
        <div>
          <p>{this.props.body}</p>
        </div>
        <h3>Comments:</h3>
        {/* Render Comment component, passing in data */}
        {this.props.comments.map((comment) => {
          return <Comment body={comment} />;
        })}
      </div>
    );
  }
}

export default Post;