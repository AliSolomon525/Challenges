import * as React from "react";
import { CardColumns } from "reactstrap";
import MortyCard from "./MortyCard";
import { MortyCharacterResponse, Result } from "./MortyCardsInterface";

//ccc is shortcut for this:
export interface MortyCardsProps {
  //defining props
  url: string;
}

export interface MortyCardsState {
  //useState - we only care about 1 state
  mortyInformation: any;
}

class MortyCards extends React.Component<MortyCardsProps, MortyCardsState> {
  //defining what should be coming in and out. expecting info
  constructor(props: MortyCardsProps) {
    super(props);
    this.state = { mortyInformation: [] };
  }

  componentDidMount() {
    fetch(this.props.url)
      .then((res) => res.json())
      .then((json: MortyCharacterResponse) => {
        //interface only lets it do the info or results from fetch
        console.log(json);
        this.setState({ mortyInformation: json.results });
      });
  }

  render() {
    return (
      <CardColumns>
        {this.state.mortyInformation.length > 0 ? (
          this.state.mortyInformation.map(
            (character: Result, index: number) => (
              <MortyCard character={character} key={index} />
            )
          )
        ) : (
          <></>
        )}
      </CardColumns>
    );
  }
}

export default MortyCards;
