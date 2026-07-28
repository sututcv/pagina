# Portal público del SUTUTCV

Sitio institucional del Sindicato Único de Trabajadores de la Universidad Tecnológica del Centro de Veracruz. El portal concentra información sindical, Comité Ejecutivo, convenios, noticias, eventos y galerías.

El proyecto evita inventar información institucional: los datos no proporcionados se mantienen vacíos en la interfaz y se registran en `src/data/pendientes.ts`.

## Tecnología

- Astro 7 con salida estática.
- TypeScript en modo estricto.
- Zod para validar los contenidos al construir el sitio.
- Vitest para las pruebas del modelo de contenido.
- HTML, CSS y JavaScript nativos; no requiere un framework de interfaz.

Requiere Node.js 22.12 o superior.

## Puesta en marcha

```powershell
npm install
npm run dev
```

El servidor de desarrollo se inicia en segundo plano. Para administrarlo:

```powershell
npm run dev:status
npm run dev:logs
npm run dev:stop
```

## Comandos

| Comando | Acción |
| --- | --- |
| `npm run dev` | Inicia Astro en segundo plano. |
| `npm run dev:status` | Muestra el estado del servidor local. |
| `npm run dev:logs` | Consulta los registros del servidor local. |
| `npm run dev:stop` | Detiene el servidor local. |
| `npm run check` | Comprueba Astro/TypeScript y ejecuta las pruebas. |
| `npm run test` | Ejecuta únicamente Vitest. |
| `npm run build` | Genera el sitio estático en `dist/`. |
| `npm run preview` | Previsualiza el resultado de producción. |

## Contenido y recursos

- `src/data/`: información institucional validada y separada por dominio.
- `src/data/pendientes.ts`: datos faltantes o que requieren confirmación.
- `src/schemas/`: reglas de validación Zod.
- `src/pages/`: páginas públicas y rutas dinámicas.
- `src/components/`: componentes de navegación, tarjetas, filtros y galería.
- `public/brand/`: identidad gráfica.
- `public/media/`: fotografías y materiales optimizados para web.
- `public/_headers`: propuesta de encabezados de seguridad para plataformas compatibles.

Las fotografías publicadas son una selección de los archivos proporcionados. Se excluyeron imágenes donde podían apreciarse listas, credenciales, teléfonos, documentos u otros datos personales.

### Actualizar el contenido local

1. Edita el archivo correspondiente dentro de `src/data/`.
2. Coloca imágenes nuevas en `public/media/` y documentos públicos en `public/documents/`.
3. Declara dimensiones, texto alternativo y metadatos en el objeto de contenido.
4. Ejecuta `npm run check` para validar los datos con Zod y las pruebas.
5. Ejecuta `npm run build` antes de publicar.

No agregues documentos o fotografías sin la revisión de privacidad indicada en el prompt del proyecto.

### Integración futura con CMS

Los componentes consumen datos únicamente a través de `src/lib/content/site.ts`. Para conectar WordPress, Directus, Strapi u otro CMS, se debe sustituir esa capa local por un adaptador que entregue las mismas interfaces validadas, sin reescribir las páginas. La autenticación, el panel administrativo y la API privada permanecen fuera del alcance actual.

## Rutas principales

- `/`
- `/nuestro-sindicato`
- `/comite-sindical`
- `/convenios-y-beneficios`
- `/noticias-y-eventos`
- `/noticias`
- `/eventos`
- `/galeria`

Los convenios, eventos, noticias y álbumes cuentan con rutas de detalle generadas de forma estática a partir de sus archivos de datos.

## Dominio, SEO y sitemap

El dominio canónico es `https://sututcv.org.mx` y está configurado en:

- `astro.config.mjs`, para las URLs generadas por Astro.
- `public/CNAME`, para GitHub Pages.
- `public/robots.txt`, para anunciar el sitemap público.

La variable `PUBLIC_SITE_URL` se mantiene disponible como anulación explícita en otros entornos.

## Información pendiente

Antes de considerar el portal listo para publicación institucional se necesita confirmar, entre otros puntos:

- Dominio oficial.
- Archivos web autorizados de Montserrat y Source Sans 3, si se requiere que todos los dispositivos reproduzcan exactamente esas tipografías.
- Aviso de privacidad.
- Dirección, horarios, teléfono y correo institucionales.
- URLs verificadas de redes sociales.
- Versiones públicas del Contrato UTCV y de las Condiciones Generales de Trabajo.
- Periodo y funciones públicas del Comité Ejecutivo.
- Historia institucional y principales logros.
- Vigencia formal del convenio con Alianza.
- Noticias autorizadas y próximos eventos confirmados.
- Revisión individual de privacidad y selección editorial del resto de fotografías de `Eventos2026.zip`.

La lista operativa completa está centralizada en `src/data/pendientes.ts`.

## Despliegue

El repositorio oficial es `https://github.com/sututcv/pagina`. Cada cambio enviado a la rama `main` activa `.github/workflows/deploy.yml`, que instala las dependencias, ejecuta las validaciones, construye el sitio estático y publica `dist/` en la rama `gh-pages`.

GitHub Pages está configurado actualmente para servir la raíz de `gh-pages`. El workflow conserva esa fuente de publicación para que la cuenta colaboradora `emartinex` pueda desplegar sin requerir permisos administrativos sobre la configuración del repositorio.

Los pull requests hacia `main` ejecutan las mismas validaciones y el mismo build, pero no publican el sitio hasta que los cambios se integran.

Antes de enviar cambios:

```powershell
npm run check
npm run build
```

No se debe versionar `dist/`: GitHub Actions genera ese directorio durante cada despliegue. El archivo `public/_headers` se conserva como referencia, pero GitHub Pages no aplica encabezados personalizados definidos en ese formato.
