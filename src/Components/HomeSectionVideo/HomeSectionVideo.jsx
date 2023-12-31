import "./HomeSectionVideo.css";
import TESLA_VID from "../../assets/TESLA_VID.mp4";

export default function HomeSectionVideo() {
  return (
    <div>
      <video className="video-background" autoPlay muted loop>
        <source src={TESLA_VID} type="video/mp4" />
      </video>
      <div className="overlay">
        <div>
          <h1>Experience Tesla</h1>
          <h5>Schedule a demo drive today</h5>
        </div>
        <div>
          <button>Demo Drive</button>
        </div>
      </div>
    </div>
  );
}
