import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainSpotify from "./component/MainSpotify";
import SongSpotify from "./component/SongSpotify";
import anotherSong from "./component/anotherSong";

function App() {
  return (
    <>
      <MainSpotify />
      <SongSpotify />
      <anotherSong />
    </>
  );
}

export default App;
