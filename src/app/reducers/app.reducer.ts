import { IAction } from '../../shared';
import { CLOSE_NAVIGATION, TOGGLE_NAVIGATION } from '../actions';
import { closeNavigationReducer } from './closeNavigation.reducer';
import { toggleNavigationReducer } from './toggleNavigation.reducer';

const reducers = {
    [CLOSE_NAVIGATION]: closeNavigationReducer,
    [TOGGLE_NAVIGATION]: toggleNavigationReducer
};

export function appReducer(state = {}, action: IAction) {
    if (reducers.hasOwnProperty(action.type)) {
        return reducers[action.type](state, action);
    }
    return state;
}
