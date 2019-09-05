import React from 'react'
import PostItem from './PostItem'

const Posts = (props) => {
    console.log('POST FROM POSTS', props.posts)
    return (
        <ul>
            {console.log('props.posts :', props.posts)}
            {props.posts.map((post, id) => <PostItem key={id} post={post} />)}
        </ul>
    )
}

export default Posts
