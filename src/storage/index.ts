import keys from "./namespace";
class Storage {
  set(name: string, data: any) {
    return localStorage.setItem(`${name}`, JSON.stringify(data));
  }
  get(name: string) {
    JSON.parse(localStorage.getItem(`${name}`) || "");
  }
  remove(name: string) {
    localStorage.removeItem(`${name}`);
  }
  removeAll() {
    localStorage.clear();
  }
  logOut() {
    if (typeof window === "undefined") {
      this.remove(keys.token);
      this.remove(keys.userInfo);
    }
  }
}
export default new Storage();
