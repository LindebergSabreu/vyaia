'use client';

export default function MissaoVisaoValores() {
  return (
    <section
      style={{
        width: '100%',
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '88px 24px 64px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#ffffff',
      }}
    >
      {/* Headline da seção */}
      <div style={{ textAlign: 'center', marginBottom: '72px' }}>
        <h2
          style={{
            fontWeight: 700,
            fontFamily: "'Montserrat', Arial, sans-serif",
            fontSize: '2rem',
            color: '#28445F',
            marginBottom: '18px',
            letterSpacing: '-0.5px',
            margin: '0 0 18px 0',
          }}
        >
          Missão, Visão e Valores
        </h2>
        <p
          style={{
            fontSize: '1.08rem',
            color: '#505050',
            maxWidth: '680px',
            margin: '0 auto',
            lineHeight: '1.54',
          }}
        >
          Os pilares que guiam nossa transformação e nos definem como parceira de impacto.
        </p>
      </div>

      {/* Grid 1x3 para MVV */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '42px',
          width: '100%',
          marginBottom: '60px',
        }}
      >
        {/* Missão */}
        <div
          style={{
            padding: '48px 36px',
            borderRadius: '14px',
            background: '#f0f4f8',
            border: '2px solid #e5e7eb',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#FAA084';
            e.currentTarget.style.boxShadow = '0 10px 32px #e2e5ea55';
            e.currentTarget.style.transform = 'translateY(-4px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#e5e7eb';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '12px',
              background: '#FAA084',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px',
              fontSize: '28px',
            }}
          >
            🎯
          </div>
          <h3
            style={{
              fontWeight: 700,
              fontFamily: "'Montserrat', Arial, sans-serif",
              fontSize: '1.4rem',
              color: '#28445F',
              margin: '0 0 16px 0',
            }}
          >
            Missão
          </h3>
          <p
            style={{
              fontSize: '1.02rem',
              color: '#393f41',
              lineHeight: '1.66',
              margin: '0',
              fontWeight: 500,
            }}
          >
            Oferecer soluções de inteligência artificial de alto impacto que humanizam a tecnologia, potencializam capacidades humanas e geram transformação real nos negócios e na vida das pessoas.
          </p>
        </div>

        {/* Visão */}
        <div
          style={{
            padding: '48px 36px',
            borderRadius: '14px',
            background: '#f0f4f8',
            border: '2px solid #e5e7eb',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#FAA084';
            e.currentTarget.style.boxShadow = '0 10px 32px #e2e5ea55';
            e.currentTarget.style.transform = 'translateY(-4px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#e5e7eb';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '12px',
              background: '#FAA084',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px',
              fontSize: '28px',
            }}
          >
            🚀
          </div>
          <h3
            style={{
              fontWeight: 700,
              fontFamily: "'Montserrat', Arial, sans-serif",
              fontSize: '1.4rem',
              color: '#28445F',
              margin: '0 0 16px 0',
            }}
          >
            Visão
          </h3>
          <p
            style={{
              fontSize: '1.02rem',
              color: '#393f41',
              lineHeight: '1.66',
              margin: '0',
              fontWeight: 500,
            }}
          >
            Ser referência nacional em inovação tecnológica e humanização da IA, combinando expertise técnica, empatia genuína e visão futurista para liderar a transformação digital ética e sustentável no Brasil.
          </p>
        </div>

        {/* Valores */}
        <div
          style={{
            padding: '48px 36px',
            borderRadius: '14px',
            background: '#f0f4f8',
            border: '2px solid #e5e7eb',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#FAA084';
            e.currentTarget.style.boxShadow = '0 10px 32px #e2e5ea55';
            e.currentTarget.style.transform = 'translateY(-4px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#e5e7eb';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '12px',
              background: '#FAA084',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px',
              fontSize: '28px',
            }}
          >
            ⭐
          </div>
          <h3
            style={{
              fontWeight: 700,
              fontFamily: "'Montserrat', Arial, sans-serif",
              fontSize: '1.4rem',
              color: '#28445F',
              margin: '0 0 16px 0',
            }}
          >
            Valores
          </h3>
          <ul
            style={{
              fontSize: '0.98rem',
              color: '#393f41',
              lineHeight: '1.74',
              margin: '0',
              paddingLeft: '20px',
            }}
          >
            <li style={{ marginBottom: '8px' }}>
              <strong>Humanização</strong> — Pessoas no centro da tecnologia
            </li>
            <li style={{ marginBottom: '8px' }}>
              <strong>Excelência Técnica</strong> — Expertise e credibilidade
            </li>
            <li style={{ marginBottom: '8px' }}>
              <strong>Inovação</strong> — Antecipação e disrupção
            </li>
            <li style={{ marginBottom: '8px' }}>
              <strong>Transparência</strong> — Ética e clareza
            </li>
            <li>
              <strong>Compromisso</strong> — Impacto real e duradouro
            </li>
          </ul>
        </div>
      </div>

      {/* Mensagem Central */}
      <div
        style={{
          textAlign: 'center',
          maxWidth: '800px',
          padding: '48px 36px',
          borderRadius: '16px',
          background: 'linear-gradient(135deg, #f0f4f8 0%, #ffffff 100%)',
          border: '2px solid #FAA084',
          boxShadow: '0 8px 24px #e2e5ea33',
        }}
      >
        <p
          style={{
            fontSize: '1.24rem',
            color: '#28445F',
            lineHeight: '1.72',
            margin: '0',
            fontWeight: 600,
            fontStyle: 'italic',
          }}
        >
          "A VYA IA cuida dos detalhes para que você cuide do que realmente importa, construindo o futuro da inteligência artificial com impacto humano e inovação."
        </p>
      </div>
    </section>
  );
}
