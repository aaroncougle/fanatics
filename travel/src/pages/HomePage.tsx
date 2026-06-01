import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, MapPin, Calendar, Clock, ChevronRight, Award, Shield, DollarSign, Zap, Ship, Palmtree, Mountain } from 'lucide-react'
import { packages } from '../data/packages'
import { PackageCard } from '../components/PackageCard'

const destinations = [
  { name: 'Caribbean', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80', count: 47 },
  { name: 'Alaska', image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&q=80', count: 18 },
  { name: 'Mediterranean', image: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=600&q=80', count: 32 },
  { name: 'Hawaii', image: 'https://images.unsplash.com/photo-1542259009477-d625272157b7?w=600&q=80', count: 12 },
  { name: 'Mexico', image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=600&q=80', count: 24 },
  { name: 'Bahamas', image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=600&q=80', count: 19 },
]

const trustPillars = [
  {
    icon: DollarSign,
    title: 'Best price guarantee',
    description: 'Our rates are always equal or better than booking directly. Find it cheaper? We\'ll match it.'
  },
  {
    icon: Award,
    title: 'Earn FanCash',
    description: 'Earn up to 5% back in FanCash on every booking. Redeem on gear, collectibles, and more.'
  },
  {
    icon: Shield,
    title: 'No hidden fees',
    description: 'What you see is what you pay. Zero booking fees, ever.'
  },
  {
    icon: Zap,
    title: 'Flexible payments',
    description: 'Lock in today\'s price with a deposit, or finance your trip with our Flex Pay options.'
  },
]

const tabIcons = { cruise: Ship, resort: Palmtree, adventure: Mountain } as const

const eyebrow: React.CSSProperties = {
  color: 'var(--color-brand-red)',
  fontFamily: 'var(--font-family-display)',
  fontWeight: 800,
  fontSize: 12,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  marginBottom: 'var(--space-3)',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
}

const sectionHeading: React.CSSProperties = {
  fontFamily: 'var(--font-family)',
  fontSize: 'clamp(28px, 4vw, 44px)',
  fontWeight: 900,
  color: 'var(--color-text-primary)',
  letterSpacing: '-0.025em',
  lineHeight: 1.05,
}

export function HomePage() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<'cruise' | 'resort' | 'adventure'>('cruise')
  const [destination, setDestination] = useState('')
  const [date, setDate] = useState('')
  const [duration, setDuration] = useState('')

  const featured = packages.slice(0, 4)

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (destination) params.set('destination', destination)
    if (date) params.set('date', date)
    if (duration) params.set('duration', duration)
    params.set('type', activeTab)
    navigate(`/search?${params.toString()}`)
  }

  return (
    <div>
      {/* ── Hero ── */}
      <section style={{
        position: 'relative',
        minHeight: '94vh',
        display: 'flex', alignItems: 'center',
        overflow: 'hidden',
        background: '#000',
      }}>
        {/* Background image */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1600&q=85)',
          backgroundSize: 'cover', backgroundPosition: 'center 40%',
          opacity: 0.85,
        }} />
        {/* Editorial gradient — heavy black, not navy */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(0, 0, 0, 0.7)',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: 'calc(var(--header-height) + var(--space-12))', paddingBottom: 'var(--space-20)' }}>
          {/* Headline */}
          <h1 style={{
            color: '#fff',
            fontFamily: 'var(--font-family)',
            fontWeight: 900,
            fontSize: 'clamp(44px, 7.5vw, 92px)',
            lineHeight: 0.95, letterSpacing: '-0.035em',
            maxWidth: 880,
            marginBottom: 'var(--space-5)',
          }}>
            Travel like<br />
            <span style={{ color: 'var(--color-brand-red)' }}>a champion.</span>
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.78)',
            fontSize: 'clamp(16px, 1.6vw, 19px)',
            maxWidth: 540,
            lineHeight: 1.6,
            marginBottom: 'var(--space-10)',
          }}>
            Cruises, resorts, and bucket-list adventures — engineered for fans, powered by FanCash. Officially licensed travel rewards from Fanatics.
          </p>

          {/* Search Widget */}
          <div style={{
            background: '#fff',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-xl)',
            overflow: 'hidden',
            maxWidth: 820,
            border: '1px solid rgba(0,0,0,0.06)',
          }}>
            {/* Tabs */}
            <div style={{ display: 'flex', borderBottom: '1px solid var(--color-border-default)' }}>
              {(['cruise', 'resort', 'adventure'] as const).map(tab => {
                const Icon = tabIcons[tab]
                const active = activeTab === tab
                return (
                  <button key={tab} onClick={() => setActiveTab(tab)} style={{
                    flex: 1, padding: 'var(--space-4) var(--space-4)',
                    fontFamily: 'var(--font-family-display)',
                    fontWeight: 800, fontSize: 12,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: active ? '#0A0A0A' : 'var(--color-text-muted)',
                    borderBottom: active ? '3px solid var(--color-brand-red)' : '3px solid transparent',
                    background: active ? '#fff' : 'var(--color-neutral-50)',
                    transition: 'all var(--transition-fast)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  }}>
                    <Icon size={16} color={active ? 'var(--color-brand-red)' : 'currentColor'} />
                    {tab}s
                  </button>
                )
              })}
            </div>

            {/* Fields */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr auto', gap: 0 }} className="search-fields">
              {/* Destination */}
              <div style={{ padding: 'var(--space-4) var(--space-5)', borderRight: '1px solid var(--color-border-default)' }}>
                <label style={{ fontFamily: 'var(--font-family-display)', fontSize: 10, fontWeight: 800, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.14em', display: 'block', marginBottom: 6 }}>Destination</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <MapPin size={16} color="var(--color-brand-red)" />
                  <input
                    type="text"
                    placeholder="Where to?"
                    value={destination}
                    onChange={e => setDestination(e.target.value)}
                    style={{ border: 'none', outline: 'none', fontSize: 'var(--font-size-md)', color: 'var(--color-text-primary)', fontWeight: 600, width: '100%', background: 'transparent' }}
                  />
                </div>
              </div>

              {/* Date */}
              <div style={{ padding: 'var(--space-4) var(--space-5)', borderRight: '1px solid var(--color-border-default)' }}>
                <label style={{ fontFamily: 'var(--font-family-display)', fontSize: 10, fontWeight: 800, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.14em', display: 'block', marginBottom: 6 }}>Departure</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Calendar size={16} color="var(--color-brand-red)" />
                  <select value={date} onChange={e => setDate(e.target.value)} style={{ border: 'none', outline: 'none', fontSize: 'var(--font-size-md)', color: date ? 'var(--color-text-primary)' : 'var(--color-text-muted)', fontWeight: 600, background: 'transparent', cursor: 'pointer', width: '100%' }}>
                    <option value="">Any Month</option>
                    <option value="june">June 2026</option>
                    <option value="july">July 2026</option>
                    <option value="august">August 2026</option>
                    <option value="september">September 2026</option>
                  </select>
                </div>
              </div>

              {/* Duration */}
              <div style={{ padding: 'var(--space-4) var(--space-5)' }}>
                <label style={{ fontFamily: 'var(--font-family-display)', fontSize: 10, fontWeight: 800, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.14em', display: 'block', marginBottom: 6 }}>Duration</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Clock size={16} color="var(--color-brand-red)" />
                  <select value={duration} onChange={e => setDuration(e.target.value)} style={{ border: 'none', outline: 'none', fontSize: 'var(--font-size-md)', color: duration ? 'var(--color-text-primary)' : 'var(--color-text-muted)', fontWeight: 600, background: 'transparent', cursor: 'pointer', width: '100%' }}>
                    <option value="">Any Length</option>
                    <option value="3-5">3–5 Nights</option>
                    <option value="6-9">6–9 Nights</option>
                    <option value="10+">10+ Nights</option>
                  </select>
                </div>
              </div>

              {/* Search Button */}
              <div style={{ padding: 'var(--space-3)' }}>
                <button onClick={handleSearch} style={{
                  height: '100%', width: '100%', minWidth: 64,
                  background: 'var(--color-brand-red)',
                  color: '#fff',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'background var(--transition-fast), transform var(--transition-fast)',
                  fontFamily: 'var(--font-family-display)',
                  fontWeight: 800, gap: 8,
                  fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase',
                  padding: '0 var(--space-6)',
                }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = 'var(--color-brand-red-dark)'
                    ;(e.currentTarget as HTMLElement).style.transform = 'scale(0.98)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'var(--color-brand-red)'
                    ;(e.currentTarget as HTMLElement).style.transform = 'scale(1)'
                  }}
                >
                  <Search size={16} />
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div style={{ display: 'flex', gap: 'var(--space-8)', marginTop: 'var(--space-8)', flexWrap: 'wrap' }}>
            {[
              { value: '500+', label: 'Sailings & Packages' },
              { value: '100M+', label: 'Fanatics Members' },
              { value: '5%', label: 'FanCash Back' },
            ].map(stat => (
              <div key={stat.label} style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{
                  color: '#fff',
                  fontFamily: 'var(--font-family-display)',
                  fontWeight: 900,
                  fontSize: 'var(--font-size-3xl)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                }}>{stat.value}</span>
                <span style={{
                  color: 'rgba(255,255,255,0.55)',
                  fontFamily: 'var(--font-family-display)',
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  marginTop: 4,
                }}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Destinations ── */}
      <section style={{ padding: 'var(--space-16) 0', background: 'var(--color-background-surface)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 'var(--space-8)', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
            <div>
              <div style={eyebrow}>
                <span style={{ width: 24, height: 2, background: 'var(--color-brand-red)' }} />
                Where Will You Go?
              </div>
              <h2 style={sectionHeading}>Popular destinations</h2>
            </div>
            <button onClick={() => navigate('/search')} style={{
              display: 'flex', alignItems: 'center', gap: 6,
              color: '#0A0A0A',
              fontFamily: 'var(--font-family-display)',
              fontWeight: 800, fontSize: 12,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '12px 20px', borderRadius: 'var(--radius-md)',
              border: '2px solid #0A0A0A',
              background: 'transparent',
              transition: 'all var(--transition-fast)',
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = '#0A0A0A'
                ;(e.currentTarget as HTMLElement).style.color = '#fff'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'transparent'
                ;(e.currentTarget as HTMLElement).style.color = '#0A0A0A'
              }}
            >
              View All <ChevronRight size={14} />
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 'var(--space-3)' }}>
            {destinations.map(dest => (
              <button key={dest.name} onClick={() => navigate(`/search?destination=${dest.name}`)} style={{
                position: 'relative', overflow: 'hidden',
                borderRadius: 'var(--radius-lg)',
                aspectRatio: '4/3',
                border: 'none',
                cursor: 'pointer',
                display: 'block',
                width: '100%',
              }}
                onMouseEnter={e => (e.currentTarget.querySelector('.dest-img') as HTMLElement)!.style.transform = 'scale(1.08)'}
                onMouseLeave={e => (e.currentTarget.querySelector('.dest-img') as HTMLElement)!.style.transform = 'scale(1)'}
              >
                <div className="dest-img" style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: `url(${dest.image})`,
                  backgroundSize: 'cover', backgroundPosition: 'center',
                  transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)',
                }} />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.1) 55%)',
                }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 'var(--space-4)' }}>
                  <div style={{
                    color: '#fff',
                    fontFamily: 'var(--font-family-display)',
                    fontWeight: 900,
                    fontSize: 'var(--font-size-lg)',
                    textAlign: 'left',
                    letterSpacing: '-0.02em',
                    textTransform: 'uppercase',
                  }}>{dest.name}</div>
                  <div style={{
                    color: 'var(--color-brand-red)',
                    fontFamily: 'var(--font-family-display)',
                    fontSize: 10,
                    fontWeight: 800,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    textAlign: 'left',
                  }}>{dest.count} Options</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust Pillars ── */}
      <section style={{ padding: 'var(--space-16) 0', background: 'var(--color-background-page)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
            <div style={{ ...eyebrow, justifyContent: 'center' }}>
              <span style={{ width: 24, height: 2, background: 'var(--color-brand-red)' }} />
              Why Book With Us
              <span style={{ width: 24, height: 2, background: 'var(--color-brand-red)' }} />
            </div>
            <h2 style={{ ...sectionHeading, textAlign: 'center' }}>Travel benefits built for fans</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-4)' }}>
            {trustPillars.map(({ icon: Icon, title, description }) => (
              <div key={title} style={{
                background: 'var(--color-background-surface)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-6)',
                border: '1px solid var(--color-border-default)',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  width: 44, height: 44,
                  background: 'var(--color-brand-red)',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 'var(--space-4)',
                }}>
                  <Icon size={20} color="#fff" />
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-family)',
                  fontWeight: 900, fontSize: 'var(--font-size-lg)',
                  color: 'var(--color-text-primary)',
                  marginBottom: 'var(--space-2)',
                  letterSpacing: '-0.015em',
                  lineHeight: 1.15,
                }}>{title}</h3>
                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Packages ── */}
      <section style={{ padding: 'var(--space-16) 0', background: 'var(--color-background-surface)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 'var(--space-8)', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
            <div>
              <div style={eyebrow}>
                <span style={{ width: 24, height: 2, background: 'var(--color-brand-red)' }} />
                Hand-Picked For You
              </div>
              <h2 style={sectionHeading}>Fan favorite trips</h2>
            </div>
            <button onClick={() => navigate('/search')} style={{
              display: 'flex', alignItems: 'center', gap: 6,
              color: '#0A0A0A',
              fontFamily: 'var(--font-family-display)',
              fontWeight: 800, fontSize: 12,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '12px 20px', borderRadius: 'var(--radius-md)',
              border: '2px solid #0A0A0A',
              background: 'transparent',
              transition: 'all var(--transition-fast)',
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = '#0A0A0A'
                ;(e.currentTarget as HTMLElement).style.color = '#fff'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'transparent'
                ;(e.currentTarget as HTMLElement).style.color = '#0A0A0A'
              }}
            >
              View All <ChevronRight size={14} />
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: 'var(--space-5)' }}>
            {featured.map(pkg => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FanCash Banner ── */}
      <section style={{
        background: 'var(--color-brand-black-deep)',
        padding: 'var(--space-16) 0',
        position: 'relative', overflow: 'hidden',
        borderTop: '3px solid var(--color-brand-red)',
      }}>
        {/* Decorative — diagonal red stripe */}
        <div style={{
          position: 'absolute', top: '-20%', right: '-10%', width: 480, height: 480,
          background: 'radial-gradient(circle, rgba(229,61,46,0.18) 0%, rgba(229,61,46,0) 60%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-30%', left: '-10%', width: 420, height: 420,
          background: 'radial-gradient(circle, rgba(255,184,0,0.12) 0%, rgba(255,184,0,0) 60%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: 'rgba(255,184,0,0.12)',
            border: '1px solid rgba(255,184,0,0.4)',
            borderRadius: 'var(--radius-sm)',
            padding: '8px 14px',
            marginBottom: 'var(--space-5)',
          }}>
            <div style={{ width: 16, height: 16, borderRadius: '50%', background: 'var(--color-fancash)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ color: '#0A0A0A', fontFamily: 'var(--font-family-display)', fontSize: 10, fontWeight: 900 }}>F</span>
            </div>
            <span style={{
              color: 'var(--color-fancash)',
              fontFamily: 'var(--font-family-display)',
              fontWeight: 800, fontSize: 12,
              letterSpacing: '0.18em', textTransform: 'uppercase',
            }}>FanCash Rewards</span>
          </div>
          <h2 style={{
            color: '#fff',
            fontFamily: 'var(--font-family)',
            fontWeight: 900,
            fontSize: 'clamp(32px, 5vw, 60px)',
            letterSpacing: '-0.03em',
            lineHeight: 1.02,
            marginBottom: 'var(--space-4)',
            maxWidth: 720,
            margin: '0 auto var(--space-4)',
          }}>
            Every trip earns<br />more Fan gear.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(15px, 1.5vw, 18px)', maxWidth: 500, margin: '0 auto var(--space-8)', lineHeight: 1.6 }}>
            Earn 5% back in FanCash on all travel bookings. Use it toward jerseys, collectibles, game tickets, and more.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('/search')} style={{
              background: 'var(--color-brand-red)', color: '#fff',
              fontFamily: 'var(--font-family-display)',
              fontWeight: 800, fontSize: 14,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              padding: '16px 34px', borderRadius: 'var(--radius-md)',
              transition: 'background var(--transition-fast), transform var(--transition-fast)',
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'var(--color-brand-red-dark)'
                ;(e.currentTarget as HTMLElement).style.transform = 'scale(0.98)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'var(--color-brand-red)'
                ;(e.currentTarget as HTMLElement).style.transform = 'scale(1)'
              }}
            >
              Browse Trips
            </button>
            <button style={{
              background: 'transparent', color: '#fff',
              fontFamily: 'var(--font-family-display)',
              fontWeight: 800, fontSize: 14,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              padding: '16px 34px', borderRadius: 'var(--radius-md)',
              border: '2px solid rgba(255,255,255,0.3)',
              transition: 'all var(--transition-fast)',
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = '#fff'
                ;(e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.3)'
                ;(e.currentTarget as HTMLElement).style.background = 'transparent'
              }}
            >
              How FanCash Works
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 760px) {
          .search-fields { grid-template-columns: 1fr !important; }
          .search-fields > div { border-right: none !important; border-bottom: 1px solid var(--color-border-default); }
          .search-fields > div:last-child { border-bottom: none; }
        }
      `}</style>
    </div>
  )
}
