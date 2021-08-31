import React from "react";
import { List, Datagrid, TextField, NumberField, DateField } from "react-admin";

export default function CompetitionList(props) {
  console.log({ props });

  return (
    <List {...props}>
      <Datagrid rowClick="show">
        <TextField source="name" />
        <TextField source="code" />
        <DateField source="lastUpdated" />
      </Datagrid>
    </List>
  );
}
