export default function PhoneMockup({ variant = "story", className = "" }) {
  const screenshots = {
    story: "/images/app-screenshots/roadmap.jpeg",
    home: "/images/app-screenshots/explore.jpeg",
    progress: "/images/app-screenshots/progress.jpeg",
  };

  const image = screenshots[variant] || screenshots.story;

  return (
    <div className={`phone-shell ${className}`}>
      <div className="phone-frame">
        <div className="phone-screen">
          <img
            src={image}
            alt="Science Stories app screen"
            className="phone-app-image"
          />
        </div>
      </div>
    </div>
  );
}
