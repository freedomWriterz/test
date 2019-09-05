import React from 'react'
import PostItem from './PostItem'

const Posts = (props) => {
    console.log('POST FROM POSTS', props.posts)
    return (
        <ul>
            {props.posts.map((post, id) => <PostItem key={id} post={post} />)}
        </ul>
    )
}

export default Posts
