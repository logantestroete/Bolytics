import './App.css'
import { useQuery } from "@tanstack/react-query"
import Header from "./Components/Header"
import DivisionalStandings from './Components/DivisionalStandings';
import type { StandingsQueryResult } from './Tools/Types';

function App() {
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ['DivisionStandings'],
    queryFn: getDivisionStandings
  });

  if (isError) {
    return <div>{error.message}</div>
  }

  if (isLoading) {
    return <div>Currently Loading</div>
  }

  return (
    <>
      <Header />
      <DivisionalStandings standings={data?.records ?? []}/>
    </>
  )
}

const getDivisionStandings = async (): Promise<StandingsQueryResult> => {
  const response = await fetch("https://statsapi.mlb.com/api/v1/standings?leagueId=103,104&standingsTypes=regularSeason&season=2025&hydrate=team,league,division");
  return await response.json();
}

export default App