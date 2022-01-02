import React from "react";
import { Avatar, Button } from "@material-ui/core";

import logo from "../../images/logo";

export default function Eachstock({ color = "primary", ...props }) {
  const {
    img,
    title,
    subtitle,
    teraprice,
    oraprice,
    premium,
    mincol,
  } = props.data;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: 106,
        alignItems: "center",
        padding: 20,
        borderBottom: "1px solid #D2D2D2",
        textAlign: "center",
        fontSize: 16,
      }}
    >
      <div
        style={{
          width: "20%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Avatar
          style={{
            width: 45,
            height: 45,
            background: "black",
            marginRight: 10,
          }}
          alt={img}
          src={logo[img]}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 600 }}>{title}</div>
          <div>{subtitle}</div>
        </div>
      </div>
      <div style={{ width: "13%" }}>
        <span style={{ fontWeight: "bold" }}>{teraprice} </span>UST
      </div>
      <div style={{ width: "12%" }}>
        <span style={{ fontWeight: "bold" }}>{oraprice} </span>UST
      </div>
      <div style={{ width: "12%" }}>
        <span style={{ fontWeight: "bold" }}>{premium} %</span>
      </div>
      <div style={{ width: "13%" }}>
        <span style={{ fontWeight: "bold" }}>{mincol} %</span>
      </div>
      <div
        style={{
          width: "30%",
          display: "flex",
          justifyContent: "space-around",
          padding: 20,
        }}
      >
        <Button
          style={{
            background:
              "linear-gradient(96.31deg, #A3D8F5 3.54%, #62B8E8 77.74%)",
            color: "white",
            width: 83,
            height: 42,
            borderRadius: 8,
            boxShadow: "2px 4px 10px 0px #0000001A -2px -4px 4px 0px #FFFFFF66",
            fontSize: 12,
          }}
        >
          BUY
        </Button>
        <Button
          style={{
            background: "#F5EC95",
            color: "black",
            width: 83,
            height: 42,
            borderRadius: 8,
            fontSize: 12,
            boxShadow: "2px 4px 10px 0px #0000001A -2px -4px 4px 0px #FFFFFF66",
          }}
        >
          SELL
        </Button>
        <Button
          style={{
            background: "white",
            color: "black",
            width: 83,
            height: 42,
            borderRadius: 8,
            boxShadow: "2px 4px 10px 0px #0000001A -2px -4px 4px 0px #FFFFFF66",
            fontSize: 12,
          }}
        >
          NEUTRAL
        </Button>
      </div>
    </div>
  );
}
