type Age = number

type AgeAction = {
    type: 'INCREASE' | 'DECREASE'
}
export const ageReducer = (state: Age, action: AgeAction) => {

    switch (action.type) {
        case 'INCREASE':
            return state += 10
        case 'DECREASE':
            return state -= 10
    }

    return state
}