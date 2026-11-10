import { useState } from 'react'
import './App.css'

function App() {
  const [visible, setVisible] = useState(false)
  const [light, setLight] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    event.currentTarget.reset()
    setVisible(false)
  }

  return (
    <main className="login-page" data-theme={light ? 'light' : 'dark'}>
      <header className="login-header">
        <a className="brand" href="/iniciodesesion.html" aria-label="CP, inicio">CP<span> / Tu espacio</span></a>
        <button className="theme-toggle" type="button" aria-pressed={light}
          aria-label={light ? 'Activar modo oscuro' : 'Activar modo claro'}
          title={light ? 'Activar modo oscuro' : 'Activar modo claro'}
          onClick={() => setLight(!light)}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor"
            strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {light ? <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" /> : <>
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
            </>}
          </svg>
        </button>
      </header>
      <section className="login-card" aria-labelledby="login-title">
        <div className="welcome-mark" aria-hidden="true">CP</div>
        <h1 id="login-title">Bienvenido de nuevo</h1>
        <p className="intro">Ingresa tus datos para continuar.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Correo electrónico</label>
          <input id="email" name="email" type="email" autoComplete="username"
            placeholder="Ingresa tu correo" required />
          <label htmlFor="password">Contraseña</label>
          <div className="password-field">
            <input id="password" name="password" type={visible ? 'text' : 'password'}
              autoComplete="current-password" placeholder="Ingresa tu contraseña"
              minLength={8} required aria-describedby="password-hint" />
            <button className="visibility" type="button" aria-controls="password"
              aria-label={visible ? 'Ocultar contraseña' : 'Mostrar contraseña'}
              aria-pressed={visible} onClick={() => setVisible(!visible)}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor"
                strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
                <circle cx="12" cy="12" r="3" />
                {visible && <path d="m3 3 18 18" />}
              </svg>
            </button>
          </div>
          <p className="field-hint" id="password-hint">Usa al menos 8 caracteres.</p>
          <button className="submit" type="submit">Iniciar sesión</button>
        </form>
      </section>
      <footer>© 2026–2027 CP. Todos los derechos reservados.</footer>
    </main>
  )
}

export default App
