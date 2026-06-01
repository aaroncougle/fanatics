import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ShoppingCart, User, Menu, X, Search, Heart } from 'lucide-react'
import { Logo } from './Logo'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = !isHome || scrolled || menuOpen

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      transition: 'background 240ms cubic-bezier(0.4,0,0.2,1), box-shadow 240ms cubic-bezier(0.4,0,0.2,1)',
      background: solid
        ? 'var(--color-brand-black)'
        : 'linear-gradient(to bottom, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.55) 70%, rgba(10,10,10,0) 100%)',
      boxShadow: solid ? 'var(--shadow-inverse)' : 'none',
    }}>
      {/* Top accent stripe — classic Fanatics retail flourish */}
      <div style={{
        height: 'var(--header-accent-height)',
        background: 'linear-gradient(90deg, var(--color-brand-red) 0%, var(--color-brand-red) 40%, var(--color-brand-red-dark) 100%)',
      }} />

      <div className="container" style={{ display: 'flex', alignItems: 'center', height: 'var(--header-height)', gap: 'var(--space-6)' }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }} aria-label="Fanatics Travel — Home">
          <Logo variant="light" height={26} />
        </Link>

        {/* Nav Links — Desktop */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-1)', flex: 1 }} className="desktop-nav">
          {[
            { label: 'Cruises', href: '/search?type=cruise' },
            { label: 'Resorts', href: '/search?type=resort' },
            { label: 'Adventures', href: '/search?type=adventure' },
            { label: 'Deals', href: '/search?filter=deals' },
            { label: 'FanCash', href: '/search?filter=fancash' },
          ].map(item => (
            <Link key={item.label} to={item.href} style={{
              color: 'rgba(255,255,255,0.82)',
              fontFamily: 'var(--font-family-display)',
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              padding: 'var(--space-3) var(--space-3)',
              transition: 'color var(--transition-fast)',
              display: 'flex', alignItems: 'center',
              position: 'relative',
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.color = '#fff'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.82)'
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginLeft: 'auto' }}>
          {/* Search icon */}
          <button aria-label="Search" style={{
            width: 38, height: 38,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'rgba(255,255,255,0.8)',
            transition: 'color var(--transition-fast)',
          }}
            onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
          >
            <Search size={18} />
          </button>

          {/* FanCash Balance — pill */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 6,
            background: 'rgba(255,184,0,0.12)',
            border: '1px solid rgba(255,184,0,0.35)',
            borderRadius: 'var(--radius-pill)',
            padding: '5px 12px 5px 10px',
            cursor: 'pointer',
            transition: 'background var(--transition-fast)',
          }} className="fancash-pill"
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,184,0,0.2)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,184,0,0.12)')}
          >
            <div style={{ width: 14, height: 14, borderRadius: '50%', background: 'var(--color-fancash)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ color: '#0A0A0A', fontSize: 9, fontWeight: 900 }}>F</span>
            </div>
            <span style={{ color: 'var(--color-fancash)', fontSize: 13, fontWeight: 800, fontFamily: 'var(--font-family-display)' }}>$47.50</span>
          </div>

          {/* Wishlist */}
          <button aria-label="Wishlist" style={{
            width: 38, height: 38, borderRadius: 'var(--radius-md)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'rgba(255,255,255,0.8)',
          }}
            onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
          >
            <Heart size={18} />
          </button>

          {/* Account */}
          <button aria-label="Account" style={{
            width: 38, height: 38, borderRadius: 'var(--radius-md)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'rgba(255,255,255,0.8)',
          }}
            onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
          >
            <User size={18} />
          </button>

          {/* Cart */}
          <button aria-label="Cart" style={{
            width: 38, height: 38, borderRadius: 'var(--radius-md)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'rgba(255,255,255,0.8)',
            position: 'relative',
          }}
            onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
          >
            <ShoppingCart size={18} />
            <span style={{
              position: 'absolute', top: 4, right: 4,
              minWidth: 14, height: 14, borderRadius: 7,
              background: 'var(--color-brand-red)', color: '#fff',
              fontSize: 9, fontWeight: 800,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '0 4px', lineHeight: 1,
            }}>0</span>
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            style={{
              width: 38, height: 38, borderRadius: 'var(--radius-md)',
              display: 'none', alignItems: 'center', justifyContent: 'center',
              color: '#fff',
              background: 'rgba(255,255,255,0.08)',
            }}
            className="mobile-menu-btn"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: 'var(--color-brand-black-deep)',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          padding: 'var(--space-4)',
        }}>
          {[
            { label: 'Cruises', href: '/search?type=cruise' },
            { label: 'Resorts', href: '/search?type=resort' },
            { label: 'Adventures', href: '/search?type=adventure' },
            { label: 'Deals', href: '/search?filter=deals' },
            { label: 'FanCash', href: '/search?filter=fancash' },
          ].map(item => (
            <Link key={item.label} to={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                color: 'rgba(255,255,255,0.9)',
                fontFamily: 'var(--font-family-display)',
                fontWeight: 700, fontSize: 14,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: 'var(--space-4) var(--space-2)',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .fancash-pill { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
