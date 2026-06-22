import { getQuote } from "../services/quoteService.js";

export async function initQuoteController() {
  try {
    const quoteData = await getQuote();
    if (!quoteData) return;

    renderQuote(quoteData);
  } catch (error) {
    console.error("Controller Error:", error);
  }
}

export function renderQuote(quoteData) {
  const quote = document.getElementById("quote");
  quote.textContent = `"${quoteData}"`;
}
