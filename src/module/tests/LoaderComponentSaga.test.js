import {runSaga} from 'redux-saga';
import {MainSaga} from '../main/MainSaga';
import {MainAction} from '../main/MainAction';
import {MainService} from '../main/MainService';

import {mockDataProps} from '../mocks/mockData.js';

describe('Card Saga Test', () => {
    let mockData;
    beforeEach(() => {
        mockData={... mockDataProps};
        jest.resetAllMocks();
    });
});

describe(' Get card data test ', () => {
    MainService.GetCardsData = jest.fn();

    it('API call success ', () => {
        const response={...mockData};
        const result= {
data: response.GetCardsData,
status : 200
        };
    });
});