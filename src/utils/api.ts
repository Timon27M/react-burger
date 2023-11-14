import { getCookie } from "./cookie";
import {
  TIngradientObj,
  TIngredients,
  TOrderAdd,
  TUserCreate,
  TUserLogin,
  TUpdateToken,
  TMessageResponse,
  TGetUser,
} from "./types";

class Api {
  private _baseUrl: string;

  constructor(url: string) {
    this._baseUrl = url;
  }

  _checkStatus<T>(res: Response): Promise<T> {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getIngradients(): Promise<TIngredients> {
    return fetch(this._baseUrl + "/ingredients", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => this._checkStatus<TIngredients>(res));
  }

  addOrder(ingredientsObj: Array<TIngradientObj>): Promise<TOrderAdd> {
    return fetch(this._baseUrl + "/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
      body: JSON.stringify(ingredientsObj),
    }).then((res) => this._checkStatus<TOrderAdd>(res));
  }

  createUser(
    name: string,
    email: string,
    password: string
  ): Promise<TUserCreate> {
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
    }).then((res) => this._checkStatus<TUserCreate>(res));
  }

  loginUser(email: string, password: string): Promise<TUserLogin> {
    return fetch(this._baseUrl + "/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then((res) => this._checkStatus<TUserLogin>(res));
  }

  updateToken(): Promise<TUpdateToken> {
    return fetch(this._baseUrl + "/auth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: getCookie("refreshToken"),
      }),
    }).then((res) => this._checkStatus<TUpdateToken>(res));
  }

  logoutUser(): Promise<TMessageResponse> {
    return fetch(this._baseUrl + "/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: getCookie("refreshToken"),
      }),
    }).then((res) => this._checkStatus<TMessageResponse>(res));
  }

  getUser(): Promise<TGetUser> {
    return fetch(this._baseUrl + "/auth/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
    }).then((res) => this._checkStatus<TGetUser>(res));
  }

  updateUser(name: string, email: string): Promise<TGetUser> {
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
    }).then((res) => this._checkStatus<TGetUser>(res));
  }

  forgotPassword(email: string): Promise<TMessageResponse> {
    return fetch(this._baseUrl + "/password-reset", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    }).then((res) => this._checkStatus<TMessageResponse>(res));
  }

  resetPassword(password: string, token: string): Promise<TMessageResponse> {
    return fetch(this._baseUrl + "/password-reset/reset", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: password,
        token: token,
      }),
    }).then((res) => this._checkStatus<TMessageResponse>(res));
  }
}

const api = new Api("https://norma.nomoreparties.space/api");

export default api;
