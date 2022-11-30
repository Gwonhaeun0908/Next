export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: '하은',
        },
        content: '첫 번째 게시글 #해시태그 #익스프레스',
        Images: [{
            src: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftheqoo.net%2Fnamwoohyun%2F981120535&psig=AOvVaw3DwlBofr5cOUVA69M5xLKz&ust=1669803091415000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPCBgbOT0_sCFQAAAAAdAAAAABAN'
        }, {
            src: 'https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.enuri.com%2Fknowcom%2Fdetail.jsp%3Fkbno%3D1503688&psig=AOvVaw34HqY5AKuIcADCgS9aEjf9&ust=1669803281060000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJDv0I2U0_sCFQAAAAAdAAAAABAE'
        }, {
            src: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcoolenjoy.net%2Fbbs%2Fgallery%2F3547822%3Fsca%3D%25EC%259B%2583%25EA%25B9%2580%26spt%3D-200096%26page%3D3&psig=AOvVaw34HqY5AKuIcADCgS9aEjf9&ust=1669803281060000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJDv0I2U0_sCFQAAAAAdAAAAABAK'
        }],
        Comments: [{
            User: {
                nickname: 'rabbit',
            },
            content: '배고파',
        },      {
            User: {
                nickname: 'cat',
            },
            content: '냐아옹',
        }]
    }],
    imagePaths: [],
    postAdded: false,
}

const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST,
}

const dummyPost = {
    id: 2,
    content: '더미데이터',
    User: {
        id: 1,
        nickname: '하은',
    },
    Images: [],
    Comments: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true,
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};

export default reducer;