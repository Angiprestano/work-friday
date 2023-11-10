import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainSpotify from "./component/MainSpotify";
import SongSpotify from "./component/SongSpotify";
import NewAlbumSong from "./component/NewAlbumSong";
import AlbumSong2 from "./component/AlbumSong2";
import AlbumSong3 from "./component/AlbumSong3";
import AlbumSong4 from "./component/AlbumSong4";
import AlbumSong5 from "./component/AlbumSong5";

function App() {
  return (
    <>
      <div className="bg-dark">
        <MainSpotify />
        <SongSpotify />
        <NewAlbumSong />
        <AlbumSong2 />
        <AlbumSong3 />
        <AlbumSong4 />
        <AlbumSong5 />
      </div>
    </>
  );
}

export default App;
