import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { MapPin, Clock, ChevronRight, ChevronLeft, Check, X, Ship, Calendar, Shield, Award } from 'lucide-react'
import { packages } from '../data/packages'
import { PackageCard } from '../components/PackageCard'

export function PackageDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const pkg = packages.find(p => p.id === id)

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedCabin, setSelectedCabin] = useState(0)
  const [selectedDate, setSelectedDate] = useState(0)
  const [guests, setGuests] = useState(2)
  const [activeTab, setActiveTab] = useState<'overview' | 'itinerary' | 'included'>('overview')

  if (!pkg) {
    return (
      <div style={{ paddingTop: 'var(--header-height)', textAlign: 'center', padding: 'var(--space-20)' }}>
        <h2>Trip not found</h2>
        <button onClick={() => navigate('/search')}>Back to Search</button>
      </div>
    )
  }

  const cabins = pkg.cabinTypes || pkg.roomTypes || []
  const selectedCabinData = cabins[selectedCabin]
  const basePrice = selectedCabinData?.price || pkg.price
  const totalPrice = basePrice * guests
  const fanCashEarned = Math.round(totalPrice * 0.05)
  const related = packages.filter(p => p.id !== pkg.id && p.region === pkg.region).slice(0, 3)

  return (
    <div style={{ paddingTop: 'var(--header-height)', background: 'var(--color-background-page)' }}>
      {/* ── Image Gallery ── */}
      <div style={{ background: '#000', position: 'relative', height: '60vh', overflow: 'hidden' }}>
        <img
          src={pkg.gallery[selectedImage] || pkg.image}
          alt={pkg.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.92 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,10,10,0.4) 0%, rgba(10,10,10,0.15) 40%, rgba(10,10,10,0.9) 100%)' }} />

        {/* Nav Arrows */}
        {pkg.gallery.length > 1 && (
          <>
            <button onClick={() => setSelectedImage(i => (i - 1 + pkg.gallery.length) % pkg.gallery.length)} style={{
              position: 'absolute', left: 'var(--space-5)', top: '50%', transform: 'translateY(-50%)',
              width: 44, height: 44, borderRadius: '50%',
              background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)',
              color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: '1px solid rgba(255,255,255,0.2)',
            }}>
              <ChevronLeft size={20} />
            </button>
            <button onClick={() => setSelectedImage(i => (i + 1) % pkg.gallery.length)} style={{
              position: 'absolute', right: 'var(--space-5)', top: '50%', transform: 'translateY(-50%)',
              width: 44, height: 44, borderRadius: '50%',
              background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)',
              color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: '1px solid rgba(255,255,255,0.2)',
            }}>
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* Thumbnail row */}
        <div style={{ position: 'absolute', bottom: 'var(--space-4)', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 'var(--space-2)' }}>
          {pkg.gallery.map((img, i) => (
            <button key={i} onClick={() => setSelectedImage(i)} style={{
              width: 60, height: 40, borderRadius: 'var(--radius-sm)',
              overflow: 'hidden', border: i === selectedImage ? '2px solid var(--color-brand-red)' : '2px solid transparent',
              transition: 'border-color var(--transition-fast)',
              flexShrink: 0,
            }}>
              <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </button>
          ))}
        </div>

        {/* Breadcrumb */}
        <div style={{ position: 'absolute', top: 'var(--space-4)', left: 'var(--space-8)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.7)', fontSize: 'var(--font-size-xs)' }}>
            <button onClick={() => navigate('/')} style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'var(--font-size-xs)' }}>Home</button>
            <ChevronRight size={12} />
            <button onClick={() => navigate('/search')} style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'var(--font-size-xs)' }}>Trips</button>
            <ChevronRight size={12} />
            <span style={{ color: '#fff' }}>{pkg.name}</span>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: 'var(--space-8) var(--space-8)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 'var(--space-8)', alignItems: 'flex-start' }}>

          {/* ── Left: Package Info ── */}
          <div>
            {/* Header */}
            <div style={{ marginBottom: 'var(--space-6)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-3)', flexWrap: 'wrap' }}>
                {pkg.badge && (
                  <span style={{
                    background: 'var(--color-brand-red)', color: '#fff',
                    fontFamily: 'var(--font-family-display)',
                    fontSize: 10, fontWeight: 900,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    padding: '5px 10px', borderRadius: 'var(--radius-sm)',
                  }}>
                    {pkg.badge}
                  </span>
                )}
                <span style={{
                  background: '#0A0A0A', color: '#fff',
                  fontFamily: 'var(--font-family-display)',
                  fontSize: 10, fontWeight: 900,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  padding: '5px 10px', borderRadius: 'var(--radius-sm)',
                }}>
                  {pkg.type}
                </span>
                {pkg.sportsTie && (
                  <span style={{
                    background: 'rgba(229,61,46,0.08)', color: 'var(--color-brand-red)',
                    border: '1px solid rgba(229,61,46,0.2)',
                    fontFamily: 'var(--font-family-display)',
                    fontSize: 10, fontWeight: 800,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    padding: '5px 10px', borderRadius: 'var(--radius-sm)',
                    display: 'flex', alignItems: 'center', gap: 5,
                  }}>
                    🏈 {pkg.sportsTie}
                  </span>
                )}
              </div>

              <h1 style={{
                fontFamily: 'var(--font-family)',
                fontWeight: 900,
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                color: 'var(--color-text-primary)',
                letterSpacing: '-0.025em',
                lineHeight: 1.05,
                marginBottom: 'var(--space-3)',
              }}>
                {pkg.name}
              </h1>

              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-5)', flexWrap: 'wrap', marginBottom: 'var(--space-3)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                  <MapPin size={15} color="var(--color-brand-red)" /> {pkg.destination}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                  <Clock size={15} color="var(--color-brand-red)" /> {pkg.duration} nights
                </span>
                {pkg.departurePort && (
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                    <Ship size={15} color="var(--color-brand-red)" /> Departs {pkg.departurePort}
                  </span>
                )}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} width="16" height="16" viewBox="0 0 16 16" fill={s <= Math.floor(pkg.rating) ? 'var(--color-brand-red)' : 'var(--color-neutral-200)'}>
                      <path d="M8 1l1.85 4.09L14 5.64l-3 3.1.71 4.26L8 10.77l-3.71 2.23.71-4.26-3-3.1 4.15-.55z" />
                    </svg>
                  ))}
                </div>
                <span style={{ fontWeight: 700, fontSize: 'var(--font-size-sm)', color: 'var(--color-text-primary)' }}>{pkg.rating}</span>
                <span style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)' }}>({pkg.reviewCount.toLocaleString()} reviews)</span>
              </div>
            </div>

            {/* Highlights strip */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 'var(--space-3)',
              background: 'var(--color-background-surface)',
              border: '1px solid var(--color-border-default)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-4)',
              marginBottom: 'var(--space-6)',
            }}>
              {pkg.highlights.map(h => (
                <div key={h} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 28, height: 28, background: 'rgba(229,61,46,0.08)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Check size={14} color="var(--color-brand-red)" />
                  </div>
                  <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 500, color: 'var(--color-text-primary)', lineHeight: 1.3 }}>{h}</span>
                </div>
              ))}
            </div>

            {/* Tabs */}
            <div style={{ borderBottom: '1px solid var(--color-border-default)', marginBottom: 'var(--space-6)', display: 'flex', gap: 'var(--space-1)' }}>
              {[
                { key: 'overview', label: 'Overview' },
                { key: 'itinerary', label: `Itinerary · ${pkg.duration} Days` },
                { key: 'included', label: "What's Included" },
              ].map(tab => (
                <button key={tab.key} onClick={() => setActiveTab(tab.key as typeof activeTab)} style={{
                  padding: 'var(--space-3) var(--space-4)',
                  fontFamily: 'var(--font-family-display)',
                  fontWeight: 800, fontSize: 12,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: activeTab === tab.key ? 'var(--color-text-primary)' : 'var(--color-text-muted)',
                  borderBottom: activeTab === tab.key ? '3px solid var(--color-brand-red)' : '3px solid transparent',
                  background: 'transparent',
                  transition: 'all var(--transition-fast)',
                  whiteSpace: 'nowrap',
                }}>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === 'overview' && (
              <div>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-md)', lineHeight: 1.8, marginBottom: 'var(--space-6)' }}>
                  {pkg.description}
                </p>

                {/* Trust Signals */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-4)' }}>
                  {[
                    { icon: Shield, text: 'Best Price Guarantee', sub: 'Matched or refunded' },
                    { icon: Award, text: 'FanCash Earned', sub: `$${fanCashEarned} on this trip` },
                    { icon: Calendar, text: 'Flexible Dates', sub: `${pkg.departureDates.length} departure options` },
                  ].map(({ icon: Icon, text, sub }) => (
                    <div key={text} style={{ background: 'var(--color-background-surface)', border: '1px solid var(--color-border-default)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-4)', textAlign: 'center' }}>
                      <div style={{ width: 40, height: 40, background: 'rgba(229,61,46,0.07)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-2)' }}>
                        <Icon size={18} color="var(--color-brand-red)" />
                      </div>
                      <div style={{ fontWeight: 600, fontSize: 'var(--font-size-xs)', color: 'var(--color-text-primary)', marginBottom: 2 }}>{text}</div>
                      <div style={{ fontSize: 11, color: 'var(--color-text-muted)' }}>{sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'itinerary' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
                {pkg.itinerary.map((day, i) => (
                  <div key={i} style={{
                    display: 'flex', gap: 'var(--space-4)',
                    padding: 'var(--space-4)',
                    background: 'var(--color-background-surface)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--color-border-default)',
                  }}>
                    <div style={{ flexShrink: 0, textAlign: 'center', width: 48 }}>
                      <div style={{ fontWeight: 800, fontSize: 'var(--font-size-lg)', color: 'var(--color-brand-red)', lineHeight: 1 }}>{day.day}</div>
                      <div style={{ fontSize: 10, color: 'var(--color-text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>Day</div>
                    </div>
                    <div style={{ flex: 1, borderLeft: '2px solid var(--color-border-default)', paddingLeft: 'var(--space-4)' }}>
                      <div style={{ fontWeight: 700, fontSize: 'var(--font-size-sm)', color: 'var(--color-text-primary)', marginBottom: 4, display: 'flex', alignItems: 'center', gap: 6 }}>
                        <MapPin size={13} color="var(--color-brand-red)" />
                        {day.port}
                      </div>
                      <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.5, marginBottom: day.arrive || day.depart ? 6 : 0 }}>{day.description}</p>
                      {(day.arrive || day.depart) && (
                        <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
                          {day.arrive && <span style={{ fontSize: 11, color: 'var(--color-text-muted)' }}>Arrive: {day.arrive}</span>}
                          {day.depart && <span style={{ fontSize: 11, color: 'var(--color-text-muted)' }}>Depart: {day.depart}</span>}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'included' && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)' }}>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: 'var(--font-size-md)', color: 'var(--color-text-primary)', marginBottom: 'var(--space-4)', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Check size={18} color="var(--color-success)" /> What's included
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                    {pkg.included.map(item => (
                      <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)' }}>
                        <div style={{ width: 18, height: 18, background: 'rgba(34,197,94,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                          <Check size={11} color="var(--color-success)" />
                        </div>
                        <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-primary)' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: 'var(--font-size-md)', color: 'var(--color-text-primary)', marginBottom: 'var(--space-4)', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <X size={18} color="var(--color-neutral-400)" /> Not included
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                    {pkg.notIncluded.map(item => (
                      <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)' }}>
                        <div style={{ width: 18, height: 18, background: 'var(--color-neutral-100)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                          <X size={11} color="var(--color-neutral-400)" />
                        </div>
                        <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ── Right: Booking Widget ── */}
          <div style={{ position: 'sticky', top: 'calc(var(--header-height) + var(--space-4))' }}>
            <div style={{
              background: 'var(--color-background-surface)',
              border: '1px solid var(--color-border-default)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
            }}>
              {/* Header */}
              <div style={{ background: 'var(--color-brand-black)', padding: 'var(--space-5)', position: 'relative', overflow: 'hidden' }}>
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                  background: 'var(--color-brand-red)',
                }} />
                <div style={{
                  fontFamily: 'var(--font-family-display)',
                  fontSize: 10, fontWeight: 800,
                  color: 'rgba(255,255,255,0.55)',
                  letterSpacing: '0.18em', textTransform: 'uppercase',
                  marginBottom: 6,
                }}>Starting From</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 4 }}>
                  <span style={{
                    color: '#fff',
                    fontFamily: 'var(--font-family-display)',
                    fontWeight: 900, fontSize: 'var(--font-size-5xl)',
                    letterSpacing: '-0.035em', lineHeight: 1,
                  }}>${basePrice.toLocaleString()}</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'var(--font-size-sm)' }}>/ person</span>
                </div>
                {pkg.originalPrice && (
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'var(--font-size-sm)', textDecoration: 'line-through' }}>
                    was ${pkg.originalPrice.toLocaleString()} / person
                  </div>
                )}

                {/* FanCash */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  background: 'rgba(255,184,0,0.12)',
                  border: '1px solid rgba(255,184,0,0.3)',
                  borderRadius: 'var(--radius-md)',
                  padding: '8px 12px',
                  marginTop: 'var(--space-3)',
                }}>
                  <Award size={16} color="var(--color-fancash)" />
                  <span style={{ color: '#fff', fontSize: 'var(--font-size-sm)', fontWeight: 600 }}>
                    Earn <span style={{ color: 'var(--color-fancash)', fontFamily: 'var(--font-family-display)', fontWeight: 900 }}>${fanCashEarned}</span> FanCash on this trip
                  </span>
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: 'var(--space-5)' }}>
                {/* Cabin/Room Type */}
                {cabins.length > 0 && (
                  <div style={{ marginBottom: 'var(--space-4)' }}>
                    <label style={{ fontSize: 11, fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: 'var(--space-2)' }}>
                      {pkg.cabinTypes ? 'Cabin Type' : 'Room Type'}
                    </label>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                      {cabins.map((cabin, i) => (
                        <button key={i} onClick={() => setSelectedCabin(i)} style={{
                          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                          padding: 'var(--space-3)',
                          borderRadius: 'var(--radius-md)',
                          border: selectedCabin === i ? '2px solid var(--color-brand-red)' : '1px solid var(--color-border-default)',
                          background: selectedCabin === i ? 'rgba(229,61,46,0.04)' : 'transparent',
                          cursor: 'pointer',
                          transition: 'all var(--transition-fast)',
                          textAlign: 'left',
                        }}>
                          <div>
                            <div style={{ fontWeight: 600, fontSize: 'var(--font-size-sm)', color: 'var(--color-text-primary)' }}>{cabin.name}</div>
                            <div style={{ fontSize: 11, color: 'var(--color-text-muted)', marginTop: 1 }}>Up to {cabin.maxGuests} guests</div>
                          </div>
                          <div style={{ fontWeight: 700, fontSize: 'var(--font-size-md)', color: selectedCabin === i ? 'var(--color-brand-red)' : 'var(--color-text-primary)' }}>
                            ${cabin.price.toLocaleString()}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Departure Date */}
                <div style={{ marginBottom: 'var(--space-4)' }}>
                  <label style={{ fontSize: 11, fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: 'var(--space-2)' }}>
                    Departure Date
                  </label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                    {pkg.departureDates.slice(0, 4).map((date, i) => (
                      <button key={i} onClick={() => setSelectedDate(i)} style={{
                        display: 'flex', alignItems: 'center', gap: 'var(--space-2)',
                        padding: 'var(--space-3)',
                        borderRadius: 'var(--radius-md)',
                        border: selectedDate === i ? '2px solid var(--color-brand-red)' : '1px solid var(--color-border-default)',
                        background: selectedDate === i ? 'rgba(229,61,46,0.04)' : 'transparent',
                        cursor: 'pointer',
                        transition: 'all var(--transition-fast)',
                      }}>
                        <Calendar size={14} color={selectedDate === i ? 'var(--color-brand-red)' : 'var(--color-text-muted)'} />
                        <span style={{ fontWeight: selectedDate === i ? 600 : 400, fontSize: 'var(--font-size-sm)', color: 'var(--color-text-primary)' }}>{date}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Guests */}
                <div style={{ marginBottom: 'var(--space-5)' }}>
                  <label style={{ fontSize: 11, fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: 'var(--space-2)' }}>
                    Guests
                  </label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', background: 'var(--color-background-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-2)' }}>
                    <button onClick={() => setGuests(g => Math.max(1, g - 1))} style={{
                      width: 32, height: 32, borderRadius: 'var(--radius-sm)',
                      background: guests > 1 ? 'var(--color-brand-navy)' : 'var(--color-neutral-200)',
                      color: guests > 1 ? '#fff' : 'var(--color-text-muted)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 18, fontWeight: 300, flexShrink: 0,
                    }}>−</button>
                    <div style={{ flex: 1, textAlign: 'center' }}>
                      <span style={{ fontWeight: 700, fontSize: 'var(--font-size-lg)', color: 'var(--color-text-primary)' }}>{guests}</span>
                      <span style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)', marginLeft: 6 }}>{guests === 1 ? 'guest' : 'guests'}</span>
                    </div>
                    <button onClick={() => setGuests(g => Math.min(selectedCabinData?.maxGuests || 6, g + 1))} style={{
                      width: 32, height: 32, borderRadius: 'var(--radius-sm)',
                      background: 'var(--color-brand-navy)', color: '#fff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 18, fontWeight: 300, flexShrink: 0,
                    }}>+</button>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div style={{
                  background: 'var(--color-background-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-4)',
                  marginBottom: 'var(--space-4)',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-2)' }}>
                    <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>${basePrice.toLocaleString()} × {guests} guests</span>
                    <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 500, color: 'var(--color-text-primary)' }}>${totalPrice.toLocaleString()}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-3)', paddingBottom: 'var(--space-3)', borderBottom: '1px solid var(--color-border-default)' }}>
                    <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>Taxes & port fees</span>
                    <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 500, color: 'var(--color-text-primary)' }}>Included</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 700, fontSize: 'var(--font-size-md)', color: 'var(--color-text-primary)' }}>Total</span>
                    <span style={{ fontWeight: 800, fontSize: 'var(--font-size-xl)', color: 'var(--color-text-primary)' }}>${totalPrice.toLocaleString()}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 4 }}>
                    <span style={{ fontSize: 11, color: 'var(--color-success)', fontWeight: 600 }}>+ ${fanCashEarned} FanCash earned</span>
                  </div>
                </div>

                {/* Book Button */}
                <button style={{
                  width: '100%', padding: 'var(--space-4)',
                  background: 'var(--color-brand-red)', color: '#fff',
                  fontFamily: 'var(--font-family-display)',
                  fontWeight: 900, fontSize: 14,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  borderRadius: 'var(--radius-md)',
                  transition: 'background var(--transition-fast), transform var(--transition-fast)',
                  marginBottom: 'var(--space-3)',
                }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = 'var(--color-brand-red-dark)'
                    ;(e.currentTarget as HTMLElement).style.transform = 'scale(0.99)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'var(--color-brand-red)'
                    ;(e.currentTarget as HTMLElement).style.transform = 'scale(1)'
                  }}
                >
                  Reserve Now
                </button>

                <div style={{ display: 'flex', gap: 'var(--space-2)', justifyContent: 'center' }}>
                  <Shield size={14} color="var(--color-text-muted)" />
                  <span style={{ fontSize: 11, color: 'var(--color-text-muted)', textAlign: 'center' }}>Secure checkout · Best price guaranteed · Free cancellation on most sailings</span>
                </div>

                {/* FanCash Apply */}
                <div style={{
                  marginTop: 'var(--space-4)',
                  borderTop: '1px solid var(--color-border-default)',
                  paddingTop: 'var(--space-4)',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 'var(--font-size-xs)', color: 'var(--color-text-primary)' }}>Apply FanCash</div>
                    <div style={{ fontSize: 11, color: 'var(--color-text-muted)' }}>Balance: $47.50 available</div>
                  </div>
                  <button style={{
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(255,184,0,0.1)',
                    border: '1px solid rgba(255,184,0,0.3)',
                    color: 'var(--color-fancash-dark)',
                    fontSize: 12, fontWeight: 700,
                  }}>
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Related Trips ── */}
        {related.length > 0 && (
          <div style={{ marginTop: 'var(--space-16)' }}>
            <div style={{
              color: 'var(--color-brand-red)',
              fontFamily: 'var(--font-family-display)',
              fontWeight: 800, fontSize: 12,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              marginBottom: 'var(--space-2)',
              display: 'inline-flex', alignItems: 'center', gap: 8,
            }}>
              <span style={{ width: 24, height: 2, background: 'var(--color-brand-red)' }} />
              Keep Exploring
            </div>
            <h2 style={{
              fontFamily: 'var(--font-family)',
              fontWeight: 900, fontSize: 'clamp(28px, 3.5vw, 40px)',
              color: 'var(--color-text-primary)', marginBottom: 'var(--space-6)',
              letterSpacing: '-0.025em',
              lineHeight: 1.05,
            }}>
              More trips you'll love
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--space-5)' }}>
              {related.map(p => <PackageCard key={p.id} pkg={p} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
