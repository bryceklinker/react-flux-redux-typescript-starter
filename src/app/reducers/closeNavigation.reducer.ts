import { ICloseNavigationAction } from '../actions';

export function closeNavigationReducer(state = {}, action: ICloseNavigationAction) {
    return Object.assign({}, state, { isNavigationOpen: false });
}
