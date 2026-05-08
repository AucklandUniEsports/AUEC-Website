import Link from 'next/link';

export default function NotFound() {
    return (
        <div style={{
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100dvh',
            textAlign: 'center',
            gap: '15px'
        }}>
            <h2 style={{ fontSize: '2rem', color: 'white'}}>
                404 - Page Not Found
            </h2>

            <p style={{ color: 'white'}}>
                Could not find the requested page.
            </p>

            <Link href="/">
                <button style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#666',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '1rem'
                }}>
                    Return to Home
                </button>
            </Link>
        </div>
    );
}
