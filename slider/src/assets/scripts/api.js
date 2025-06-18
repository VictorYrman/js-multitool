export const getCryptoData = async (coinId) => {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd&include_market_cap=true`
    );
    const data = await response.json();

    const price = data[coinId].usd;
    const marketCap = data[coinId].usd_market_cap;

    return { price, marketCap };
  } catch (error) {
    console.error(error);
  }
};
