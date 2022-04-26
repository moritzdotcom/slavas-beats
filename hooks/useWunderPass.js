export default function useWunderPass(config) {
  const { name, image, accountId } = config;

  const smartContractTransaction = (tx, usdc = {}, network = "polygon") => {
    return new Promise(async (resolve, reject) => {
      try {
        const popup = window.open(
          encodeURI(
            `https://app.wunderpass.org/smartContract?name=${name}&imageUrl=${image}`
          ),
          "WunderPassContract",
          "tab"
        );

        const requestInterval = setInterval(() => {
          popup.postMessage(
            JSON.parse(
              JSON.stringify({
                accountId: accountId,
                tx: tx,
                network: network,
                usdc: usdc,
              })
            ),
            "https://app.wunderpass.org"
          );
        }, 1000);

        window.addEventListener("message", (event) => {
          if (event.origin == "https://app.wunderpass.org") {
            clearInterval(requestInterval);

            if (event.data && typeof event.data == "object") {
              event.source.window.close();
              resolve(event.data.response);
            }
          }
        });
      } catch (error) {
        reject(error?.error?.error?.error?.message || error);
      }
    });
  };

  return { smartContractTransaction };
}
