// Coin listesi
const coins = [
  "ai16z",
  "fartcoin",
  "grass",
  "nosana",
  "griffain",
  "tars-ai",
  "ai-rig-complex",
  "eliza",
  "alchemist-ai",
  "memes-ai",
  "degen-spartan-ai",
  "dasha",
  "dolos-the-bully",
  "kween",
  "orbit",
  "fxn",
  "top-hat",
  "shoggoth",
  "agenttank",
  "deep-worm",
  "big-pharmai",
  "bongo-cat",
  "numogram",
  "ava-ai",
  "opus",
  "obot",
  "project89",
  "chaos-and-disorder",
  "meow",
  "koala-ai",
  "kitten-haimer",
  "pippin",
  "max",
  "aimonica-brands",
  "autonomous-virtual-beings",
  "forest",
  "solaris-ai",
  "synesis-one",
  "moe",
  "universal-basic-compute",
  "mizuki",
  "naitzsche",
  "slopfather",
  "the-lokie-cavbal",
  "tensor",
  "arok-vc",
  "aiwithdaddyissues",
  "bloomsperg-terminal",
  "omega",
  "thales-ai",
  "keke-terminal",
  "quasar",
  "ropirito",
  "kolin",
  "kwantxbt",
  "dither",
  "duck-ai",
  "centience",
  "iq6900",
  "darksun",
  "weird-medieval-memes",
  "yousim",
  "sensus",
  "ocada-ai",
  "singularry",
  "patchwork-naval",
  "kira",
  "kirakuru",
  "brot",
  "effective-accelerationism",
  "cheshire-grin",
  "limbo",
  "size",
  "neroboss",
  "gmika",
  "kira",
  "convo",
  "sqrfund",
  "ugly-dog",
  "gemxbt",
  "roastmaster9000",
  "nova-on-mars",
  "sendor",
  "flowerai",
  "dojo-protocol",
  "internosaur",
  "devin",
  "lea-ai",
  "rex",
  "aletheia",
  "mona-arcane",
  "apicoin",
  "cyphomancer",
  "lucy-ai",
  "agent-rogue",
];

const container = document.getElementById("crypto-container");

// Coin fiyatlarını çekme fonksiyonu
async function fetchPrices() {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coins.join(
        ","
      )}&vs_currencies=usd`
    );
    const data = await response.json();

    // Mevcut içerikleri temizle
    container.innerHTML = "";

    coins.forEach((coin) => {
      if (data[coin]) {
        const price = data[coin].usd || "N/A";
        const card = `
          <div class="col-md-3 col-sm-6">
            <div class="crypto-card">
              <h3>${coin.toUpperCase()}</h3>
              <p>$${price}</p>
            </div>
          </div>
        `;
        container.innerHTML += card;
      }
    });
  } catch (error) {
    console.error("Error fetching prices:", error);
    container.innerHTML = `<p class="text-danger">Unable to load prices. Please try again later.</p>`;
  }
}

// Fiyatları hemen yükle
fetchPrices();

// Fiyatları 30 saniyede bir yenile
setInterval(fetchPrices, 30000);
