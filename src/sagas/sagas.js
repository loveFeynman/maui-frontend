import { takeEvery, put, call, all } from "redux-saga/effects";
import request from "../common/fetch";
import { fetchBalance } from "../wallet";
function* callLogin(action) {
  yield call(
    request({
      type: "LOGIN",
      method: "post",
      url: "login",
    }),
    action,
  );
}
function* callRegister(action) {
  yield call(
    request({
      type: "REGISTER",
      method: "post",
      url: "register",
    }),
    action,
  );
}
function* callWallet(action) {
  yield call(
    request({
      type: "WALLET_CONTROL",
      method: "post",
      url: "wallet/walletcontrol",
    }),
    action,
  );
}
function* callUserInfo() {
  yield call(
    request({
      type: "GET_USER",
      method: "get",
      url: "/token",
    }),
  );
}
function walletInfoAction(action) {
  return fetchBalance(action);
}
function* callWalletInfo(action) {
  try {
    const result = yield call(walletInfoAction, action.payload);
    console.log("result", result);
    yield put({ type: "GET_WALLET_INFO_SUCCESS", payload: result });
  } catch (err) {
    yield put({ type: "GET_WALLET_INFO_FAILURE" });
  }
}
function* somethingSaga() {
  yield takeEvery("LOGIN_REQUEST", callLogin);
  yield takeEvery("REGISTER_REQUEST", callRegister);
  yield takeEvery("WALLET_CONTROL", callWallet);
  yield takeEvery("WALLET_INFO", callWalletInfo);
  yield takeEvery("GET_USER", callUserInfo);
}

export default function* mySaga() {
  yield all([somethingSaga()]);
}
