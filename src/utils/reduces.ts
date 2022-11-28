export const inititalState = {
    token: null
}

interface IAction {
    type: string
}

const reducer = (state = inititalState, action: IAction) => {
    switch(action.type) {
        

        default: 
            return state
    }
}

export default reducer