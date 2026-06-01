import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, SlidersHorizontal, X, ChevronDown, LayoutGrid, List, Ship, Palmtree, Mountain } from 'lucide-react'
import { packages, regions } from '../data/packages'
import { PackageCard } from '../components/PackageCard'

const priceRanges = [
  { label: 'Under $750', min: 0, max: 750 },
  { label: '$750 – $1,200', min: 750, max: 1200 },
  { label: '$1,200 – $2,000', min: 1200, max: 2000 },
  { label: '$2,000+', min: 2000, max: Infinity },
]

const durationRanges = [
  { label: '3–5 nights', min: 3, max: 5 },
  { label: '6–9 nights', min: 6, max: 9 },
  { label: '10+ nights', min: 10, max: Infinity },
]

export function SearchPage() {
  const [searchParams] = useSearchParams()
  const [layout, setLayout] = useState<'grid' | 'list'>('grid')
  const [query, setQuery] = useState(searchParams.get('destination') || '')
  const [selectedType, setSelectedType] = useState(searchParams.get('type') || 'all')
  const [selectedRegion, setSelectedRegion] = useState('all')
  const [selectedPrice, setSelectedPrice] = useState<number | null>(null)
  const [selectedDuration, setSelectedDuration] = useState<number | null>(null)
  const [sortBy, setSortBy] = useState<'recommended' | 'price-asc' | 'price-desc' | 'rating'>('recommended')

  const filtered = useMemo(() => {
    let result = [...packages]

    if (query) {
      const q = query.toLowerCase()
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.destination.toLowerCase().includes(q) ||
        p.region.toLowerCase().includes(q)
      )
    }

    if (selectedType !== 'all') {
      result = result.filter(p => p.type === selectedType)
    }

    if (selectedRegion !== 'all') {
      result = result.filter(p => p.region.toLowerCase() === selectedRegion.toLowerCase())
    }

    if (selectedPrice !== null) {
      const range = priceRanges[selectedPrice]
      result = result.filter(p => p.price >= range.min && p.price <= range.max)
    }

    if (selectedDuration !== null) {
      const range = durationRanges[selectedDuration]
      result = result.filter(p => p.duration >= range.min && p.duration <= range.max)
    }

    if (sortBy === 'price-asc') result.sort((a, b) => a.price - b.price)
    else if (sortBy === 'price-desc') result.sort((a, b) => b.price - a.price)
    else if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating)

    return result
  }, [query, selectedType, selectedRegion, selectedPrice, selectedDuration, sortBy])

  const activeFilterCount = [
    selectedType !== 'all',
    selectedRegion !== 'all',
    selectedPrice !== null,
    selectedDuration !== null,
  ].filter(Boolean).length

  const clearAll = () => {
    setSelectedType('all')
    setSelectedRegion('all')
    setSelectedPrice(null)
    setSelectedDuration(null)
    setQuery('')
  }

  const typeOptions: { value: string; label: string; Icon?: typeof Ship }[] = [
    { value: 'all', label: 'All' },
    { value: 'cruise', label: 'Cruises', Icon: Ship },
    { value: 'resort', label: 'Resorts', Icon: Palmtree },
    { value: 'adventure', label: 'Adventures', Icon: Mountain },
  ]

  return (
    <div style={{ paddingTop: 'var(--header-height)', minHeight: '100vh', background: 'var(--color-background-page)' }}>
      {/* ── Search Bar Header ── */}
      <div style={{
        background: 'var(--color-brand-black)',
        padding: 'var(--space-5) 0',
        borderBottom: '3px solid var(--color-brand-red)',
      }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center', flexWrap: 'wrap' }}>
            {/* Search Input */}
            <div style={{
              flex: 1, minWidth: 240,
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 'var(--radius-md)',
              display: 'flex', alignItems: 'center', gap: 'var(--space-2)',
              padding: '0 var(--space-3)',
            }}>
              <Search size={16} color="rgba(255,255,255,0.5)" />
              <input
                type="text"
                placeholder="Search destinations, cruises, resorts..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                style={{
                  flex: 1, border: 'none', outline: 'none',
                  background: 'transparent',
                  color: '#fff', fontSize: 'var(--font-size-sm)',
                  padding: 'var(--space-3) 0',
                }}
              />
              {query && (
                <button onClick={() => setQuery('')} style={{ color: 'rgba(255,255,255,0.5)', display: 'flex' }}>
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Type Pills */}
            <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
              {typeOptions.map(opt => {
                const active = selectedType === opt.value
                return (
                  <button key={opt.value} onClick={() => setSelectedType(opt.value)} style={{
                    padding: '8px 14px',
                    borderRadius: 'var(--radius-md)',
                    fontFamily: 'var(--font-family-display)',
                    fontSize: 11, fontWeight: 800,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    background: active ? 'var(--color-brand-red)' : 'rgba(255,255,255,0.06)',
                    color: active ? '#fff' : 'rgba(255,255,255,0.75)',
                    border: active ? '1px solid var(--color-brand-red)' : '1px solid rgba(255,255,255,0.12)',
                    transition: 'all var(--transition-fast)',
                    whiteSpace: 'nowrap',
                    display: 'flex', alignItems: 'center', gap: 6,
                  }}>
                    {opt.Icon && <opt.Icon size={12} />}
                    {opt.label}
                  </button>
                )
              })}
            </div>

            {/* Sort */}
            <div style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 'var(--radius-md)',
              display: 'flex', alignItems: 'center', gap: 6,
              padding: '0 var(--space-3)',
            }}>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as typeof sortBy)}
                style={{
                  background: 'transparent', border: 'none', outline: 'none',
                  color: 'rgba(255,255,255,0.85)', fontSize: 12, fontWeight: 600,
                  padding: 'var(--space-3) 0', cursor: 'pointer',
                  fontFamily: 'var(--font-family)',
                }}
              >
                <option value="recommended" style={{ background: '#0A0A0A' }}>Recommended</option>
                <option value="price-asc" style={{ background: '#0A0A0A' }}>Price: Low to High</option>
                <option value="price-desc" style={{ background: '#0A0A0A' }}>Price: High to Low</option>
                <option value="rating" style={{ background: '#0A0A0A' }}>Top Rated</option>
              </select>
            </div>

            {/* Layout Toggle */}
            <div style={{ display: 'flex', background: 'rgba(255,255,255,0.06)', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.12)' }}>
              {(['grid', 'list'] as const).map(l => (
                <button key={l} onClick={() => setLayout(l)} style={{
                  padding: 'var(--space-2) var(--space-3)',
                  background: layout === l ? 'var(--color-brand-red)' : 'transparent',
                  color: layout === l ? '#fff' : 'rgba(255,255,255,0.55)',
                  transition: 'all var(--transition-fast)',
                }}>
                  {l === 'grid' ? <LayoutGrid size={15} /> : <List size={15} />}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: 'var(--space-6) var(--space-8)', display: 'flex', gap: 'var(--space-6)', alignItems: 'flex-start' }}>
        {/* ── Filter Sidebar ── */}
        <aside style={{
          width: 264, flexShrink: 0,
          background: 'var(--color-background-surface)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--color-border-default)',
          padding: 'var(--space-5)',
          position: 'sticky', top: 'calc(var(--header-height) + var(--space-4))',
        }} className="filter-sidebar">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-5)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
              <SlidersHorizontal size={16} color="#0A0A0A" />
              <span style={{
                fontFamily: 'var(--font-family-display)',
                fontWeight: 900, fontSize: 'var(--font-size-md)',
                color: 'var(--color-text-primary)',
                letterSpacing: '-0.01em',
              }}>Filters</span>
              {activeFilterCount > 0 && (
                <span style={{
                  background: 'var(--color-brand-red)', color: '#fff',
                  fontFamily: 'var(--font-family-display)',
                  fontSize: 10, fontWeight: 900,
                  padding: '2px 7px', borderRadius: 'var(--radius-pill)',
                }}>
                  {activeFilterCount}
                </span>
              )}
            </div>
            {activeFilterCount > 0 && (
              <button onClick={clearAll} style={{
                color: 'var(--color-brand-red)',
                fontFamily: 'var(--font-family-display)',
                fontSize: 11, fontWeight: 800,
                letterSpacing: '0.08em', textTransform: 'uppercase',
              }}>Clear All</button>
            )}
          </div>

          {/* Region */}
          <FilterSection title="Destination">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
              {['all', ...regions.filter(r => r !== 'All')].map(r => (
                <label key={r} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', cursor: 'pointer', padding: '6px 4px', borderRadius: 'var(--radius-sm)' }}>
                  <input
                    type="radio" name="region"
                    checked={selectedRegion === r.toLowerCase()}
                    onChange={() => setSelectedRegion(r === 'all' ? 'all' : r.toLowerCase())}
                    style={{ accentColor: 'var(--color-brand-red)' }}
                  />
                  <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-primary)', fontWeight: selectedRegion === r.toLowerCase() ? 600 : 400 }}>
                    {r === 'all' ? 'All Destinations' : r}
                  </span>
                </label>
              ))}
            </div>
          </FilterSection>

          {/* Price */}
          <FilterSection title="Price Per Person">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
              {priceRanges.map((range, i) => (
                <label key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', cursor: 'pointer', padding: '6px 4px' }}>
                  <input
                    type="radio" name="price"
                    checked={selectedPrice === i}
                    onChange={() => setSelectedPrice(selectedPrice === i ? null : i)}
                    style={{ accentColor: 'var(--color-brand-red)' }}
                  />
                  <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-primary)', fontWeight: selectedPrice === i ? 600 : 400 }}>
                    {range.label}
                  </span>
                </label>
              ))}
            </div>
          </FilterSection>

          {/* Duration */}
          <FilterSection title="Trip Length">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
              {durationRanges.map((range, i) => (
                <label key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', cursor: 'pointer', padding: '6px 4px' }}>
                  <input
                    type="radio" name="duration"
                    checked={selectedDuration === i}
                    onChange={() => setSelectedDuration(selectedDuration === i ? null : i)}
                    style={{ accentColor: 'var(--color-brand-red)' }}
                  />
                  <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-primary)', fontWeight: selectedDuration === i ? 600 : 400 }}>
                    {range.label}
                  </span>
                </label>
              ))}
            </div>
          </FilterSection>

          {/* FanCash Callout */}
          <div style={{
            background: '#0A0A0A',
            border: '1px solid rgba(255,184,0,0.4)',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--space-4)',
            marginTop: 'var(--space-4)',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: -30, right: -30,
              width: 90, height: 90, borderRadius: '50%',
              background: 'rgba(255,184,0,0.15)',
            }} />
            <div style={{
              fontFamily: 'var(--font-family-display)',
              fontWeight: 800, fontSize: 10,
              color: 'var(--color-fancash)',
              letterSpacing: '0.16em', textTransform: 'uppercase',
              marginBottom: 6, position: 'relative',
            }}>Your FanCash Balance</div>
            <div style={{
              fontFamily: 'var(--font-family-display)',
              fontSize: 26, fontWeight: 900,
              color: '#fff', marginBottom: 2,
              letterSpacing: '-0.03em', position: 'relative',
            }}>$47.50</div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', position: 'relative' }}>Apply at checkout</div>
          </div>
        </aside>

        {/* ── Results ── */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Results header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-5)', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
            <div>
              <span style={{
                fontFamily: 'var(--font-family-display)',
                fontWeight: 900, fontSize: 'var(--font-size-2xl)',
                color: 'var(--color-text-primary)',
                letterSpacing: '-0.02em',
              }}>
                {filtered.length} <span style={{ color: 'var(--color-brand-red)' }}>Trips</span>
              </span>
              {query && (
                <span style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)', marginLeft: 8 }}>
                  for "{query}"
                </span>
              )}
            </div>
            <div style={{
              fontFamily: 'var(--font-family-display)',
              fontSize: 11, color: 'var(--color-text-muted)',
              fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
            }}>
              Earn FanCash on Every Booking
            </div>
          </div>

          {/* Active filters chips */}
          {activeFilterCount > 0 && (
            <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap', marginBottom: 'var(--space-4)' }}>
              {selectedType !== 'all' && (
                <FilterChip label={`Type: ${selectedType}`} onRemove={() => setSelectedType('all')} />
              )}
              {selectedRegion !== 'all' && (
                <FilterChip label={`Region: ${selectedRegion}`} onRemove={() => setSelectedRegion('all')} />
              )}
              {selectedPrice !== null && (
                <FilterChip label={priceRanges[selectedPrice].label} onRemove={() => setSelectedPrice(null)} />
              )}
              {selectedDuration !== null && (
                <FilterChip label={durationRanges[selectedDuration].label} onRemove={() => setSelectedDuration(null)} />
              )}
            </div>
          )}

          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: 'var(--space-20)', background: 'var(--color-background-surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-default)' }}>
              <div style={{ fontSize: 48, marginBottom: 'var(--space-4)' }}>🌊</div>
              <h3 style={{
                fontFamily: 'var(--font-family)',
                fontWeight: 900, fontSize: 'var(--font-size-xl)',
                marginBottom: 'var(--space-2)',
                color: 'var(--color-text-primary)',
                letterSpacing: '-0.02em',
              }}>No trips found</h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)', marginBottom: 'var(--space-5)' }}>Try adjusting your filters or searching for a different destination.</p>
              <button onClick={clearAll} style={{
                background: 'var(--color-brand-red)', color: '#fff',
                fontFamily: 'var(--font-family-display)',
                fontWeight: 800, fontSize: 12,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '12px 24px', borderRadius: 'var(--radius-md)',
              }}>
                Clear All Filters
              </button>
            </div>
          ) : (
            <div style={{
              display: layout === 'grid' ? 'grid' : 'flex',
              gridTemplateColumns: layout === 'grid' ? 'repeat(auto-fill, minmax(290px, 1fr))' : undefined,
              flexDirection: layout === 'list' ? 'column' : undefined,
              gap: 'var(--space-5)',
            }}>
              {filtered.map(pkg => (
                <PackageCard key={pkg.id} pkg={pkg} layout={layout} />
              ))}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .filter-sidebar { display: none !important; }
        }
      `}</style>
    </div>
  )
}

function FilterSection({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(true)
  return (
    <div style={{ borderBottom: '1px solid var(--color-border-default)', paddingBottom: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
      <button onClick={() => setOpen(!open)} style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        width: '100%', marginBottom: open ? 'var(--space-3)' : 0,
      }}>
        <span style={{
          fontFamily: 'var(--font-family-display)',
          fontWeight: 800, fontSize: 11,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          color: 'var(--color-text-primary)',
        }}>{title}</span>
        <ChevronDown size={14} color="var(--color-text-muted)" style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform var(--transition-fast)' }} />
      </button>
      {open && children}
    </div>
  )
}

function FilterChip({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      background: '#0A0A0A',
      color: '#fff',
      fontFamily: 'var(--font-family-display)',
      fontSize: 11, fontWeight: 700,
      letterSpacing: '0.06em',
      padding: '6px 10px 6px 12px',
      borderRadius: 'var(--radius-md)',
    }}>
      {label}
      <button onClick={onRemove} style={{ color: 'rgba(255,255,255,0.7)', display: 'flex', marginLeft: 2 }}>
        <X size={12} />
      </button>
    </div>
  )
}
