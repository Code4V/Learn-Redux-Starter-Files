import React from 'react';
import { useParams } from 'react-router';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
    render() {
        const { postId } = this.props.params;
        const i = this.props.posts.findIndex((post) => post.code === postId)
        const post = this.props.posts[i];

        const postComments = this.props.comments[postId] || [];

    
        return (
            <div className="single-photo">
                <Photo i={i} post={post} {...this.props} />
                <Comments postComments={postComments} {...this.props}/>
                {/* {this.props.comments.map((comments, i)=><Comments {...this.props} key={i} i={i} comments={comments}/>)} */}
            </div>  
        )
    }
})


export default Single;