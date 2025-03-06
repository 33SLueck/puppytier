import puppeteer from "puppeteer";

export async function findEmails(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const content = await page.content();

  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
  const emails = content.match(emailRegex);

  await browser.close();
  return emails || [];
}
