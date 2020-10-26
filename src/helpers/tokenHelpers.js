
export const get_login_token = () => {
    return localStorage.getItem('stashGuruToken');
}

export const set_login_token = (token) => {
    return localStorage.setItem('stashGuruToken', token);
}

export const remove_login_token = () => {
    localStorage.removeItem('stashGuruToken');
}