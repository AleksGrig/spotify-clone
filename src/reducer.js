export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // REMOVE AFTER FINISHING DEVELOPMENT
    token: 'BQC08NKF9zOGcHcth9mdH1g5ADEM6beG2iMQVHkh7wtTDD79Gccn3Zx-ndl7aHfEXEXf1Avq6CoAgOQRTOpIf8352_dIZuI54IjV6nDF7t4r34aBeh3cJMUvaZmVggCFdvtskGkdbP2jEDB3SLqwwvwN8OZbGhQJOdwC7U7Csa4kAelc',
}

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        default:
            return state
    }
}

export default reducer