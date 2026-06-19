import { getQuote } from "../services/quoteService.js";

export async function initQuoteController() {
  try {
    const quoteData = await getQuote();
    if (!quoteData) return;

    initQuote(quoteData);
  } catch (error) {
    console.error("Controller Error:", error);
  }
}

function initQuote(quoteData) {
  document.getElementById("quote").textContent = `"${quoteData}"`;
}
