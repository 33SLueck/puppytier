
import { findEmails } from "./puppyMail.js";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askForUrlAndScrapeEmails() {
  rl.question(
    "Bitte gib die URL ein aus der du email Adressen ziehen möchtest: ",
    async (url) => {
      try {
        if (!url.startsWith("http://" || !url.startsWith("https://"))) {
            url = "https://" + url;
        }
        const emails = await findEmails(url);
        if (emails.length > 0) {
          console.log("ERgebnisse:", emails);
        } else {
          console.log("Keine Ergebnisse.");
        }
      } catch (error) {
        console.log("Fehler: ", error);
      } finally {
        rl.close(); 
      }
    }
  );
}


askForUrlAndScrapeEmails();