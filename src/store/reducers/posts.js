import {ADD_POST, ADD_COMMENT} from '../actions/actionTypes';

const initialState = {
  posts: [
    {
      id: Math.random(),
      nickname: 'Rafael Filho',
      email: 'a@gmail.com',
      image: require('../../../assets/imgs/fence.jpg'),
      comments: [
        {
          nickname: 'John',
          comment: 'Stunning!',
        },
        {
          nickname: 'Ana Julia',
          comment: 'Foto linda!',
        },
      ],
    },
    {
      id: Math.random(),
      nickname: 'Renato Saldanha',
      email: 'renato.1991@gmail.com',
      image: require('../../../assets/imgs/bw.jpg'),
      comments: [],
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case ADD_COMMENT:
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post.id === action.payload.postId) {
            if (post.comments) {
              post.comments = post.comments.concat(action.payload.comment);
            } else {
              post.comments = [action.payload.comment];
            }
          }
          return post;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
