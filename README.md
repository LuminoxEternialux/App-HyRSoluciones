# H&R Soluciones Integrales - Sitio Web

Sitio web corporativo estático para presentar la empresa H&R Soluciones Integrales.

## Ejecutarlo fácilmente en tu computadora

### Opción 1: un solo comando (recomendada)

```bash
./run-local.sh
```

Esto inicia el sitio en `http://localhost:8080`.

Si quieres otro puerto:

```bash
./run-local.sh 3000
```

### Opción 2: con npm

```bash
npm start
```

También levanta el sitio en `http://localhost:8080`.

---

## Crear un link gratis con GitHub Pages

Ya quedó incluido un workflow en `.github/workflows/deploy-pages.yml` para desplegar automáticamente.

### Pasos

1. Sube este repositorio a GitHub.
2. En GitHub ve a **Settings > Pages**.
3. En **Build and deployment**, selecciona **GitHub Actions**.
4. Haz push a la rama `work`, `main` o `master`.
5. Espera a que termine el workflow **Deploy static site to GitHub Pages**.

Tu link quedará así:

```text
https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/
```

> Si tu repo es privado, GitHub Pages puede requerir plan compatible según tu cuenta.

---

## Estructura

- `index.html`: contenido de la landing.
- `styles.css`: estilos en paleta negro/dorado.
- `script.js`: interacciones de la página y enlace `mailto`.
