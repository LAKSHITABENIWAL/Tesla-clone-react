import React from "react";
import ImageBackgroundSection from "../Components/ImageBackgroundSection/ImageBackgroundSection";
import ImageBackgroundNoText from "../Components/ImageBackgroundNoText/ImageBackgroundNoText";
import models from "../assets/models.jpg";
import models2 from "../assets/models2.jpg";
import ImageGrid from "../Components/ImageGrid/ImageGrid";
import tc from "../assets/tc.jpg";
import Header from "../Components/header/Header";
const featureItems = [
  { title: "2.3s 0-60", description: "very fast" },
  { title: "2.3s 0-60", description: "very fast" },
  { title: "2.3s 0-60", description: "very fast" },
  { title: "2.3s 0-60", description: "very fast" },
];
export default function Models() {
  return (
    <>
      <div className="container">
        <section className="section">
          <ImageBackgroundSection
            header="Model S"
            description="View inventory"
            backgroundImage={models}
            featureItems={featureItems}
          />
        </section>
        <section className="section">
          <ImageBackgroundNoText backgroundImage={models2} />
        </section>
        <section className="section">
          <ImageGrid
            image1={models}
            image2={models2}
            text1="Stay Connected - Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging."
            text2="Sublime Sound - A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers the best listening experience wherever you are."
          />
        </section>
      </div>
    </>
  );
}
