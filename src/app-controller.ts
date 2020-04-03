import axios from 'axios';
import { auth } from './components/auth/auth';

// TODO: FIX
// export default class AppController {
   
//     /**
//      * getUser
//      */
//     public getUser(): Promise<auth.User> {
//         return axios.get('/auth/me')
//             .then(res => res.data);
//     }
// }

export function getUser(): Promise<auth.User> {
    return axios.get('/auth/me')
        .then(res => res.data);
}