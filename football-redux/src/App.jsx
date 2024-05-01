import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
} from "./redux/action";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

const App = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.football);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchDataRequest());

      try {
        const response = await fetch(
          "https://jsonmock.hackerrank.com/api/football_matches"
        );
        const jsonData = await response.json();
        dispatch(fetchDataSuccess(jsonData));
      } catch (error) {
        dispatch(fetchDataFailure(error.message));
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Competition</Th>
              <Th>Year</Th>
              <Th>Round</Th>
              <Th>Team 1</Th>
              <Th>Team 2</Th>
              <Th>Team 1 Goals</Th>
              <Th>Team 2 Goals</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.data &&
              data.data.map((team, index) => (
                <Tr key={index}>
                  <Td>{team.competition}</Td>
                  <Td>{team.year}</Td>
                  <Td>{team.round}</Td>
                  <Td>{team.team1}</Td>
                  <Td>{team.team2}</Td>
                  <Td>{team.team1goals}</Td>
                  <Td>{team.team2goals}</Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default App;
