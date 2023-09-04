import { Repo } from '@/components/Repo'
import Link from 'next/link'
import { Suspense } from 'react'

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link href="/">Home</Link>

      <Suspense fallback={<h1>Carregando repositórios...</h1>}>
        <Repo />
      </Suspense>
    </div>
  )
}
