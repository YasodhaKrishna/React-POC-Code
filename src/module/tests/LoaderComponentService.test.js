import {MainService} from '../main/MainService';

describe ('Card Loader Service ', () => {

    it('It should return response ', () => {
    
        const service=MainService.GetCardsData(props);
        const url = `https://mobile-tha-server-8ba57.firebaseapp.com/walmartproducts/${params.num}/${params.size}`;
       
       expect(service).toBeInstanceOf(Promise);
    });

    });

   


    it('It should return response of a card', () => {
    
        const service=MainService.GetCardsData();
       
       expect(service).toBeInstanceOf(Promise);
    });

 

  