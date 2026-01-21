export const DroneIcon = ({ className = "w-8 h-8" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Propellers with spinning effect */}
      <g>
        {/* Top Left Propeller */}
        <circle cx="40" cy="40" r="30" stroke="currentColor" strokeWidth="4" opacity="0.6" />
        <circle cx="40" cy="40" r="8" fill="currentColor" />
        
        {/* Top Right Propeller */}
        <circle cx="160" cy="40" r="30" stroke="currentColor" strokeWidth="4" opacity="0.6" />
        <circle cx="160" cy="40" r="8" fill="currentColor" />
        
        {/* Bottom Left Propeller */}
        <circle cx="40" cy="160" r="30" stroke="currentColor" strokeWidth="4" opacity="0.6" />
        <circle cx="40" cy="160" r="8" fill="currentColor" />
        
        {/* Bottom Right Propeller */}
        <circle cx="160" cy="160" r="30" stroke="currentColor" strokeWidth="4" opacity="0.6" />
        <circle cx="160" cy="160" r="8" fill="currentColor" />
      </g>
      
      {/* Arms connecting to center */}
      <line x1="40" y1="40" x2="85" y2="85" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <line x1="160" y1="40" x2="115" y2="85" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <line x1="40" y1="160" x2="85" y2="115" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <line x1="160" y1="160" x2="115" y2="115" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      
      {/* Center body with camera */}
      <circle cx="100" cy="100" r="25" fill="currentColor" />
      
      {/* Camera lens in center */}
      <circle cx="100" cy="100" r="12" stroke="white" strokeWidth="2" fill="none" />
      <circle cx="100" cy="100" r="6" fill="white" opacity="0.8" />
      
      {/* Motor connection points */}
      <circle cx="40" cy="40" r="6" fill="currentColor" />
      <circle cx="160" cy="40" r="6" fill="currentColor" />
      <circle cx="40" cy="160" r="6" fill="currentColor" />
      <circle cx="160" cy="160" r="6" fill="currentColor" />
    </svg>
  )
}