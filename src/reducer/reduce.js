
function reduce(state,{type,payload}) {
    switch (type) {
        case "POST":{
            return{
                ...state,
                posts:payload
            }
        }    
        case "CATEGORY":{
            return{
                ...state,
                categories:payload
            }
        }    
        case "ID":{
            return{
                ...state,
                name:payload
            }
        }    
        case "CLICKLEFT":{
            if(state.isClickLeft){
                state.addClassSettings= 'cick_settings';
                state.addClassLeft= 'click_left';
            }else{
                state.addClassSettings= '';
                state.addClassLeft= '';
            }
            return{
                ...state,
                isClickLeft:!state.isClickLeft
            }
        }    
        // case "ID":{
        //     return{
        //         ...state,
        //         name:payload
        //     }
        // }    
        default:{
            return{
                ...state
            }
        }
           
    }
}

export default reduce;