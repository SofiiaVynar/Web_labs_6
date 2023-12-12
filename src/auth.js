export const login = (email, password) => {
    const savedEmail = localStorage.getItem('userEmail');
    const savedPassword = localStorage.getItem('userPassword');
    return email === savedEmail && password === savedPassword;
};

export const register = (userData) => {
    const { email, password } = userData;
    if (email && password) {
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);
        return true;
    }
    return false;
};


export const logout = () => {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userPassword');
};


export const isAuthenticated = () => {
    const userEmail = localStorage.getItem('userEmail');
    const userPassword = localStorage.getItem('userPassword');

    const hasCredentials = !!userEmail && !!userPassword;
    return hasCredentials;
};