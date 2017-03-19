import * as expect from 'expect';

import { appReducer } from './app.reducer';
import { actions } from '../actions';

describe('appReducer', () => {
    it('should open navigation on toggle navigation', () => {
        const initialState = {};
        const action = actions.toggleNavigation();

        const newState = appReducer(initialState, action);
        expect(newState).toEqual({
            isNavigationOpen: true
        });
    });

    it('should close navigation on toggle navigation', () => {
        const initialState = { isNavigationOpen: true};
        const action = actions.toggleNavigation();

        const newState = appReducer(initialState, action);
        expect(newState).toEqual({
            isNavigationOpen: false
        });
    });

    it('should close navigation on close navigation', () => {
        const initialState = { isNavigationOpen: true};
        const action = actions.closeNavigation();

        const newState = appReducer(initialState, action);
        expect(newState).toEqual({
            isNavigationOpen: false
        });
    })
});