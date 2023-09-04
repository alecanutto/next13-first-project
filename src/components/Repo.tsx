export async function Repo() {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const response = await fetch('https://api.publicapis.org/entries', {
    cache: 'no-store',
  })
  const repos = await response.json()
  return (
    <div>
      <h1>Repos</h1>
      <pre>{JSON.stringify(repos, null, 2)}</pre>
    </div>
  )
}
