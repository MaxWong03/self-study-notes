import fetch from 'cross-fetch'
import * as actions from './actionTypes';

export const selectSubreddit = subreddit => {
  return {
    type: actions.SELECT_SUBREDDIT,
    subreddit
  }
}

export const invalidateSubreddit = subreddit => {
  return {
    type: actions.INVALIDATE_SUBREDDIT,
    subreddit
  }
}

const requestPosts = subreddit => {
  return {
    type: actions.REQUEST_POSTS,
    subreddit
  }
}

const receivePosts = (subreddit, json) => {
  return {
    type: actions.RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

const fetchPosts = subreddit => dispatch => {
  dispatch(requestPosts(subreddit))
  return fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then(response => response.json())
    .then(json => dispatch(receivePosts(subreddit, json)))
}

const shouldFetchPosts = (state, subreddit) => {
  const posts = state.postsBySubreddit[subreddit];
  if (!posts) {
    return true;
  } else if (posts.isFetching) {
    return false;
  } else {
    return posts.didInvalidate
  }
}

export const fetchPostsIfNeeded = subreddit => (dispatch, getState) => {
  if (shouldFetchPosts(getState(), subreddit)) {
    return dispatch(fetchPosts(subreddit))
  }
}