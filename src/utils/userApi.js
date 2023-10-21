import { getCookie } from "./cookie";

class UserApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkStatus(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  createUser(name, email, password) {
    return fetch(this._baseUrl + "/register", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    }).then(this._checkStatus);
  }

  loginUser(email, password) {
    return fetch(this._baseUrl + "/login", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then(this._checkStatus);
  }

  updateToken() {
    return fetch(this._baseUrl + "/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: getCookie("refreshToken"),
      },
    }).then(this._checkStatus);
  }

  logoutUser() {
    return fetch(this._baseUrl + "/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        'token': getCookie("refreshToken")
      })
    }).then(this._checkStatus);
  }

  getUser() {
    return fetch(this._baseUrl + "user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
    }).then(this._checkStatus);
  }

  updateUser(name, email) {
    return fetch(this._baseUrl + "user", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
      body: JSON.stringify({
        name: name,
        email: email,
      })
    }).then(this._checkStatus);
  }
}

const userApi = new UserApi({
  baseUrl: "https://norma.nomoreparties.space/api/auth",
  headers: {
    "Content-Type": "application/json",
  },
});

export default userApi;
