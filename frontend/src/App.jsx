import { useState } from 'react'
import './App.css'

function App() {
  const [visible, setVisible] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    event.currentTarget.reset()
    setVisible(false)
  }

  return (
    <main className="login-page">
      <a className="brand" href="/" aria-label="CP, inicio">CP<span> / Tu espacio</span></a>
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
              aria-pressed={visible} onClick={() => setVisible(!visible)}>
              {visible ? 'Ocultar' : 'Mostrar'}
            </button>
          </div>
          <p className="field-hint" id="password-hint">Usa al menos 8 caracteres.</p>
          <button className="submit" type="submit">Iniciar sesión</button>
        </form>
      </section>
      <footer>CP · Un espacio para comenzar</footer>
    </main>
  )
}

export default App
