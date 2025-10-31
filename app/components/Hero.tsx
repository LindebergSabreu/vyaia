// app/components/Hero.tsx

import Image from 'next/image';

export default function Hero() {
  return (
    <section style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: '#fff',
      padding: '64px 0'
    }}>
      <Image
        src="/Logo.jpg"
        alt="Logo VYA IA"
        width={120}
        height={120}
        style={{ marginBottom: '16px' }}
      />
      <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '2.5rem', color: '#72979F', marginBottom: '16px' }}>
        IA que cuida e transforma
      </h1>
      <p style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '1.25rem', color: '#222', marginBottom: '32px', textAlign: 'center', maxWidth: '460px' }}>
        A VYA IA cuida dos detalhes para que você cuide do que realmente importa.
      </p>
      <a href="#contato" style={{
        background: '#FAA084',
        color: '#fff',
        fontFamily: 'Montserrat, sans-serif',
        padding: '12px 32px',
        borderRadius: '32px',
        textDecoration: 'none',
        fontWeight: 600
      }}>
        Solicite uma demonstração
      </a>
    </section>
  );
}
