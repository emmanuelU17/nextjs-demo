export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

        <nav className="w-full p-2 bg-red-400">
            <ul className="list-none">
                <li className="">
                    <a href="/" className="">home</a>
                    <a href="/posts" className="">post</a>
                </li>
            </ul>
        </nav>

    </main>
  )
}
