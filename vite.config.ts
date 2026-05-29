import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, type Plugin} from 'vite';
import { copyFileSync, mkdirSync, readdirSync, statSync, existsSync, readFileSync } from 'fs';

// Simple MIME type lookup for portfolio assets
function getMimeType(filePath: string): string {
  const ext = path.extname(filePath).toLowerCase();
  const mimeMap: Record<string, string> = {
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.txt': 'text/plain',
    '.json': 'application/json',
    '.pdf': 'application/pdf',
  };
  return mimeMap[ext] || 'application/octet-stream';
}

/**
 * Vite plugin: serves /assets/* from the project-root assets/ folder during dev,
 * and copies them into dist/assets/ during production build.
 */
function portfolioAssetsPlugin(): Plugin {
  const assetsRoot = path.resolve(__dirname, 'assets');

  return {
    name: 'portfolio-assets',

    // Dev: serve /assets/* requests from the filesystem
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url || !req.url.startsWith('/assets/')) return next();

        const decodedUrl = decodeURIComponent(req.url);
        const filePath = path.join(assetsRoot, decodedUrl.replace('/assets/', ''));

        if (existsSync(filePath) && statSync(filePath).isFile()) {
          const mimeType = getMimeType(filePath);
          res.setHeader('Content-Type', mimeType);
          res.setHeader('Cache-Control', 'public, max-age=3600');
          res.end(readFileSync(filePath));
        } else {
          next();
        }
      });
    },

    // Build: copy assets/ into dist/assets/
    closeBundle() {
      const dest = path.resolve(__dirname, 'dist/assets');
      copyDirRecursive(assetsRoot, dest);
    },
  };
}

function copyDirRecursive(src: string, dest: string) {
  if (!existsSync(src)) return;
  mkdirSync(dest, { recursive: true });
  for (const entry of readdirSync(src)) {
    const srcPath = path.join(src, entry);
    const destPath = path.join(dest, entry);
    if (statSync(srcPath).isDirectory()) {
      if (entry === '.aistudio' || entry === 'node_modules') continue;
      copyDirRecursive(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), portfolioAssetsPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
