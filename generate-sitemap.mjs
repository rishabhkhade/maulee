// generate-sitemap.mjs
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { Readable } from 'stream';

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.8 },
  { url: '/service', changefreq: 'monthly', priority: 0.7 },
  { url: '/mouleeswork', changefreq: 'monthly', priority: 0.7 },
  { url: '/our_Clients', changefreq: 'monthly', priority: 0.7 },
  { url: '/contactform', changefreq: 'monthly', priority: 0.7 },
  { url: '/privacy', changefreq: 'monthly', priority: 0.7 },
  { url: '/cookies', changefreq: 'monthly', priority: 0.7 },
  { url: '/artclasses', changefreq: 'monthly', priority: 0.7 }
];

try {
  const stream = new SitemapStream({ hostname: 'https://www.mouleestattooart.com' });
  const writeStream = createWriteStream('./public/sitemap.xml');

  const xml = await streamToPromise(Readable.from(links).pipe(stream));

  writeStream.write(xml.toString());
  writeStream.end();

  console.log('✅ Sitemap successfully generated!');
} catch (error) {
  console.error('❌ Failed to generate sitemap:', error);
}
