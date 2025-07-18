export const handleLineContact = (productName?: string) => {
    const message = productName
      ? `Hello! I'm interested in the ${productName}. Could you provide more details?`
      : "Hello! I'd like to know more about the products.";
    const lineUrl = `https://line.me/R/msg/text/?${encodeURIComponent(
      message
    )}`;
    window.open(lineUrl, "_blank");
  };