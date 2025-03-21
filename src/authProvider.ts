import { AuthProvider } from "react-admin";

export const authProvider: AuthProvider = {
    // Runs when user attempts to login
    login: ({ username, password }) => {
        if (username === 'admin' && password === 'password') {
            localStorage.setItem('Username', username); // Case-sensitive fix
            return Promise.resolve();
        } else {
            return Promise.reject(new Error('Invalid username or password'));
        }
    },
    logout: () => {
        // Remove username 
        localStorage.removeItem('Username');
        return Promise.resolve();
    },
    // Runs when API returns error
    checkError: ({ status }: { status: number }) => {
        if (status === 401 || status === 403) {
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // Runs when user navigates to a new location to check for auth
    checkAuth: () => {
        return localStorage.getItem('Username') !== null 
            ? Promise.resolve() 
            : Promise.reject(new Error('User not authenticated'));
    },
    // Runs when user navigates to a new location to check for permissions or rules
    getPermissions: () => Promise.resolve([]),
};
