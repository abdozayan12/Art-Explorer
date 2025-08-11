import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import ArtList from "./components/ArtList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <SearchBar />
        <Filters />
        <ArtList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
