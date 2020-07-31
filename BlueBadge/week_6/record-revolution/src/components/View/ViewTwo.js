import React from "react";
import styled from "styled-components";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    maxHeight: 450,
  },
});

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Background = styled.div`
  background: linear-gradient(to bottom, white, #ele6e2);
`;

const Wrapper = styled.div`
  display: block;
  margin: auto;
  padding: 2em;
`;

const ViewTwo = () => {
  const classes = useStyles();

  return (
    <div>
      <Background>
        <Row>
          <Column>
            <Wrapper>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Joy Division"
                    height="180"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjgPsClpy37gxh5BFId3S3iNer0qhxjcSTQQ&usqp=CAU"
                    title="Joy Division"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Joy Division
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Designer Peter Saville's decision to go with pulsar radio
                      waves is right up there with Martin Hannett’s spellbinding
                      production in making this album a goth classic. Disney's
                      Mickey Mouse shirt parody four decades later only
                      reaffirmed its legend.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="dark">
                    Share
                  </Button>
                  <Button size="small" color="dark">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Wrapper>
          </Column>

          <Column>
            <Wrapper>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Joy Division"
                    height="180"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjgPsClpy37gxh5BFId3S3iNer0qhxjcSTQQ&usqp=CAU"
                    title="Joy Division"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Joy Division
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Designer Peter Saville's decision to go with pulsar radio
                      waves is right up there with Martin Hannett’s spellbinding
                      production in making this album a goth classic. Disney's
                      Mickey Mouse shirt parody four decades later only
                      reaffirmed its legend.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="dark">
                    Share
                  </Button>
                  <Button size="small" color="dark">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Wrapper>
          </Column>

          <Column>
            <Wrapper>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Joy Division"
                    height="180"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjgPsClpy37gxh5BFId3S3iNer0qhxjcSTQQ&usqp=CAU"
                    title="Joy Division"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Joy Division
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Designer Peter Saville's decision to go with pulsar radio
                      waves is right up there with Martin Hannett’s spellbinding
                      production in making this album a goth classic. Disney's
                      Mickey Mouse shirt parody four decades later only
                      reaffirmed its legend.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="dark">
                    Share
                  </Button>
                  <Button size="small" color="dark">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Wrapper>
          </Column>
        </Row>
      </Background>
    </div>
  );
};

export default ViewTwo;
