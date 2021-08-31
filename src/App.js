import * as React from "react";
import { Admin, Resource, ListGuesser, fetchUtils } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./users";
import { PostList, PostEdit, PostCreate } from "./posts";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import Dashboard from "./Dashboard";
import authProvider from "./authProvider";
import dataProvider from "./dataProvider";
import CompetitionList from "./Resources/Competitions/CompetitionList";
import CompetitionShow from "./Resources/Competitions/CompetitionShow";

// const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

import simpleRestProvider from "ra-data-simple-rest";

// const fetchJson = (url, options = {}) => {
//   if (!options.headers) {
//     options.headers = new Headers({
//       Accept: "application/json",
//       "X-Auth-Token": process.env.API_KEY,
//     });
//   }

//   return fetchUtils.fetchJson(url, options);
// };
// const dataProvider = simpleRestProvider(
//   "https://api.football-data.org/v2/",
//   fetchJson
// );

const App = () => (
  <Admin
    dashboard={Dashboard}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource
      name="competitions"
      list={CompetitionList}
      show={CompetitionShow}
    />

    <Resource name="Premier League Team" list={ListGuesser} />

    {/* <Resource name="teams" list={ListGuesser} /> */}
    {/* <Resource name="teams/:id" list={ListGuesser} /> */}
    {/* <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />
    <Resource name="users" list={UserList} icon={UserIcon} /> */}
  </Admin>
);
export default App;
