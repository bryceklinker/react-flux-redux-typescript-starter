import { ActionCreatorsMapObject } from 'redux';

import { toggleNavigation } from './toggleNavigation';
import { closeNavigation } from './closeNavigation';

export { TOGGLE_NAVIGATION, IToggleNavigationAction } from './toggleNavigation';
export { CLOSE_NAVIGATION, ICloseNavigationAction } from './closeNavigation'

export const actions: ActionCreatorsMapObject = {
    toggleNavigation,
    closeNavigation
};
