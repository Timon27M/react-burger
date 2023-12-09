import {
  GET_RESET_PASSWORD_PAGE,
} from "../actions/reset-password";

import resetPasswordReducer from "./reset-password";

describe("reset-password", () => {

    const initialState = {
        isOpenResetPasswordPage: false,
      };

    test("test initial state", () => {
        expect(resetPasswordReducer(undefined, {})).toEqual(initialState);
      });

      test('get reset-password page', () => {
        const action = { type: GET_RESET_PASSWORD_PAGE, payload: true }
        expect(resetPasswordReducer(initialState, action)).toEqual({
            ...initialState,
            isOpenResetPasswordPage: true,
        })
      })
})
