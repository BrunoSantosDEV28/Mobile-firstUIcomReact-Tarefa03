import React, { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [images, setImages] = useState([
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
  ]);

  const addImage = () => {
    setImages([...images, "https://via.placeholder.com/150"]);
  };

  const removeImage = () => {
    if (images.length > 0) {
      setImages(images.slice(0, -1));
    }
  };

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.gallery}>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Imagem ${index + 1}`} />
        ))}
      </div>
      <div className={styles.controls}>
        <button onClick={addImage}>Adicionar Imagem</button>
        <button onClick={removeImage}>Remover Imagem</button>
      </div>
    </div>
  );
}

export default App;
