import axios from 'axios';
import { config } from '../config/config';

const requestConfig = {
    'Content-Type': 'application/json'
};


export const get_login_token = () => {
    return localStorage.getItem('stashGuruToken');
}

export const set_login_token = (token) => {
    return localStorage.setItem('stashGuruToken', token);
}

export const remove_login_token = () => {
    localStorage.removeItem('stashGuruToken');
}


export const validateClientToken = async () => {

    try {

        if (localStorage.getItem('stashGuruToken')) {

            let responseData = await axios.post(`${config.apiUrl}/front/users/details`, { token: localStorage.getItem('stashGuruToken').replace(/["']/g, "") }, requestConfig);

            if (responseData.data.status) {
                return localStorage.getItem('stashGuruToken').replace(/["']/g, "");
            }
            else {

                let redirectURL = `/signup?redirect_url=${encodeURIComponent(window.location.href)}`;
                window.location.href = redirectURL;
            }


        }
        else {
            let redirectURL = `/signup?redirect_url=${encodeURIComponent(window.location.href)}`;
            window.location.href = redirectURL;

        }

    }
    catch (error) {

        let redirectURL = `/signup?redirect_url=${encodeURIComponent(window.location.href)}`;
        window.location.href = redirectURL;

    }



}

