import React from "react";
import { useDispatch } from "react-redux";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { useWallet, WalletStatus } from "@terra-money/wallet-provider";
// components
import Layout from "./Layout";
// pages
import Error from "../pages/error";

export default function App() {
  // const isAuthenticated = true;
  const dispatch = useDispatch();
  const {
    status,
    wallets,
  } = useWallet();
  React.useEffect(() => {
    if (status === WalletStatus.WALLET_CONNECTED) {
      dispatch({
        type: "WALLET_ADDRESS",
        payload: wallets[0].terraAddress,
      });
    }
  });
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app" />} />
        <Route path="/app" component={Layout} />
        <Route component={Error} />
      </Switch>
    </HashRouter>
  );

  // #######################################################################

  // function PrivateRoute({ component, ...rest }) {
  //   return (
  //     <Route
  //       {...rest}
  //       render={(props) =>
  //         isAuthenticated ? (
  //           React.createElement(component, props)
  //         ) : (
  //           <Redirect
  //             to={{
  //               pathname: "/login",
  //               state: {
  //                 from: props.location,
  //               },
  //             }}
  //           />
  //         )
  //       }
  //     />
  //   );
  // }

  // function PublicRoute({ component, ...rest }) {
  //   return (
  //     <Route
  //       {...rest}
  //       render={(props) =>
  //         isAuthenticated ? (
  //           <Redirect
  //             to={{
  //               pathname: "/",
  //             }}
  //           />
  //         ) : (
  //           React.createElement(component, props)
  //         )
  //       }
  //     />
  //   );
  // }
}
