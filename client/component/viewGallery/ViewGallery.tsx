"use client"
import { useState, useEffect, use } from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";

type ImageGalleryType = {
  original: string,
  thumbnail: string
}


function ViewGallery({id}: {id:number}) {
  const [images, setImages] = useState<ImageGalleryType[]>([]);

  useEffect(() => {
      fetch(`http://localhost:8000/models/gallery/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const img: ImageGalleryType[] = [];
        for (let i = 0; i < data.foto.length; i++) {
          const el = {
            original: `http://localhost:8000/${id}/foto/${data.foto[i]}`,
            thumbnail: `http://localhost:8000/${id}/foto/th/${data.th[i]}`
          }

          img.push(el);
        }
        
        setImages(img);
      })
  }, []);

  return (
    <div id="image-container" className="w-full h-screen lg:h-full mb-10 lg:mg-0 relative">
      {images.length > 0 && <ImageGallery items={images} />}
    </div>
  );
}

export default ViewGallery;