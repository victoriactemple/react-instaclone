import React, {Component} from 'react';
import styled from 'styled-components'

const CommentKey = styled.div`

`
const CommenterImage = styled.div`
display: flex;
align-items: center;
img{
  border-radius: 100%
}
`


class Comment extends Component {
  render() {
    const {comment} = this.props;
    console.log(comment);
    return (
      <CommentKey>

        <CommenterImage>
        <img src={comment.profile_pic}/>
        </CommenterImage>
        <p>
          <strong>{comment.username}</strong>
          {comment.text}</p>
      </CommentKey>
    );
  }
}

export default Comment;