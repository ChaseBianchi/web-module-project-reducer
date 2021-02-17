export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = 'CLEAR_DISPLAY'
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const ADD_TO_MEM = 'ADD_TO_MEM'
export const DISP_MEM = 'DISP_MEM'
export const CLEAR_MEM = 'CLEAR_MEM'

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operation) =>{
    return({type:CHANGE_OPERATION, payload:operation})
}

export const clearDisplay = ()=>{
    return({type:CLEAR_DISPLAY})
}

export const addToMem = (currentTotal)=>{
    return({type:ADD_TO_MEM, payload:currentTotal})
}

export const dispMem = (memoryState)=>{
    return({type:DISP_MEM, payload: memoryState})
}

export const clearMem = ()=>{
    return({type:CLEAR_MEM})
}