import { ExpansionPanelActions } from '@material-ui/core';
import {Action } from '../main/Action';
import {MainAction} from '../main/MainAction';

describe('Cards Action Test ', () => {
    it('Getting card data ', () => {
        const action=Action.Create(MainAction.GET_CARDS_DATA);
        expect(action).toEqual({
            type : MainAction.GET_CARDS_DATA
        });
    });
});

