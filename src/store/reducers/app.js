const initState = {
    isShowRegisterModal:false,
    backShow:false,
    isShowMenu:false,
    isShowLoginsModal:false,
}

export default (state=initState, actions) => {
    switch(actions.type){
        case 'toggloMenuShow': 
            return {
                ...state,
                isShowMenu: actions.status,
                backShow: actions.status
        }
        case 'toggloRegisterModal':
            return {
                ...state,
                isShowRegisterModal: actions.status,
                backShow: actions.status
            }
        case 'toggloLoginModal':
            return {
                ...state,
                backShow: actions.status,
                isShowLoginsModal:actions.status,
            }
        default:
            return state;
    }
}