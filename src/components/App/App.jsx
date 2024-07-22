import { useEffect, useState } from "react";
import "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Toaster } from "react-hot-toast";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import axios from "axios";
import ImageModal from "../ImageModal/ImageModal";
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) return;

    async function fetchImages() {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://api.unsplash.com/search/photos",
          {
            params: {
              orientation: "landscape",
              query,
              page,
              client_id: "iB5AgNQ2CEuOiViT6IK8Ly0JMDb3rSWRZ7nt2ojq3AU",
            },
          }
        );
        console.log(response);
        setImages((prevImages) => [...prevImages, ...response.data.results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, [query, page]);

  const handleSearch = (searchQuery) => {
    setQuery((prevQuery) => {
      if (searchQuery != prevQuery) {
        setPage(1);
        setImages([]);
      }
      return searchQuery;
    });
  };

  const loadMoreImages = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <Toaster position="top-lef" reverseOrder={false} />
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          bigImage={selectedImage.urls.regular}
          imageDescription={selectedImage.alt_description}
          onClose={closeModal}
        />
      )}
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={loadMoreImages} />
      )}
    </>
  );
}

export default App;
