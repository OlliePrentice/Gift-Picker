import Link from "next/link";

export default function Intro() {
    return (
        <Link href="/product">
        <a className="inline-block bg-blue-500 hover:bg-blue-600 focus:outline-none focus:shadow-outline text-white font-bold py-2 px-4 text-2xl rounded">Find my gift</a>
        </Link>
    )
}