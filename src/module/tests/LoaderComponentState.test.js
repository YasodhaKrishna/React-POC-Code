import {MainService} from '../main/MainService';
import {runSaga} from 'redux-saga';
import {MainSaga} from '../main/MainSaga';
import {MainAction} from '../main/MainAction';


import {mockDataProps} from '../mocks/mockData.js';
import { ExpansionPanelActions } from '@material-ui/core';

describe('Card state test ', () => {
    let initalState={};
    beforeEach(() => {
        initalState={...mockDataProps};
    });
});

describe('List data ', () => {
it('On Data Success ', () => {
    const Action=MainAction.Create(
        MainAction.GET_CARDS_DATA,
        {listData : initalState.listData.listData}

    );

    const newState=MainState.Reducer(initalState,action);
    expect(newState.listData).toBeDefined();

});
});
