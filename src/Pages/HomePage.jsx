import HomeSectionVideo from "../Components/HomeSectionVideo/HomeSectionVideo";
import ImageBackgroundSection from "../Components/ImageBackgroundSection/ImageBackgroundSection";
import models from "../assets/models.jpg";
import modelx from "../assets/modelx.jpg";
import cybertruck from "../assets/cybertruck.jpg";
export default function HomePage() {
  return (
    <div className="container">
      <section className="section">
        <HomeSectionVideo />
      </section>
      <section className="section">
        <ImageBackgroundSection
          header="Model S"
          description="View inventory"
          backgroundImage={models}
        />
      </section>
      <section className="section">
        <ImageBackgroundSection
          header="Model X"
          description="View inventory"
          backgroundImage={modelx}
        />
      </section>
      <section className="section">
        <ImageBackgroundSection
          header="Cybertruck"
          description="View inventory"
          backgroundImage={cybertruck}
        />
      </section>
    </div>
  );
}
