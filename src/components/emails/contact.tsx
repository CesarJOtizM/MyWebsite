import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Preview,
  Link,
} from '@react-email/components';

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export function ContactEmail({ name, email, message }: ContactEmailProps) {
  return (
    <Html lang="en">
      <Head />
      <Preview>New message from {name} via cesarortiz.co</Preview>
      <Body
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          backgroundColor: '#0a0a0a',
          color: '#ededed',
          margin: 0,
          padding: 0,
        }}
      >
        <Container
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            padding: '40px 20px',
          }}
        >
          <Section
            style={{
              borderBottom: '2px solid #3b82f6',
              paddingBottom: '20px',
              marginBottom: '30px',
            }}
          >
            <Heading
              as="h1"
              style={{
                margin: 0,
                fontSize: '24px',
                fontWeight: 700,
                color: '#ededed',
              }}
            >
              New message from your portfolio
            </Heading>
          </Section>

          <Section style={{ marginBottom: '24px' }}>
            <Text
              style={{
                margin: '0 0 4px',
                fontSize: '12px',
                textTransform: 'uppercase',
                color: '#888',
                letterSpacing: '1px',
              }}
            >
              Name
            </Text>
            <Text style={{ margin: 0, fontSize: '16px', color: '#ededed' }}>
              {name}
            </Text>
          </Section>

          <Section style={{ marginBottom: '24px' }}>
            <Text
              style={{
                margin: '0 0 4px',
                fontSize: '12px',
                textTransform: 'uppercase',
                color: '#888',
                letterSpacing: '1px',
              }}
            >
              Email
            </Text>
            <Link
              href={`mailto:${email}`}
              style={{
                fontSize: '16px',
                color: '#3b82f6',
                textDecoration: 'none',
              }}
            >
              {email}
            </Link>
          </Section>

          <Section style={{ marginBottom: '24px' }}>
            <Text
              style={{
                margin: '0 0 4px',
                fontSize: '12px',
                textTransform: 'uppercase',
                color: '#888',
                letterSpacing: '1px',
              }}
            >
              Message
            </Text>
            <Section
              style={{
                backgroundColor: '#141414',
                borderRadius: '8px',
                padding: '16px',
                border: '1px solid #222',
              }}
            >
              <Text
                style={{
                  margin: 0,
                  fontSize: '15px',
                  lineHeight: '1.6',
                  color: '#ededed',
                  whiteSpace: 'pre-wrap',
                }}
              >
                {message}
              </Text>
            </Section>
          </Section>

          <Section
            style={{
              borderTop: '1px solid #222',
              paddingTop: '20px',
              marginTop: '30px',
            }}
          >
            <Text style={{ margin: 0, fontSize: '12px', color: '#666' }}>
              Sent from cesarortiz.co contact form
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
