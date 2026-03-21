interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export function ContactEmail({ name, email, message }: ContactEmailProps) {
  return (
    <div
      style={{
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        maxWidth: '600px',
        margin: '0 auto',
        padding: '40px 20px',
        backgroundColor: '#0a0a0a',
        color: '#ededed',
      }}
    >
      <div
        style={{
          borderBottom: '2px solid #3b82f6',
          paddingBottom: '20px',
          marginBottom: '30px',
        }}
      >
        <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 700, color: '#ededed' }}>
          New message from your portfolio
        </h1>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <p style={{ margin: '0 0 4px', fontSize: '12px', textTransform: 'uppercase', color: '#888', letterSpacing: '1px' }}>
          Name
        </p>
        <p style={{ margin: 0, fontSize: '16px', color: '#ededed' }}>{name}</p>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <p style={{ margin: '0 0 4px', fontSize: '12px', textTransform: 'uppercase', color: '#888', letterSpacing: '1px' }}>
          Email
        </p>
        <a href={`mailto:${email}`} style={{ fontSize: '16px', color: '#3b82f6', textDecoration: 'none' }}>
          {email}
        </a>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <p style={{ margin: '0 0 4px', fontSize: '12px', textTransform: 'uppercase', color: '#888', letterSpacing: '1px' }}>
          Message
        </p>
        <div
          style={{
            backgroundColor: '#141414',
            borderRadius: '8px',
            padding: '16px',
            border: '1px solid #222',
          }}
        >
          <p style={{ margin: 0, fontSize: '15px', lineHeight: '1.6', color: '#ededed', whiteSpace: 'pre-wrap' }}>
            {message}
          </p>
        </div>
      </div>

      <div style={{ borderTop: '1px solid #222', paddingTop: '20px', marginTop: '30px' }}>
        <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>
          Sent from cesarortiz.co contact form
        </p>
      </div>
    </div>
  );
}
