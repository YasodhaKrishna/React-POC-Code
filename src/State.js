import { combineReducers } from 'redux';

import { MainState } from './module/main/MainState';

/**
 * ...
 * It is Responsible to define the Main Reducer and
 * provide the initial state.
 * @author
 */
class State {
    /**
     * Specify how the application's state changes in response to actions sent to the store.
     * @param {object} history
     * @returns {object} state
     */
    static Reducer() {
        return combineReducers({
            mainState: MainState.Reducer
        });
    }
}

export { State };
