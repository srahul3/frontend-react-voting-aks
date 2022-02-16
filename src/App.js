import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import VotingCard from "./components/VotingCard";
import teamsJson from "./vote_store/votedata.json";
import "./assets/scss/styles.scss";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  let [teams, setTeams] = useState([]);
  let [voted, setVoted] = useState(false);

  const { NODE_VOTING_BE_SVC_SERVICE_HOST } = process.env;
  const { NODE_VOTING_BE_SVC_SERVICE_PORT_HTTP } = process.env;
  
  var backendUrl = "http://" + NODE_VOTING_BE_SVC_SERVICE_HOST + ":" + NODE_VOTING_BE_SVC_SERVICE_PORT_HTTP;

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

    fetch(backendUrl.concat('/vote/'.concat(teamId)), requestOptions)
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
    fetch(backendUrl.concat('/voting'))
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
      <div className="banner">Predict a winning team</div>
      <br></br>
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
      <br></br>
      { voted ? <div className="foot">You have finished voting!</div> : null }      
    </Container>
  );
}
export default App;