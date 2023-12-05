"use client"
import { useState, useEffect } from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";

type ImageGalleryType = {
  original: string,
  thumbnail: string
}


function ViewGallery({id}: {id:number}) {
  const [images, setImages] = useState<ImageGalleryType[]>([]);

  useEffect(() => {
      fetch(`${process.env.serverUrl}/models/gallery/${id}`)
      .then(res => res.json())
      .then(data => {
        const img: ImageGalleryType[] = [];
        for (let i = 0; i < data.foto.length; i++) {
          const el = {
            original: `${process.env.serverUrl}/${id}/foto/${data.foto[i]}`,
            thumbnail: `${process.env.serverUrl}/${id}/foto/th/${data.th[i]}`
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