import React from 'react'
import PostDetails from './PostDetail'

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const PostItem = (props) => {

    return (
        <Router>
            <li className='media m-5'>
                <Link to="/posts-details" className='media'>
                    <img src="https://dummyimage.com/350x250/bfb8bf/000000.png" className='mr-3 rounded' alt="" />
                    <div className="media-body m-3 mt-4">
                        <h3 className="mt-0 mb-1"> {props.post.title} </h3>
                        <p>{props.post.content.slice(0, 150) + '...'}</p>
                    </div>
                </Link>
                <Route exact path='/posts-details/:id' component={PostDetails}></Route>
            </li>
        </Router>
    )
}

export default PostItem
