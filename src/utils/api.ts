import { getCookie } from "./cookie";
import { TIngradientObj } from "./types";

class Api {
  private _baseUrl: string;

  constructor(url: string) {
    this._baseUrl = url;
  }

  _checkStatus(res: Response) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getIngradients() {
    return fetch(this._baseUrl + "/ingredients", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(this._checkStatus);
  }

  addOrder(ingredientsObj: Array<TIngradientObj>) {
    return fetch(this._baseUrl + "/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
      body: JSON.stringify(ingredientsObj),
    }).then(this._checkStatus);
  }

  createUser(name: string, email: string, password: string) {
    return fetch(this._baseUrl + "/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    }).then(this._checkStatus);
  }

  loginUser(email: string, password: string) {
    return fetch(this._baseUrl + "/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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

  updateUser(name: string, email: string) {
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

  forgotPassword(email: string) {
    return fetch(this._baseUrl + "/password-reset", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    }).then(this._checkStatus);
  }

  resetPassword(password: string, token: string) {
    return fetch(this._baseUrl + "/password-reset/reset", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: password,
        token: token,
      }),
    }).then(this._checkStatus);
  }
}

const api = new Api("https://norma.nomoreparties.space/api");

export default api;


