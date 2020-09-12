//CTRL . > shortcut for importing

import React from "react";
import { Result } from "./MortyCardsInterface";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

//npm install @types/reactstrap - hover over it

export interface MortyCardProps {
  character: Result;
  key: number;
}

const MortyCard: React.SFC<MortyCardProps> = (props) => {
  return (
    <div>
      <Card>
        <CardImg
          top
          width="50px"
          src={props.character.image}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{props.character.name}</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default MortyCard;
