import Link from "next/link";

export default function Header() {
    return (
        <div className="header">
            <h1>ProActive Fitness</h1>
            <nav>
                <ul className="header-buttons">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about-us">About Us</Link></li>
                    <li><Link href="/classes">Classes</Link></li>
                    <li><Link href="/trainers">Trainers</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
}
