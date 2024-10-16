import Link from "next/link"
export default function Header() {
    return (
        <footer className="footer">
        <div className="container">
            <p>&copy; 2024 Your Gym Name. All rights reserved.</p>
            <ul className="footerList">
                <li><Link href="#privacy">Privacy Policy</Link></li>
                <li><Link href="#terms">Terms of Service</Link></li>
            </ul>
        </div>
    </footer>
    );
}