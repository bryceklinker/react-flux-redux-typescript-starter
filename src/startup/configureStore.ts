import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

import { rootReducer } from './index.reducer';

export const INITIAL_STATE = {
    app: {
        isNavigationOpen: false
    },
    courses: []
};

export function configureStore(initialState = INITIAL_STATE) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(reduxImmutableStateInvariant()),
    );
}
