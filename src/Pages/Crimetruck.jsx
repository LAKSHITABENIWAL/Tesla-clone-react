import React from "react";
import ImageBackgroundSection from "../Components/ImageBackgroundSection/ImageBackgroundSection";
import ImageGrid from "../Components/ImageGrid/ImageGrid";
import cybertruck from "../assets/cybertruck.jpg";
import tc from "../assets/tc.jpg";
import ImageBackgroundNoText from "../Components/ImageBackgroundNoText/ImageBackgroundNoText";
import Header from "../Components/header/Header";
const featureItems = [
  { title: "2.3s 0-60", description: "very fast" },
  { title: "2.3s 0-60", description: "very fast" },
  { title: "2.3s 0-60", description: "very fast" },
  { title: "2.3s 0-60", description: "very fast" },
];

export default function Crimetruck() {
  return (
    <>
      <div className="container">
        <section className="section">
          <ImageBackgroundSection
            header="Cybertruck"
            description="View inventory"
            backgroundImage={cybertruck}
            featureItems={featureItems}
          />
        </section>
        <section className="section">
          <ImageBackgroundNoText backgroundImage={tc} />
        </section>
        <section className="section">
          <ImageGrid
            image1={cybertruck}
            image2={tc}
            text1="Stay Connected - Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging."
            text2="Sublime Sound - A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers the best listening experience wherever you are."
          />
        </section>
      </div>
    </>
  );
}
