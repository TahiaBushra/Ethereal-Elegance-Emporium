export const updateLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}