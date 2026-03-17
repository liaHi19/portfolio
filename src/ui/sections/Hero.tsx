const moveLeft = () => {
  return Math.random() * 100;
};

const moveTop = () => {
  return Math.random() * 100;
};

const slowDrift = () => {
  return 15 + Math.random() * 20;
};

const delay = () => {
  return Math.random() * 5;
};

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero/hero-bg-1920x1080.webp"
          srcSet="
          /hero/hero-bg-300x169.webp   300w,
          /hero/hero-bg-721x406.webp   721w,
          /hero/hero-bg-1083x609.webp 1083w,
          /hero/hero-bg-1560x878.webp 1560w,
          /hero/hero-bg-1920x1080.webp 1920w,
          /hero/hero-bg-2048x1152.webp 2048w
          "
          sizes="(min-width: 2160px) 2048px, calc(95vw + 15px)"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#8b5cf6",
              left: `${moveLeft()}%`,
              top: `${moveTop()}%`,
              animation: `slow-drift ${slowDrift()}s ease-in-out infinite`,
              animationDelay: `${delay()}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
