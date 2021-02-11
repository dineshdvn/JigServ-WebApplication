const dataReducer = (state = [],action) => {
    console.log(4)
    switch(action.type){
        
        case 'allcategories': 
            return action.payload
        case 'innovation': 
            return action.payload
        case 'digitaltransformation':
            return action.payload
        case 'financefintech':
            return action.payload
        default  :
                return state
    }
}

export default dataReducer