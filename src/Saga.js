import { takeLatest, takeEvery } from 'redux-saga/effects';

import { MainAction } from './module/main/MainAction';
import { MainSaga } from './module/main/MainSaga';
/**
 * ...
 * This class consists of static method that works as a watcher.
 * @author
 */
class Saga {
    /**
     * @generator
     * watcher saga: watches for actions dispatched to the store, starts worker saga
     */
    static *GetWatcher() {
        yield takeLatest(
            MainAction.GET_CARDS_DATA,
            MainSaga.GetCardsData
        );
    }
}

export { Saga };
