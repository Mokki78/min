import Link from "next/link";


export default function Header() {

    return (
        <header>
            <div>
                <img src="../../logo1.svg" />
            </div>
            <nav>
            <Link href="/">Home</Link>
                <Link href="/tjenester">Tjenester</Link>
                <Link href="/priser">Priser</Link>
                <Link href="/kontakt">Kontakt</Link>

            </nav>
        </header>
        
    )
}

