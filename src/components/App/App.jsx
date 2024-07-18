import { useEffect, useState } from "react";
import "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Toaster } from "react-hot-toast";

function App() {
  useEffect(() => {
    //for http-request
  }, []);

  const handleSearch = (query) => {
    console.log("search for:", query);
  };

  return (
    <>
      <h1></h1>
      <SearchBar onSubmit={handleSearch} />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
