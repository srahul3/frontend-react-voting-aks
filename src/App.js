import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import VotingCard from "./components/VotingCard";
import teamsJson from "./vote_store/votedata.json";
import "./assets/scss/styles.scss";
import "bootstrap/dist/css/bootstrap.css";
import configData from "./config.json";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let [teams, setTeams] = useState([]);
  let [voted, setVoted] = useState(false);
  
  /**
   * Backend server base URL
   */
  var backendUrl = configData.BACKEND_URL;

  useEffect(() => {
    setTeams(teamsJson);
    setVoted(false);
    // Init the state from backend
    getVoting();
  }, []);

  /**
   * The method send update request to increment the vode for a given candiate by callin gbackend sever
   * @param { A unique candiate id whome you are voting for} teamId 
   */ 
  function incrementVoteCount(teamId) {
    vote(teamId);
  }

  function vote(teamId) {

    // Simple PUT request with a JSON body using fetch
    const requestOptions = {
      method: 'PATCH',
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

          // Fetch the latest data
          getVoting();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  /**
   * Gets the candidate date to be displayed
   */
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