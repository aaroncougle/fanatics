import { useNavigate } from 'react-router-dom'
import { Star, MapPin, Clock, Ship, Palmtree, Mountain } from 'lucide-react'
import type { TravelPackage } from '../data/packages'

interface Props {
  pkg: TravelPackage
  layout?: 'grid' | 'list'
}

export function PackageCard({ pkg, layout = 'grid' }: Props) {
  const navigate = useNavigate()

  if (layout === 'list') {
    return (
      <div
        onClick={() => navigate(`/package/${pkg.id}`)}
        style={{
          background: 'var(--color-background-surface)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--color-border-default)',
          display: 'flex',
          gap: 0,
          overflow: 'hidden',
          cursor: 'pointer',
          transition: 'box-shadow var(--transition-normal), transform var(--transition-normal), border-color var(--transition-normal)',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-lg)'
          ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
          ;(e.currentTarget as HTMLElement).style.borderColor = '#0A0A0A'
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.boxShadow = 'none'
          ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
          ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border-default)'
        }}
      >
        {/* Image */}
        <div style={{ position: 'relative', width: 300, flexShrink: 0, overflow: 'hidden' }}>
          <img src={pkg.image} alt={pkg.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          {pkg.badge && <Badge text={pkg.badge} />}
          <TypePill type={pkg.type} />
        </div>

        {/* Content */}
        <div style={{ flex: 1, padding: 'var(--space-5) var(--space-6)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'var(--space-4)', marginBottom: 'var(--space-2)' }}>
            <div>
              <h3 style={{
                fontFamily: 'var(--font-family)',
                fontWeight: 900, fontSize: 'var(--font-size-xl)',
                color: 'var(--color-text-primary)',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                marginBottom: 6,
              }}>{pkg.name}</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                  <MapPin size={13} /> {pkg.destination}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                  <Clock size={13} /> {pkg.duration} nights
                </span>
                {pkg.departurePort && (
                  <span style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-xs)' }}>from {pkg.departurePort}</span>
                )}
              </div>
            </div>
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              {pkg.originalPrice && (
                <div style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)', textDecoration: 'line-through' }}>${pkg.originalPrice.toLocaleString()}</div>
              )}
              <div style={{
                color: 'var(--color-brand-red)',
                fontFamily: 'var(--font-family-display)',
                fontWeight: 900,
                fontSize: 'var(--font-size-3xl)',
                letterSpacing: '-0.03em',
                lineHeight: 1,
              }}>${pkg.price.toLocaleString()}</div>
              <div style={{ color: 'var(--color-text-muted)', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: 2 }}>{pkg.priceLabel}</div>
            </div>
          </div>

          {/* Rating */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 'var(--space-3)' }}>
            <Star size={14} fill="var(--color-brand-red)" color="var(--color-brand-red)" />
            <span style={{ fontWeight: 800, fontSize: 'var(--font-size-sm)', color: 'var(--color-text-primary)' }}>{pkg.rating}</span>
            <span style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-xs)' }}>({pkg.reviewCount.toLocaleString()} reviews)</span>
          </div>

          <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)', lineHeight: 1.6, marginBottom: 'var(--space-4)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {pkg.description}
          </p>

          {/* Highlights */}
          <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap', marginBottom: 'var(--space-4)', flex: 1 }}>
            {pkg.highlights.slice(0, 3).map(h => (
              <span key={h} style={{
                background: 'var(--color-background-subtle)',
                color: 'var(--color-text-secondary)',
                fontSize: 11,
                fontWeight: 600,
                padding: '5px 10px',
                borderRadius: 'var(--radius-sm)',
                letterSpacing: '0.02em',
              }}>{h}</span>
            ))}
          </div>

          {/* Bottom */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--color-border-default)', paddingTop: 'var(--space-3)' }}>
            <FanCashBadge earn={pkg.fanCashEarn} />
            <button style={{
              background: 'var(--color-brand-red)', color: '#fff',
              fontFamily: 'var(--font-family-display)',
              fontWeight: 800, fontSize: 12,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              padding: '12px 22px', borderRadius: 'var(--radius-md)',
              transition: 'background var(--transition-fast)',
            }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-brand-red-dark)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-brand-red)')}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      onClick={() => navigate(`/package/${pkg.id}`)}
      style={{
        background: 'var(--color-background-surface)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--color-border-default)',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'box-shadow var(--transition-normal), transform var(--transition-normal), border-color var(--transition-normal)',
        display: 'flex', flexDirection: 'column',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-lg)'
        ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'
        ;(e.currentTarget as HTMLElement).style.borderColor = '#0A0A0A'
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.boxShadow = 'none'
        ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
        ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border-default)'
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
        <img
          src={pkg.image} alt={pkg.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)' }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
        />
        {pkg.badge && <Badge text={pkg.badge} />}
        <TypePill type={pkg.type} />
      </div>

      {/* Content */}
      <div style={{ padding: 'var(--space-4) var(--space-5) var(--space-5)', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Location + Duration */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-2)' }}>
          <span style={{
            display: 'flex', alignItems: 'center', gap: 4,
            color: 'var(--color-brand-red)',
            fontFamily: 'var(--font-family-display)',
            fontSize: 11, fontWeight: 800,
            letterSpacing: '0.12em', textTransform: 'uppercase',
          }}>
            <MapPin size={11} /> {pkg.destination}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--color-text-muted)', fontSize: 11, fontWeight: 600 }}>
            <Clock size={11} /> {pkg.duration}N
          </span>
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: 'var(--font-family)',
          fontWeight: 900,
          fontSize: 'var(--font-size-lg)',
          color: 'var(--color-text-primary)',
          marginBottom: 'var(--space-2)',
          lineHeight: 1.2,
          letterSpacing: '-0.02em',
        }}>{pkg.name}</h3>

        {/* Rating */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 'var(--space-3)' }}>
          <Star size={13} fill="var(--color-brand-red)" color="var(--color-brand-red)" />
          <span style={{ fontWeight: 800, fontSize: 'var(--font-size-sm)', color: 'var(--color-text-primary)' }}>{pkg.rating}</span>
          <span style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-xs)' }}>({pkg.reviewCount.toLocaleString()})</span>
        </div>

        {/* FanCash */}
        <div style={{ flex: 1, marginBottom: 'var(--space-3)' }}>
          <FanCashBadge earn={pkg.fanCashEarn} />
        </div>

        {/* Price + CTA */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: 'auto', paddingTop: 'var(--space-3)', borderTop: '1px solid var(--color-border-default)' }}>
          <div>
            {pkg.originalPrice && (
              <div style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-xs)', textDecoration: 'line-through' }}>${pkg.originalPrice.toLocaleString()}</div>
            )}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
              <span style={{ color: 'var(--color-text-muted)', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>from</span>
              <span style={{
                color: pkg.originalPrice ? 'var(--color-brand-red)' : 'var(--color-text-primary)',
                fontFamily: 'var(--font-family-display)',
                fontWeight: 900,
                fontSize: 'var(--font-size-2xl)',
                letterSpacing: '-0.03em',
                lineHeight: 1,
              }}>${pkg.price.toLocaleString()}</span>
            </div>
            <div style={{ color: 'var(--color-text-muted)', fontSize: 10, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: 2 }}>{pkg.priceLabel}</div>
          </div>
          <button style={{
            background: '#0A0A0A', color: '#fff',
            fontFamily: 'var(--font-family-display)',
            fontWeight: 800, fontSize: 11,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            padding: '11px 16px', borderRadius: 'var(--radius-md)',
            transition: 'background var(--transition-fast)',
            whiteSpace: 'nowrap',
          }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-brand-red)')}
            onMouseLeave={e => (e.currentTarget.style.background = '#0A0A0A')}
          >
            View Trip
          </button>
        </div>
      </div>
    </div>
  )
}

