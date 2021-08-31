import React, { useState, useEffect } from "react";
import {
  Show,
  SimpleShowLayout,
  TextField,
  DateField,
  ArrayField,
  Datagrid,
} from "react-admin";
import { useDataProvider, Loading, Error } from "react-admin";

export default function CompetitionShow(props) {
  console.log({ props });
  const dataProvider = useDataProvider();

  const [teams, setteams] = useState([]);

  useEffect(() => {
    onShowTeams();
  }, []);

  const onShowTeams = async () => {
    const res = await dataProvider.getList(`teams`, { id: props.id });
    console.log({ res });
    setteams(res.data);
  };

  return (
    <>
      <Show {...props}>
        <SimpleShowLayout>
          {/* <button onClick={onShowTeams}>Show teams</button> */}
          <TextField source="name" />
          {teams.map((team) => {
            return <div key={team.id}>{team.name}</div>;
          })}

          <ArrayField source="seasons">
            <Datagrid>
              <DateField source="startDate" />
              <DateField source="endDate" />
            </Datagrid>
          </ArrayField>
        </SimpleShowLayout>
      </Show>
    </>
  );
}
