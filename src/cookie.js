export function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days || 0) * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value || ''}; expires=${date.toUTCString()}; path=/`;
}

export function getCookie(name) {
    const nameEQ = `${name}=`;
    const cookies = document.cookie.split(';').map(c => c.trim());
    const cookie = cookies.find(c => c.startsWith(nameEQ));
    return cookie ? cookie.substring(nameEQ.length) : null;
}