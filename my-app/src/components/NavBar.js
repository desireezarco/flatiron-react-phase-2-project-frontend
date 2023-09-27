export default function NavBar () {
    return (
        <nav className = "nav">
        <a href="/" className="site-title">
            Site Name
        </a>
        <ul>
            <li>
                <a href="/RSVP">RSVP</a>
            </li>
                <a href="/Messages">Messsages</a>
        </ul>
        </nav>
    )
}
