import Link from "next/link";

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main
                className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <section>
                    <p>This website is a WIP to build out a set of data story telling around my <Link className="underline" href="/ecology">2025 Organism challenge</Link>.</p>
                </section>
                <section className="flex w-full gap-4">
                    <Link
                        className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
                        href="https://www.inaturalist.org/people/bholly24"
                        rel="noopener noreferrer"
                        target="_blank"
                    >iNaturalist</Link>
                    <Link
                        className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
                        href="https://github.com/bholly24"
                        rel="noopener noreferrer"
                        target="_blank"
                    >GitHub</Link>
                    <Link
                        className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
                        href="https://ebird.org/profile/MTUyMjQ4Nw/US"
                        rel="noopener noreferrer"
                        target="_blank"
                    >eBird</Link>
                    <Link
                        className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
                        href="https://www.goodreads.com/user/show/27728942-brendan-holly"
                        rel="noopener noreferrer"
                        target="_blank"
                    >Goodreads</Link>
                </section>
            </main>
        </div>
    );
}
