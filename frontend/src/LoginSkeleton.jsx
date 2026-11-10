export default function LoginSkeleton() {
  return (
    <main className="login-page" aria-busy="true" aria-label="Cargando inicio de sesión">
      <div className="login-header" aria-hidden="true"><div className="skeleton skeleton-brand" /></div>
      <div className="login-card skeleton-card" aria-hidden="true">
        <div className="welcome-mark skeleton" />
        <div className="skeleton skeleton-heading" />
        <div className="skeleton skeleton-intro" />
        <div className="skeleton skeleton-label" /><div className="skeleton skeleton-input" />
        <div className="skeleton skeleton-label" /><div className="skeleton skeleton-input" />
        <div className="skeleton skeleton-label" /><div className="skeleton skeleton-input" />
      </div>
      <footer aria-hidden="true">© 2026–2027 CP. Todos los derechos reservados.</footer>
    </main>
  )
}
