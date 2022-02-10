import React from "react";
import { Card, Button } from "react-bootstrap";

function VotingCard(props) {
  let { team, incrementVoteCount, voted } = props;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={`${team.LogoUrl}`} />
      <Card.Body>
        <Card.Title>{team.Name}</Card.Title>
        <Button disabled={voted} variant="success" onClick={() => incrementVoteCount(team.ID)}>
          Vote
        </Button>
      </Card.Body>
      <Card.Footer>Vote count: {team.Votes}</Card.Footer>
    </Card>
  );
}
export default VotingCard;