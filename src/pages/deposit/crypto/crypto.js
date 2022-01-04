import React from "react";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { useWallet, WalletStatus } from "@terra-money/wallet-provider";
import FetchModal from "./components/FetchModal";
import Modal from "@material-ui/core/Modal";
export default function Crypto(props) {
  var classes = useStyles();
  const accAddress = useSelector((state) => state.user.user.accAddress);
  const [open, setOpen] = React.useState(false);
  const {
    connect,
    status,
    availableConnectTypes,
    availableInstallTypes,
    install,
    disconnect,
    wallets,
  } = useWallet();

  const handleOpen = (event) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  console.log("availableConnectTypes", availableConnectTypes);
  return (
    <div className={classes.tabBody}>
      <div className={classes.boxtitle}>
        Connect to your wallet and deposit UST from it.
      </div>

      <div style={{ textAlign: "center" }}>
        {status === WalletStatus.WALLET_NOT_CONNECTED && (
          <>
            {availableInstallTypes.map((connectType) => (
              <Button
                variant="contained"
                color="primary"
                key={"install-" + connectType}
                className={classes.confirmbutton}
                onClick={() => install(connectType)}
              >
                Install Wallet
              </Button>
            ))}
            {availableConnectTypes.map(
              (connectType) =>
                connectType === "EXTENSION" && (
                  <Button
                    variant="contained"
                    color="primary"
                    key={"connect-" + connectType}
                    className={classes.confirmbutton}
                    onClick={() => connect(connectType)}
                  >
                    Connect Wallet
                  </Button>
                ),
            )}
          </>
        )}
        {status === WalletStatus.WALLET_CONNECTED && (
          <Button
            variant="contained"
            color="primary"
            className={classes.confirmbutton}
            onClick={() => disconnect()}
          >
            Disconnect
          </Button>
        )}
        {status === WalletStatus.INITIALIZING && (
          <Button
            variant="contained"
            color="primary"
            className={classes.confirmbutton}
            disabled={true}
          >
            Initializing...
          </Button>
        )}
        {status === WalletStatus.WALLET_CONNECTED && (
          <Button
            variant="contained"
            color="primary"
            className={classes.confirmbutton}
            onClick={handleOpen}
          >
            Fetch
          </Button>
        )}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div>
            <FetchModal userWallet={wallets[0]} to={accAddress} />
          </div>
        </Modal>
      </div>
    </div>
  );
}
