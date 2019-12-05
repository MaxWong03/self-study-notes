import { combineReducers } from 'redux';
import * as actions from '../actions/actionTypes';

const selectedSubreddit = (state = 'reactjs', action) => {
  switch (action.type) {
    case actions.SELECT_SUBREDDIT:
      return action.subreddit
    default:
      return state
  }
}

const posts = (
  state = {
    isFetching: false,
    didInvaldiate: false,
    items: []
  },
  action) => {
  switch (action.type) {
    case actions.INVALIDATE_SUBREDDIT:
      return {
        ...state,
        didInvaldiate: true
      }
    case actions.REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
        didInvaldiate: false
      }
    case actions.RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        didInvaldiate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

const postsBySubreddit = (state = {}, action) => {
  switch (action.type) {
    case actions.INVALIDATE_SUBREDDIT:
    case actions.RECEIVE_POSTS:
    case actions.REQUEST_POSTS:
      return {
        ...state,
        [action.subreddit]: posts(state[action.subreddit], action)
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  postsBySubreddit,
  selectedSubreddit
})

export default rootReducer