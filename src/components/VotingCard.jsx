import React from "react";
import { Card, Button } from "react-bootstrap";

function VotingCard(props) {
  let { team, incrementVoteCount, voted } = props;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={`${team.logoUrl}`} />
      <Card.Body>
        <Card.Title>{team.name}</Card.Title>
        <Button disabled={voted} variant="success" onClick={() => incrementVoteCount(team.id)}>
          Vote
        </Button>
      </Card.Body>
      <Card.Footer>Vote count: {team.votes}</Card.Footer>
    </Card>
  );
}
export default VotingCard;