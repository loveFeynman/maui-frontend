import React from "react";
import { Drawer, IconButton, List } from "@material-ui/core";
import { Clear as ClearIcon } from "@material-ui/icons";
import classNames from "classnames";
import { useSelector } from "react-redux";

// styles
import useStyles from "./styles";
import maui from "../../images/MAUI.png";
import help from "../../images/help.png";
import telegramletter from "../../images/telegramletter.png";
// components
import SidebarLink from "./components/SidebarLink/SidebarLink";

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";

const structure = [
  { id: 0, label: "Dashboard" },
  { id: 1, label: "Earn" },
  { id: 2, label: "Borrow" },
  { id: 3, label: "Stocks" },
  { id: 4, label: "Cards" },
  { id: 5, label: "Settings" },
];

function Sidebar() {
  var classes = useStyles();
  var { isSidebarOpened } = useLayoutState();
  var layoutDispatch = useLayoutDispatch();
  const isPermanent = useSelector((state) => state.sidebar.isDefault);
  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.opened}>
        <div className={classes.toolbar}>
          <img src={maui} alt="MAUI" />
        </div>

        <List className={classes.sidebarList}>
          {structure.map((link) => (
            <SidebarLink
              key={link.id}
              isSidebarOpened={isSidebarOpened}
              {...link}
            />
          ))}
        </List>
      </div>
      {!isPermanent && (
        <div className={classes.tools}>
          <div className={classes.mobileBackButton}>
            <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
              <ClearIcon
                classes={{
                  root: classNames(
                    classes.headerIcon,
                    classes.headerIconCollapse,
                  ),
                }}
              />
            </IconButton>
            <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
              <img src={help} alt="help" />
            </IconButton>
            <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
              <img src={telegramletter} alt="telegram" />
            </IconButton>
          </div>
        </div>
      )}
    </Drawer>
  );
}

export default Sidebar;
