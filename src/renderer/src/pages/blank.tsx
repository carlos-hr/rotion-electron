import { Link } from 'react-router-dom'

export function Blank() {
  return (
    <main className="flex-1 flex flex-items-center justify-center text-rotion-400">
      Selecione ou crie um documento
      <Link to="/document">doc</Link>
    </main>
  )
}
