import "./App.css";
import MyNavbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Movies from "./components/Movies.jsx";
import MyFooter from "./components/Footer.jsx";

function App() {
  return (
    <>
      <MyNavbar />
      <Header />
      <Movies title="Guardians of the Galaxy" category="Trending Now" />
      <Movies title="One Piece" category="Watch It Again" />
      <Movies title="Star Wars" category="New Relases" />

      <MyFooter />
    </>
  );
}

export default App;
