import { React, Component } from "react";
import { Col } from "react-bootstrap";
import SingleSong from "./SingleSong";

class NewAlbumSong extends Component {
  state = {
    song: [],
    isLoading: true,
    isError: false,
  };

  componentDidMount() {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=ultimo")
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
        <h3 className="ms-2">Ultimo</h3>
        <Col className="col-12 d-flex ">
          {this.state.song.map((song) => (
            <SingleSong
              key={song.id}
              artist={song.artist.name}
              traks={song.title.short}
              poster={song.album.cover_medium}
              duration={song.duration}
            />
          ))}
        </Col>
      </>
    );
  }
}

export default NewAlbumSong;
