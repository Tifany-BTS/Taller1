import { AppHeader } from './components/app-header'
import { MediaGrid } from './components/media-grid'
import { mediaItems } from './data/media-items'

function App() {
  return (
    <>
      <AppHeader />

      <main className="page-container">
        <h2>Catálogo destacado</h2>
        <MediaGrid items={mediaItems} />
      </main>
    </>
  )
}

export default App
