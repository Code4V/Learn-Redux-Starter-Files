// increment likes
export function increment(index)
{
    return function (dispatch){
        return dispatch({
        type: 'INCREMENT_LIKES', 
        index
    })
    }
}


// add comment
export function addComment(postId, author, comment)
{
    return function (dispatch){

        return dispatch({
            type: 'ADD_COMMENT',
            postId,
            author,
            comment
        })
    }
}

// remove comment
export function removeComment(postId, i)
{
    console.log("HELLO")
    return function(dispatch){
        
        return dispatch({
            type: 'REMOVE_COMMENT',
            postId,
            i
        })
    }
}