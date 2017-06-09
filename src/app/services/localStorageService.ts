
export class LocalStorageService {

    has(key: string): boolean {
        return localStorage.getItem(key) !== null;
    }

    get(key: string): string {
        return localStorage.getItem(key);
    }

    set(key: string, data: any): void {
        localStorage.setItem(key, data);
    }

}