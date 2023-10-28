import { getCookie } from "./cookie";

class Api {
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

  getIngradients() {
    return fetch(this._baseUrl + "/ingredients", {
      method: "GET",
      headers: this._headers,
    }).then(this._checkStatus);
  }

  addOrder(ingredientsObj) {
    return fetch(this._baseUrl + "/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
      body: JSON.stringify(ingredientsObj),
    }).then(this._checkStatus);
  }

  createUser(name, email, password) {
    return fetch(this._baseUrl + "/auth/register", {
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
    return fetch(this._baseUrl + "/auth/login", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then(this._checkStatus);
  }

  updateToken() {
    return fetch(this._baseUrl + "/auth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: getCookie("refreshToken"),
      }),
    }).then(this._checkStatus);
  }

  logoutUser() {
    return fetch(this._baseUrl + "/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: getCookie("refreshToken"),
      }),
    }).then(this._checkStatus);
  }

  getUser() {
    return fetch(this._baseUrl + "/auth/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
    }).then(this._checkStatus);
  }

  updateUser(name, email) {
    return fetch(this._baseUrl + "/auth/user", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    }).then(this._checkStatus);
  }

  forgotPassword(email) {
    return fetch(this._baseUrl + "/password-reset", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        email: email,
      }),
    }).then(this._checkStatus);
  }

  resetPassword(password, token) {
    return fetch(this._baseUrl + "/password-reset/reset", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        password: password,
        token: token,
      }),
    }).then(this._checkStatus);
  }
}

const api = new Api({
  baseUrl: "https://norma.nomoreparties.space/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;


