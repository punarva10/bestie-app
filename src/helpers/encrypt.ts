import CryptoJS from "crypto-js";

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || "";

function encryptMessage(text: string): string {
  const ciphertext = CryptoJS.AES.encrypt(text, ENCRYPTION_KEY).toString();
  return btoa(ciphertext); // Convert to base64
}

function decryptMessage(encryptedText: string): string {
  try {
    const ciphertext = atob(encryptedText); // Convert from base64
    const bytes = CryptoJS.AES.decrypt(ciphertext, ENCRYPTION_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch (error) {
    console.error("Decryption error:", error);
    return "Error: Could not decrypt message";
  }
}

export { encryptMessage, decryptMessage };
