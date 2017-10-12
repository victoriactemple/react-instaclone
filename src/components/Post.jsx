import React, { Component } from 'react';
import Comment from './Comment';
import { FaHeartO, FaCommentO } from 'react-icons/lib/fa'
import styled from 'styled-components'


// const FlexRow = styled.div`
// display: flex;
// flex-direction: row;
// `

const PostWrapper = styled.div`
font-family: "Source Sans Pro", sans-serif;
display: flex;
flex-direction: column;
align-items: center;
border-radius: 4px;
width: 800px;
margin: 30px auto;
max-width: 400em;
border: 1px solid #4C4B3C;
 
` 
const User = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
padding: 25px;
img{
  border-radius: 100%;
  height: 35px; 
  wdith: 35px
};
p {
  padding-left: 5px;
}
`

const ImagePost = styled.div`
img{
  max-width: 500px;
  max-height: 500px;
  margin: 0 auto;
}
`

const Caption = styled.div`
padding: 15px 15px
`

class Post extends Component{

  render(){
    const { post } = this.props;
    return(
      <PostWrapper>
        <User>
          <img src={post.user.profile_pic} alt={post.user.username} />
          <p>{post.user.username}</p>
        </User>
        <ImagePost>
          <img src={post.image.url} />
          </ImagePost>
          <Caption>
          <p>{post.caption}</p>
          </Caption>
        <div>
          <FaHeartO />
          <FaCommentO />
        </div>
        <p>{post.likes.length} likes</p>
        {post.comments.map((comment,i) => <Comment key={i} comment={comment}/>)}
      </PostWrapper>
    )
  }
}

export default Post;