export default (state,action) =>{
    switch(action.type){
        case 'DELETE_TRANSECTION':
            return{
                ...state,
                transections: state.transections.filter(transection => transection.id !== action.payload)
            }
        default:
            return state;
    }
}