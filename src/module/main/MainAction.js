import { Action } from './Action';

class MainAction extends Action {
    // Action for getting app config data based on environment.
    static GET_CARDS_DATA = '@app/get-cards-data';
    static GET_PARTICULA_PRODUCT_DATA = '@app/get-particualar-product-data';

    static GET_CARDS_DATA_LOADIG= '@app/get-cards-data-loading';

    // Action for on succes of GET_CARDS_DATA
    static GET_CARDS_DATA_SUCCESS = '@app/get-cards-data-success';

    // Action for on error of GET_CARDS_DATA
    static GET_CARDS_DATA_ERROR = '@app/get-cards-data-error';
}

export { MainAction };
