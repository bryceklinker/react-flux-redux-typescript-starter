import {IAction} from '../../shared';
export const CLOSE_NAVIGATION = 'CLOSE_NAVIGATION';

export interface ICloseNavigationAction extends IAction {

}

export function closeNavigation(): ICloseNavigationAction {
    return { type: CLOSE_NAVIGATION };
}
