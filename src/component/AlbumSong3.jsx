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
      <>
        <h3>Maneskin</h3>
        <Col className="col-12 d-flex ms-2 ">
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

export default AlbumSong3;
