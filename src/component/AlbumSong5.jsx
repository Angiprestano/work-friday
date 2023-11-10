import { React, Component } from "react";
import { Col } from "react-bootstrap";
import SingleSong from "./SingleSong";

class AlbumSong5 extends Component {
  state = {
    song: [],
    isLoading: true,
    isError: false,
  };

  componentDidMount() {
    fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=CelineDion"
    )
      .then((res) => {
        if (res.ok) {
          console.log(res);
          return res.json();
        } else {
          throw new Error("Error in the music");
        }
      })
      .then((data) => {
        console.log(data.data);
        this.setState({
          song: data.data,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.error(error);
        this.setState({ isError: true, isLoading: false });
      });
  }
  render() {
    return (
      <>
        <h3 className="ms-2 mb-2 ms-2">Cèline Dion</h3>
        <Col className="col-12 d-flex ">
          {this.state.song.map((song) => (
            <SingleSong
              key={song.id}
              title={song.Title}
              artist={song.artist.name}
              poster={song.album.cover_medium}
            />
          ))}
        </Col>
      </>
    );
  }
}

export default AlbumSong5;
