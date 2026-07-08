"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Header({title}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header style={{ padding: '1rem', background: '#ff0000', borderBottom: '1px solid #ddd' }}>
        <Link href="/">
            <h1 style={{ margin: 0, color: '#fff', height: '1rem' }}>{title}</h1>
        </Link>
        <nav style={{ display: 'flex', gap: '1.5rem', justifyContent: 'right' }}>
            <Link href="/">Home</Link>
            
            {/* Dropdown Container */}
          <div 
            style={{ position: 'relative' }}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <div>Dashboard ▾</div>

            {/* Dropdown Menu Panes */}
            {isOpen && (
              <div style={{
                position: 'absolute',
                background: '#ff0000',
                border: '1px solid #ffffff',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                zIndex: 1000
              }}>
                <Link href="/admin" style={{ padding: '0.75rem 1rem', color: '#333', textDecoration: 'none' }}>
                  Admin
                </Link>
                <Link href="/student" style={{ padding: '0.75rem 1rem', color: '#333', textDecoration: 'none' }}>
                  Student
                </Link>
                <Link href="/teacher" style={{ padding: '0.75rem 1rem', color: '#333', textDecoration: 'none' }}>
                  Teacher
                </Link>
              </div>
            )}
          </div>

            <Link href="/syllabus" >Syllabus</Link>
            <Link href="/login" >Login</Link>
        </nav>
    </header>
  );
}