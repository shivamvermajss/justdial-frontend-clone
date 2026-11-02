export default function SectionHeading({
  title,
  subtitle,
  badge,
  action,
  className = "",
}) {
  return (
    <div className={`flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-1 ${className}`}>
      <div>
        {badge && (
          <span className="inline-block text-[11px] font-semibold text-[#0076D7] bg-blue-50 px-2 py-0.5 rounded mb-1.5">
            {badge}
          </span>
        )}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
            {subtitle}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

