import Link from "next/link";

export default function Header() {
    return (
        <header>
            <div className="px-24 pt-12 flex">
                <Link href="/">Home</Link>
                <Link href="/new" className="ml-8">New Event</Link>
            </div>
        </header>
    );
}
