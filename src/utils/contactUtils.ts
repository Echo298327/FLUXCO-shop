/**
 * Utility functions for contact-related operations
 */

/**
 * Opens LINE chat with a pre-filled message
 * @param message - The message to send via LINE
 */
export const openLineChat = (message: string): void => {
  const lineUrl = `https://line.me/R/ti/p/@629Ipvil?text=${encodeURIComponent(message)}`;
  window.open(lineUrl, "_blank");
};

/**
 * Opens phone dialer with the shop's phone number
 */
export const openPhoneDialer = (): void => {
  window.open("tel:0983362103", "_self");
};
