#!/usr/bin/env node

const HOST = "novaltron.com";
const SITE_URL = `https://${HOST}`;
const KEY = "39ff644dd0ba251796c980445855cb2b";
const KEY_LOCATION = `${SITE_URL}/${KEY}.txt`;
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const explicitUrls = args.filter((arg) => !arg.startsWith("--"));

async function verifyKeyFile() {
  const res = await fetch(KEY_LOCATION);
  const body = (await res.text()).trim();
  if (!res.ok || body !== KEY) {
    throw new Error(
      `Key verification failed at ${KEY_LOCATION} (status ${res.status}). Deploy the key file first.`
    );
  }
}

async function fetchSitemapUrls() {
  const res = await fetch(SITEMAP_URL);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${SITEMAP_URL} (status ${res.status}).`);
  }
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)]
    .map((match) => match[1].trim())
    .filter((url) => url.startsWith(`${SITE_URL}/`));
  if (urls.length === 0) {
    throw new Error(`No ${SITE_URL} URLs found in ${SITEMAP_URL}.`);
  }
  return [...new Set(urls)];
}

async function main() {
  const urlList = explicitUrls.length > 0 ? explicitUrls : await fetchSitemapUrls();
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };

  if (dryRun) {
    console.log(JSON.stringify(payload, null, 2));
    return;
  }

  await verifyKeyFile();

  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });

  const text = await res.text();
  if (!res.ok) {
    console.error(`IndexNow submission failed (HTTP ${res.status}): ${text}`);
    process.exit(1);
  }

  console.log(
    `✓ Submitted ${urlList.length} URLs to IndexNow (HTTP ${res.status}${text ? `: ${text}` : ""}).`
  );
}

main().catch((err) => {
  console.error(`✗ ${err.message}`);
  process.exit(1);
});
