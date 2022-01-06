import { takeEvery, put, call, all } from "redux-saga/effects";
import request from "../common/fetch";
import { fetchBalance } from "../wallet";
function* callLogin(action) {
  console.log("saga", action);
  yield call(
    request({
      type: "GET_USER",
      method: "post",
      url: "login",
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
  yield takeEvery("GET_USER_REQUEST", callLogin);
  yield takeEvery("WALLET_CONTROL", callWallet);
  yield takeEvery("WALLET_INFO", callWalletInfo);
}

export default function* mySaga() {
  yield all([somethingSaga()]);
}
