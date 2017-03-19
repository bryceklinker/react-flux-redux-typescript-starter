import { IToggleNavigationAction } from '../actions';

export function toggleNavigationReducer(state: any = {}, action: IToggleNavigationAction) {
    return Object.assign({}, state, { isNavigationOpen: !state.isNavigationOpen });
}
