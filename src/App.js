import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import VotingCard from "./components/VotingCard";
import teamsJson from "./vote_store/votedata.json";
import "./assets/scss/styles.scss";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  let [teams, setTeams] = useState([]);
  let [voted, setVoted] = useState(false);

  useEffect(() => {
    setTeams(teamsJson);
    setVoted(false);
    getVoting();
  }, []);

  function incrementVoteCount(teamId) {
    vote(teamId);
  }

  function vote(teamId) {

    // Simple PUT request with a JSON body using fetch
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' }
      // body: JSON.stringify({ title: 'React PUT Request Example' })
    };

    fetch('http://localhost:8080/vote/'.concat(teamId), requestOptions)
      .then(response => {
        return response.text()
      })
      .then((data) => {
        var voteData = data ? JSON.parse(data) : {};
        if(voteData.status === 'success') {
          setVoted(true);
          getVoting();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function getVoting() {
    fetch('http://localhost:8080/voting')
      .then(response => {
        return response.text()
      })
      .then((data) => {
        setTeams(data ? JSON.parse(data) : {})
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <Container className="app">
      <Row>
        {teams.map((team) => {
          return (
            <Col md={4}>
              <VotingCard
                team={team}
                incrementVoteCount={(teamId) => incrementVoteCount(teamId)}
                voted={voted}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
export default App;