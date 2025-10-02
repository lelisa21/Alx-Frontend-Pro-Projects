import Link from "next/link"
const Custom404 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-xl bg-gradient-to-r from-blue-400/30 via-amber-200/30 to-green-500/30">
        <h1 className="text-5xl">
        404</h1>
        <p>Oops We Could not find the page check if your connection is stable and you directed to correct path , i think this path doesn&apos;t exist. </p>
        <Link href={"/"} className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-800 text-md transition duration-300">Go Back Home</Link>
        </div>
  )
}

export default Custom404
