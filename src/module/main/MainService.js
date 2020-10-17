import Axios from 'axios';

export class MainService {

    static GetCardsData(params) {
        const url = `https://mobile-tha-server-8ba57.firebaseapp.com/walmartproducts/${params.num}/${params.size}`;

        const headers = {
            'Content-Type': 'application/json'
        };

        return Axios.get(url, { headers });
    }
}
