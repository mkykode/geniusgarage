import { Card } from '@geniusgarage/ui/card'

export default async function Features() {

  return (
    <>
      {/* TODO: Add page title and description */}
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>Features</h1>
      <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '3rem', textAlign: 'center' }}>
        Everything you need to manage your code snippets
      </p>
      {/* TODO: Add feature cards grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <Card title="⚡ Fast Search">
          Find your snippets instantly with powerful full-text search and filtering by tags
        </Card>
        <Card title="📁 Organized">
          Keep your code organized with tags, folders, and collections
        </Card>
        <Card title="🔗 Shareable">
          Share snippets with your team or make them public for the community
        </Card>

        <Card title="🎨 Syntax Highlighting">
          Beautiful syntax highlighting for 100+ programming languages
        </Card>
        <Card title="📋 One-Click Copy">
          Copy snippets to your clipboard with a single click
        </Card>
        <Card title="🔐 Private & Secure">
          Your private snippets stay private with enterprise-grade security
        </Card>
      </div>
    </>
  )
}
