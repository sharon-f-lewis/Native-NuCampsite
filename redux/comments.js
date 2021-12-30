import * as ActionTypes from './ActionTypes';

export const comments = (state = { errMess: null, comments: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      return { ...state, errMess: null, comments: action.payload };

    case ActionTypes.COMMENTS_FAILED:
      return { ...state, errMess: action.payload };

    case ActionTypes.ADD_COMMENT:
      const commentId = state.comments.length;
      const comment = action.payload;
      comment.id = commentId;
      return { ...state, comments: state.comments.concat(comment)};

    default:
      return state;
  }
};
