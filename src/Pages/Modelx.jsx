import React from "react";
import Header from "../Components/header/Header";
import ImageBackgroundSection from "../Components/ImageBackgroundSection/ImageBackgroundSection";
import ImageBackgroundNoText from "../Components/ImageBackgroundNoText/ImageBackgroundNoText";
import modelx from "../assets/modelx.jpg";
import ImageGrid from "../Components/ImageGrid/ImageGrid";
import modelx2 from "../assets/modelx2.jpg";
import tc from "../assets/tc.jpg";
const featureItems = [
  { title: "2.3s 0-60", description: "very fast" },
  { title: "2.3s 0-60", description: "very fast" },
  { title: "2.3s 0-60", description: "very fast" },
  { title: "2.3s 0-60", description: "very fast" },
];
export default function Modelx() {
  return (
    <>
      <div className="container">
        <section className="section">
          <ImageBackgroundSection
            header="Model X"
            description="View inventory"
            backgroundImage={modelx}
            featureItems={featureItems}
          />
        </section>
        <section className="section">
          <ImageBackgroundNoText backgroundImage={modelx2} />
        </section>
        <section className="section">
          <ImageGrid
            image1={modelx}
            image2={modelx2}
            text1="Stay Connected - Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging."
            text2="Sublime Sound - A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers the best listening experience wherever you are."
          />
        </section>
      </div>
    </>
  );
}
