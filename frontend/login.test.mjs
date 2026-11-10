import assert from 'node:assert/strict'
import { createServer } from 'vite'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

const server = await createServer({ server: { middlewareMode: true } })
try {
  const { default: App } = await server.ssrLoadModule('/src/App.jsx')
  const { default: Skeleton } = await server.ssrLoadModule('/src/LoginSkeleton.jsx')
  const html = renderToStaticMarkup(createElement(App))
  assert.match(html, /aria-label="Mostrar contraseña"/)
  assert.match(html, /Modo claro/)
  assert.match(html, /2026–2027 CP. Todos los derechos reservados/)
  assert.match(html, /minLength="8"/)
  assert.match(renderToStaticMarkup(createElement(Skeleton)), /aria-busy="true"/)
  console.log('Login y skeleton: comprobaciones correctas')
} finally {
  await server.close()
}
