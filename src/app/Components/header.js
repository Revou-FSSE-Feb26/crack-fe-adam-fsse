"use client";
import Link from 'next/link';

export default function Header({title}) {
  return (
    <header style={{ padding: '1rem', background: '#ff0000', borderBottom: '1px solid #ddd' }}>
        <Link href="/">
            <h1 style={{ margin: 0, color: '#fff', height: '1rem' }}>{title}</h1>
        </Link>
        <nav style={{ display: 'flex', gap: '1.5rem', justifyContent: 'right' }}>
            <Link href="/">Home</Link>
            <Link href="/login" >Login</Link>
        </nav>
    </header>
  );
}