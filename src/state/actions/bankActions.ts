import { Action, ActionType } from ".";
import { Dispatch } from "redux";

export const deposit = (payload: number) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.DEPOSIT,
    payload,
  });
};

export const withdraw = (payload: number) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.WITHDRAW,
    payload,
  });
};

export const bankrupt = () => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.BANKRUPT,
  });
};
