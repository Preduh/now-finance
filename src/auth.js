export const isAuthenticated = () => {
    return !!localStorage.getItem('TOKEN')
}