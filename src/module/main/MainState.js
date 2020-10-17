import { MainAction } from './MainAction';

class MainState {
    static InitialState = {
        productData: {
            loading: false,
            data: null,
            error: false
        },
        productDetail: null
    };

    static Reducer(state = MainState.InitialState, action) {
        switch (action.type) {
            case MainAction.GET_PARTICULA_PRODUCT_DATA:
                return {
                    ...state,
                    productDetail: action.payload.product
                };
            
            case MainAction.GET_CARDS_DATA_LOADING:
                return {
                    ...state,
                    productData:  {
                        loading: true,
                        data: null,
                        error: false
                    }
                };
            case MainAction.GET_CARDS_DATA_SUCCESS:
                return {
                    ...state,
                    productData:  {
                        loading: false,
                        data: action.payload.data,
                        error: false
                    }
                };
            default:
                return {
                    ...state
                };
        }
    }
}

export { MainState };
