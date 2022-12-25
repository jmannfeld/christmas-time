import "../App.css";
import "./MerryChristmas.css";

function MerryChristmas() {
  return (
    <div className="christmas-wrapper bg">
      <h1 className="christmas-heading">
        Merry Christmas, Chuck and Ronda! 🎄
      </h1>
      <a
        href="/vitos-gift-card.pdf"
        target="_blank"
        type="application/pdf"
        className="button"
      >
        Open your Christmas gift 🎁
      </a>
    </div>
  );
}

export default MerryChristmas;
