import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { SearchPage } from './pages/SearchPage'
import { PackageDetailPage } from './pages/PackageDetailPage'

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/package/:id" element={<PackageDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
