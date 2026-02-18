# H&R Soluciones Integrales - Sitio Web

Sitio web corporativo estático para H&R Soluciones Integrales con navegación **en subpáginas** (Inicio, Empresa, Servicios, Proyectos y Contacto).

## Ejecutarlo fácilmente en tu computadora

### Opción 1: un solo comando (recomendada)

```bash
./run-local.sh
```

Abre: `http://localhost:8080`

Si quieres otro puerto:

```bash
./run-local.sh 3000
```

### Opción 2: con npm

```bash
npm start
```

## Estructura del sitio

- `index.html`: portada del sitio.
- `empresa.html`: información institucional.
- `servicios.html`: servicios especializados.
- `proyectos.html`: placeholders para imágenes y videos de trabajos.
- `contacto.html`: datos de contacto + solicitud por correo (sin `<form>`).
- `styles.css`: estilos minimalistas negro/dorado.
- `script.js`: año dinámico y lógica de solicitud de información por `mailto:`.

## Publicación gratis con GitHub Pages

Este repo incluye el workflow `.github/workflows/deploy-pages.yml`.

### Pasos

1. Sube el repositorio a GitHub.
2. Ve a **Settings > Pages**.
3. En **Build and deployment**, selecciona **GitHub Actions**.
4. Haz push a tu rama de trabajo.
5. Espera a que termine **Deploy static site to GitHub Pages**.

URL final esperada:

```text
https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/
```

## Nota sobre dominio y 404

- No necesitas dominio personalizado; deja **Custom domain** vacío.
- Si ves 404, verifica URL, commit desplegado y que el workflow esté en verde.
