import './App.css'
import { useQuery } from "@tanstack/react-query"
import Header from "./Components/Header"
import type { StandingsQueryResult } from './Tools/Types';

function App() {
  const { data } = useQuery({
    queryKey: ['DivisionStandings'],
    queryFn: getDivisionStandings
  });

  return (
    <>
      <Header />
      <div>{JSON.stringify(data?.records[0].teamRecords[0].team.name)}</div>
    </>
  )
}

const getDivisionStandings = async (): Promise<StandingsQueryResult> => {
  const response = await fetch("https://statsapi.mlb.com/api/v1/standings?leagueId=103,104&standingsTypes=regularSeason&season=2025&hydrate=team,league,division");
  return await response.json();
}

export default App