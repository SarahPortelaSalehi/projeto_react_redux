
const initialState = {
    active: null,
    list: [
        'Pedro',
        'Carlos',
        'Jorge',
        'Luciano',
        'Alex'
    ]
}

const usuariosReducer = (state = initialState.usuarios, action) => {
    if(action.type === 'CHANGE_USER'){
        return {
            ...state,
            active: action.payload
        }
    }
    return state;
}

export default usuariosReducer;