import { IAction } from '../../shared';

export const TOGGLE_NAVIGATION = 'TOGGLE_NAVIGATION';

export interface IToggleNavigationAction extends IAction {
}

export function toggleNavigation(): IToggleNavigationAction {
    return { type: TOGGLE_NAVIGATION };
}
