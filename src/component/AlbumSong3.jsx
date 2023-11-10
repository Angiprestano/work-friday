import { React, Component } from "react";
import { Col } from "react-bootstrap";
import SingleSong from "./SingleSong";

class AlbumSong3 extends Component {
  state = {
    song: [],
    isLoading: true,
    isError: false,
  };

  componentDidMount() {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=Maneskin")
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
      <Col className="col-12 d-flex ">
        {this.state.isLoading && <p>Loading...</p>}
        {this.state.isError && <p>Errore recupero dati</p>}:
        <h3 className="ms-2 mb-3 text-white">Music</h3>
        {this.state.song.map((song) => (
          <SingleSong
            key={song.id}
            title={song.Title}
            poster={song.album.cover_medium}
          />
        ))}
      </Col>
    );
  }
}

export default AlbumSong3;
