import React from "react";
import { connect } from "react-redux";

import { getPostList } from "../actions";

class PostList extends React.Component{
  componentDidMount() {
    this.props.getPostList();
  }

  renderList(){
    return this.props.posts.map(post=>{
      return(
        <div className="item" key={post.id}>
          <div className="content">
            <div className="header">{post.title}</div>
            {post.body}
          </div>
        </div>
      );
    });
  }

  render(){
    return(
      <div className="ui middle aligned divided list">{this.renderList()}</div>
    );
  }
}

const mapStateToProps=state=>{
  return{
    posts: state.posts
  };
};

export default connect(mapStateToProps, {getPostList})(PostList);