export const appConfig = {
  apiUrl: "https://maui-backend-app.herokuapp.com/",
  userPoolId:
    process.env.REACT_APP_COGNITO_USERPOOL_ID || "us-west-2_4zMJrFJnK",
  clientId:
    process.env.REACT_APP_COGNITO_CLIENT_ID || "7l29a5m9h54fcmg54urt8pg3gs",
  region: process.env.REACT_APP_COGNITO_REGION || "us-west-2",
  identityPoolId:
    process.env.REACT_APP_COGNITO_IDENTITYPOOL_ID ||
    "us-west-2:97b9ced9-fa08-4bc3-bb8d-7472e93803cc",
  limit: process.env.REACT_APP_GRID_PAGE_LIMIT || 10,
  smartyStreetAuthId: "976bb999-dcef-ae9b-0d5d-277754411d04",
  smartyStreetAuthToken: "32906422888838145",
  clientName: "MAUI",
  plaidEnv: "sandbox",
  plaidPubKey: "c1900d137da8bdbfb393fad8ab01b8",
  plaidProducts: ["transactions"],
  smartyStreetEnforce: false,
  hostUrl:
    "http://textapplyfrontend-hosting-mobilehub-2028011942.s3-website.us-west-2.amazonaws.com",
};
