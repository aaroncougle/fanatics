import { Share2, MessageCircle, Camera, Play } from 'lucide-react'
import { Logo } from './Logo'

const eyebrowStyle: React.CSSProperties = {
  color: '#fff',
  fontFamily: 'var(--font-family-display)',
  fontWeight: 800,
  fontSize: 12,
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
  marginBottom: 'var(--space-4)',
}

const linkStyle: React.CSSProperties = {
  display: 'block',
  fontSize: 'var(--font-size-sm)',
  marginBottom: 'var(--space-3)',
  color: 'rgba(255,255,255,0.6)',
  transition: 'color var(--transition-fast)',
}

export function Footer() {
  return (
    <footer style={{
      background: 'var(--color-brand-black-deep)',
      color: 'rgba(255,255,255,0.7)',
      marginTop: 'auto',
      borderTop: '3px solid var(--color-brand-red)',
    }}>
      <div className="container" style={{ padding: 'var(--space-16) var(--space-8) var(--space-8)' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'var(--space-10)',
          marginBottom: 'var(--space-12)',
        }}>
          {/* Brand Column */}
          <div>
            <div style={{ marginBottom: 'var(--space-4)' }}>
              <Logo variant="light" height={28} />
            </div>
            <p style={{ fontSize: 'var(--font-size-sm)', lineHeight: 1.7, marginBottom: 'var(--space-5)', maxWidth: 260, color: 'rgba(255,255,255,0.6)' }}>
              Book unforgettable vacations and earn FanCash on every trip. The official travel rewards experience for Fanatics members.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
              {[Share2, MessageCircle, Camera, Play].map((Icon, i) => (
                <a key={i} href="#" style={{
                  width: 36, height: 36,
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.7)',
                  transition: 'background var(--transition-fast), color var(--transition-fast)',
                }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = 'var(--color-brand-red)'
                    ;(e.currentTarget as HTMLElement).style.color = '#fff'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)'
                    ;(e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)'
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 style={eyebrowStyle}>Explore</h4>
            {['Cruises', 'Beach Resorts', 'Adventures', 'All-Inclusive', 'Last-Minute Deals', 'Group Travel'].map(item => (
              <a key={item} href="#" style={linkStyle}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
              >{item}</a>
            ))}
          </div>

          {/* Destinations */}
          <div>
            <h4 style={eyebrowStyle}>Destinations</h4>
            {['Caribbean', 'Alaska', 'Mediterranean', 'Hawaii', 'Mexico', 'Bahamas'].map(item => (
              <a key={item} href="#" style={linkStyle}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
              >{item}</a>
            ))}
          </div>

          {/* Support */}
          <div>
            <h4 style={eyebrowStyle}>Support</h4>
            {['Help Center', 'Booking FAQs', 'Cancellation Policy', 'Travel Insurance', 'Contact Us'].map(item => (
              <a key={item} href="#" style={linkStyle}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
              >{item}</a>
            ))}
          </div>
        </div>

        {/* FanCash Callout */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(255,184,0,0.10) 0%, rgba(229,61,46,0.06) 100%)',
          border: '1px solid rgba(255,184,0,0.25)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-5) var(--space-6)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-4)',
          marginBottom: 'var(--space-8)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
            <div style={{
              width: 44, height: 44, borderRadius: '50%',
              background: 'var(--color-fancash)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <span style={{ color: '#0A0A0A', fontFamily: 'var(--font-family-display)', fontWeight: 900, fontSize: 20 }}>F</span>
            </div>
            <div>
              <div style={{ color: '#fff', fontFamily: 'var(--font-family-display)', fontWeight: 800, fontSize: 'var(--font-size-md)', marginBottom: 2, letterSpacing: '-0.01em' }}>Earn FanCash on Every Trip</div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'var(--font-size-sm)' }}>Earn up to 5% back. Redeem on gear, collectibles, and tickets.</div>
            </div>
          </div>
          <a href="#" style={{
            background: 'var(--color-brand-red)', color: '#fff',
            fontFamily: 'var(--font-family-display)',
            fontWeight: 800, fontSize: 'var(--font-size-sm)',
            letterSpacing: '0.04em', textTransform: 'uppercase',
            padding: '12px 22px', borderRadius: 'var(--radius-md)',
            whiteSpace: 'nowrap', display: 'inline-block',
            transition: 'background var(--transition-fast)',
          }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-brand-red-dark)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-brand-red)')}
          >
            Learn More
          </a>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: 'var(--space-6)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-4)',
        }}>
          <div style={{ fontSize: 'var(--font-size-xs)', color: 'rgba(255,255,255,0.4)' }}>
            © 2026 Fanatics, Inc. All rights reserved. — A Fanatics Experience.
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-6)', flexWrap: 'wrap' }}>
            {['Privacy Policy', 'Terms of Use', 'Accessibility', 'Cookie Settings'].map(item => (
              <a key={item} href="#" style={{ fontSize: 'var(--font-size-xs)', color: 'rgba(255,255,255,0.4)', transition: 'color var(--transition-fast)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
              >{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