function Badge({ text }: { text: string }) {
  const colors: Record<string, { bg: string; color: string }> = {
    'Best Value': { bg: 'var(--color-brand-red)', color: '#fff' },
    'Fan Favorite': { bg: '#FF8C00', color: '#fff' },
    'New Route': { bg: '#0A0A0A', color: '#fff' },
    'Top Rated': { bg: 'var(--color-success)', color: '#fff' },
    'Elevated FanCash': { bg: 'var(--color-fancash)', color: '#0A0A0A' },
  }
  const style = colors[text] || { bg: '#0A0A0A', color: '#fff' }
  return (
    <div style={{
      position: 'absolute', top: 'var(--space-3)', left: 'var(--space-3)',
      background: style.bg, color: style.color,
      fontFamily: 'var(--font-family-display)',
      fontSize: 10, fontWeight: 900,
      padding: '5px 10px', borderRadius: 'var(--radius-sm)',
      letterSpacing: '0.1em', textTransform: 'uppercase',
    }}>
      {text}
    </div>
  )
}

function TypePill({ type }: { type: string }) {
  const config: Record<string, { label: string; Icon: typeof Ship }> = {
    cruise: { label: 'Cruise', Icon: Ship },
    resort: { label: 'Resort', Icon: Palmtree },
    adventure: { label: 'Adventure', Icon: Mountain },
  }
  const { label, Icon } = config[type] || { label: type, Icon: Ship }
  return (
    <div style={{
      position: 'absolute', top: 'var(--space-3)', right: 'var(--space-3)',
      background: 'rgba(10,10,10,0.7)', backdropFilter: 'blur(6px)',
      color: '#fff',
      fontFamily: 'var(--font-family-display)',
      fontSize: 10, fontWeight: 800,
      letterSpacing: '0.1em', textTransform: 'uppercase',
      padding: '5px 10px', borderRadius: 'var(--radius-sm)',
      display: 'flex', alignItems: 'center', gap: 5,
    }}>
      <Icon size={11} />
      {label}
    </div>
  )
}

function FanCashBadge({ earn }: { earn: number; rate?: string }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      background: 'rgba(255,184,0,0.10)',
      border: '1px solid rgba(255,184,0,0.30)',
      borderRadius: 'var(--radius-sm)',
      padding: '5px 10px',
    }}>
      <div style={{ width: 14, height: 14, borderRadius: '50%', background: 'var(--color-fancash)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <span style={{ color: '#0A0A0A', fontFamily: 'var(--font-family-display)', fontSize: 9, fontWeight: 900 }}>F</span>
      </div>
      <span style={{
        color: 'var(--color-fancash-dark)',
        fontFamily: 'var(--font-family-display)',
        fontWeight: 900, fontSize: 12,
        letterSpacing: '-0.01em',
      }}>+${earn}</span>
      <span style={{
        color: 'var(--color-neutral-600)',
        fontSize: 10, fontWeight: 700,
        letterSpacing: '0.08em', textTransform: 'uppercase',
      }}>FanCash</span>
    </div>
  )
}
