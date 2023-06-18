"use client";

import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import { Resizable } from "re-resizable";

const page = () => {
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  useEffect(() => {
    if (images.length < 1) return;
    const newImagesUrls = [];
    images.forEach((image) => newImagesUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImagesUrls);
  }, [images]);

  console.log(images);

  return (
    <div className="h-screen flex">
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={(e) => {
          const fileList = e.target.files;
          const newImages = Array.from(fileList);
          newImages.map((file) => {
            setImages((prev) => [...prev, file]);
          });
        }}
      />
      <div>
        {imageURLs.map((imageUrl, index) => (
          <Draggable key={index}>
            <Resizable
              defaultSize={{
                width: 200,
                height: 360
              }}
              style={{
                background: `url(${imageUrl})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat"
              }}
              lockAspectRatio={true}
            ></Resizable>
          </Draggable>
        ))}
      </div>
    </div>
  );
};

export default page;
