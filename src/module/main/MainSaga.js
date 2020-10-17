import { put, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { MainAction } from './MainAction';
import { MainService } from './MainService';
import { Action } from './Action';

export class MainSaga {
    static *GetCardsData(postBody) {
        try {
            const res = yield call(MainService.GetCardsData, {
                num: postBody.payload.num,
                size: postBody.payload.size
            });
            if (res.status >= 200 && res.status < 300) {
                // Dispatch a success action to store with the data
                const action = Action.Create(MainAction.GET_CARDS_DATA_SUCCESS, {
                    data: res.data
                });

                yield put(action);
            } else {
                throw res.error;
            }
        } catch (error) {
            // Dispatch a failure action to store with error
            const action = Action.Create(MainAction.GET_CARDS_DATA_ERROR, {
                error
            });
            yield put(action);
        }
    }
}
