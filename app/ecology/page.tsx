import Link from "next/link";

export default function EcologyWelcomePage() {
    return <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main
            className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
            <Link
                className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
                href="/"
            >Home</Link>
        </main>
    </div>
}