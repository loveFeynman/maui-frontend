import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

import Themes from "./themes";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { LayoutProvider } from "./context/LayoutContext";
import { UserProvider } from "./context/UserContext";
import { getChainOptions, WalletProvider } from "@terra-money/wallet-provider";

import store from "./store";

getChainOptions().then((chainOptions) =>
  ReactDOM.render(
    <Provider store={store}>
      <LayoutProvider>
        <UserProvider>
          <ThemeProvider theme={Themes.default}>
            <CssBaseline />
            <WalletProvider>
              <App />
            </WalletProvider>
          </ThemeProvider>
        </UserProvider>
      </LayoutProvider>
    </Provider>,
    document.getElementById("root"),
  ),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
