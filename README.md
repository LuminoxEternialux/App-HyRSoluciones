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

### ¿Los cambios se ven en tiempo real?

- **En local**: sí, normalmente con guardar y recargar el navegador se reflejan de inmediato.
- **En GitHub Pages**: no es instantáneo al guardar localmente. Primero debes hacer `git push` y esperar el workflow de deploy (1 a 3 minutos aprox.).

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

### Si GitHub Pages te pide dominio (Custom domain)

No necesitas comprar dominio para publicar gratis.

1. Ve a **Settings > Pages**.
2. En **Custom domain**, deja el campo vacío.
3. Si aparece un dominio guardado, bórralo y guarda.
4. Usa el link automático de GitHub Pages:
   `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`

> Importante: este repositorio no incluye archivo `CNAME`, por lo que está preparado para usar la URL gratuita de GitHub Pages sin dominio propio.

### Si desplegó pero se sigue viendo la versión vieja

1. Verifica que el workflow se ejecutó para el commit más reciente.
2. Si ejecutas manualmente (**Run workflow**), usa el input `deploy_ref` y pon la rama correcta (`work` o `main`).
3. Abre la URL en modo incógnito o haz recarga forzada (**Ctrl+F5 / Cmd+Shift+R**).
4. Revisa que en **Actions** el job termine en verde y que en **Pages** aparezca el último "deployment".

> Nota: `index.html` ya referencia assets versionados (`styles.css?v=20260218` y `script.js?v=20260218`) para reducir problemas de caché del navegador/CDN.

---

## Estructura

- `index.html`: contenido de la landing.
- `styles.css`: estilos en paleta negro/dorado.
- `script.js`: interacciones de la página y enlace `mailto`.
