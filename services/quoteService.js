const QUOTE_API_URL = "https://api.kanye.rest/";

export async function getQuote() {
  try {
    const quoteResponse = await fetch(QUOTE_API_URL);
    if (!quoteResponse.ok) {
      throw new Error("failed creating About Me");
    }

    let quote = await quoteResponse.json();
    console.log(quote);

    return quote;
  } catch (error) {
    console.error("Error fetching aboutMe:", error.message);
    return null;
  }
}
