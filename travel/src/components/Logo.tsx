import logoWhite from '../assets/fanatics-logo-white.png'
import logoDark from '../assets/fanatics-logo-dark.png'

interface LogoProps {
  variant?: 'light' | 'dark'
  showSubmark?: boolean
  height?: number
}

export function Logo({ variant = 'light', showSubmark = true, height = 28 }: LogoProps) {
  const src = variant === 'light' ? logoWhite : logoDark
  const submarkColor = variant === 'light' ? 'rgba(255,255,255,0.6)' : 'rgba(17,17,17,0.6)'
  const dividerColor = variant === 'light' ? 'rgba(255,255,255,0.22)' : 'rgba(17,17,17,0.18)'

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
      <img
        src={src}
        alt="Fanatics"
        style={{
          height,
          width: 'auto',
          display: 'block',
        }}
      />
      {showSubmark && (
        <div
          style={{
            paddingLeft: 12,
            borderLeft: `1px solid ${dividerColor}`,
            color: submarkColor,
            fontFamily: "'Archivo', 'Inter', sans-serif",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            lineHeight: 1,
          }}
        >
          Travel
        </div>
      )}
    </div>
  )
}
