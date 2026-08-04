type BolyticsRatingProps = {
  rating: number;
  label?: string;
  className?: string;
};

export function BolyticsRating({
  rating,
  label = "Great",
  className = "",
}: BolyticsRatingProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      role="img"
      aria-label={`Bolytics rating ${rating}, ${label}`}
      className={`size-[clamp(1rem,6rem+1vw,15rem)] overflow-visible ${className}`}
    >
      <defs>
        {/* Main border gradient */}
        <linearGradient
          id="bolytics-border"
          x1="20"
          y1="10"
          x2="160"
          y2="170"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>

        {/* Badge background */}
        <linearGradient
          id="bolytics-background"
          x1="90"
          y1="18"
          x2="90"
          y2="165"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="55%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#0b1739" />
        </linearGradient>

        {/* Outer glow */}
        <filter
          id="bolytics-glow"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feGaussianBlur stdDeviation="5" result="blur" />

          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Glow behind badge */}
      <path
        d="
          M 50 0
          L 100 25
          L 100 75
          L 50 100
          L 0 75
          L 0 25
          Z
        "
        fill="none"
        stroke="#3b82f6"
        strokeWidth="7"
        strokeLinejoin="round"
        opacity="0.45"
        filter="url(#bolytics-glow)"
      />

      {/* Main badge */}
      <path
        d="
          M 50 0
          L 100 25
          L 100 75
          L 50 100
          L 0 75
          L 0 25
          Z
        "
        fill="url(#bolytics-background)"
        stroke="url(#bolytics-border)"
        strokeWidth="6"
        strokeLinejoin="round"
      />

      {/* Rating number */}
      <text
        x="50"
        y="50"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="white"
        fontSize="40"
        fontWeight="700"
      >
        {rating}
      </text>

      {/* Rating label */}
      <text
        x="48"
        y="74"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#60a5fa"
        fontSize="10"
        fontWeight="600"
      >
        {label}
      </text>
    </svg>
  );
}