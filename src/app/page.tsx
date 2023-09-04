import { User } from '@/components/User'
import Link from 'next/link'
import { Suspense } from 'react'

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/dashboard">Dashboard</Link>
      <Suspense fallback={<h1>Carregando usuário...</h1>}>
        <User />
      </Suspense>
    </div>
  )
}
