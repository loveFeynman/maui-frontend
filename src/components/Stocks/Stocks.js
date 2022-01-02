import React from "react";
import { Menu as MenuIcon } from "@material-ui/icons";
import { Select, OutlinedInput, MenuItem, IconButton } from "@material-ui/core";
// styles
import useStyles from "./styles";
import TrendItem from "../TrendItem/TrendItem";
const watchLists = [
  {
    img: "apple",
    title: "mAAPL",
    subTitle: "Apple Inc.",
    trendingRate: 1.32,
  },
  {
    img: "airbnb",
    title: "mABNB",
    subTitle: "Airbnb Inc.",
    trendingRate: 1.32,
  },
  {
    img: "amd",
    title: "mAMD",
    subTitle: "AMD Inc.",
    trendingRate: 1.32,
  },
  {
    img: "amazon",
    title: "mAMZN",
    subTitle: "Amazon.com Inc.",
    trendingRate: 1.32,
  },
  {
    img: "ark",
    title: "mARKK",
    subTitle: "Ark Innovation ETF",
    trendingRate: 1.32,
  },
  {
    img: "alibaba",
    title: "mBABA",
    subTitle: "Alibaba Holding",
    trendingRate: 1.32,
  },
  {
    img: "bitcoin",
    title: "mBTC",
    subTitle: "Bitcoin",
    trendingRate: 1.32,
  },
  {
    img: "coinbase",
    title: "mCOIN",
    subTitle: "Coinbase Inc.",
    trendingRate: 1.32,
  },
];

function Stocks() {
  var classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <div
          style={{
            fontSize: 30,
            fontWeight: "bold",
            letterSpacing: "0.015em",
          }}
        >
          Stocks
        </div>
        <IconButton aria-label="icon">
          <MenuIcon />
        </IconButton>
      </div>
      <div className={classes.subtitle}>
        <div
          style={{
            fontSize: 20,
            letterSpacing: "0.015em",
          }}
        >
          Watchlist
        </div>
        <Select
          value="Trending"
          input={
            <OutlinedInput
              labelWidth={0}
              classes={{
                notchedOutline: classes.mainChartSelectRoot,
                input: classes.mainChartSelect,
              }}
            />
          }
        >
          <MenuItem value="Trending">Trending</MenuItem>
          <MenuItem value="Trending">Trending</MenuItem>
          <MenuItem value="Trending">Trending</MenuItem>
        </Select>
      </div>
      <div className={classes.watchLists}>
        {watchLists.map((mockItem, mockIndex) => {
          return <TrendItem key={mockIndex} data={mockItem} />;
        })}
      </div>
    </div>
  );
}
export default Stocks;
