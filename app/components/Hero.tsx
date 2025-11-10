// app/components/Hero.tsx

import Image from 'next/image'
import logo from '/public/logo.jpg' // ajuste para o caminho real do seu logo

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <Image src={logo} alt="VYA IA Logo" width={120} height={120} priority />
        <h1>Automação e Inteligência Artificial para transformar negócios</h1>
        <p>
          Soluções escaláveis e personalizadas para acelerar a produtividade da sua empresa com tecnologia de ponta, confiança e automação inteligente.
        </p>
        <a href="#contato" className="cta-btn">
          Comece agora
        </a>
      </div>
      {/* Decoração opcional para reforço do branding */}
      <style jsx>{`
        .hero-section {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 60vh;
          background: linear-gradient(120deg, #22223b 60%, #5f6ec7 100%);
          text-align: center;
          color: #fff;
        }
        .container {
          padding: 2rem;
          max-width: 500px;
          margin: auto;
        }
        .cta-btn {
          display: inline-block;
          background: #f2c94c;
          color: #22223b;
          font-weight: bold;
          border-radius: 8px;
          padding: 1rem 2rem;
          margin-top: 2rem;
          font-size: 1.1rem;
          text-decoration: none;
          transition: background 0.2s;
        }
        .cta-btn:hover {
          background: #fcb900;
        }
        h1 {
          font-size: 2.2rem;
          margin-top: 1.2rem;
        }
        p {
          font-size: 1.15rem;
          margin-top: 1rem;
          margin-bottom: 1.5rem;
        }
      `}
      </style>
    </section>
  );
}
