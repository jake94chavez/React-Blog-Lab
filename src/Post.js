import React, { Component } from 'react';
import logo from './logo.svg';
import './Post.css';
import Comment from './Comment.js'

class Post extends Component {
  constructor (props) {
    super()
    this.state = {
      body: 'Bears, Beets, Battlestar Galactica'
    }
  }
  handleClick (e) {
    let newBody = prompt('Change the body')
    this.setState({
      body: newBody
    })
  }
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>By {this.props.author}</p>
        <div>
          <p>{this.state.body}</p>
          <button onClick={(e) => this.handleClick(e)}>click to render!</button>
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