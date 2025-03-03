import { decryptText } from "./encryption";

    const handleDecrypt = async (text: string) => {
        const decrypted = await decryptText(text);
        return decrypted;
    };

    export const getToken = async () => {
        let token = await handleDecrypt(localStorage.getItem("fcm_token") as string);
        return token;
    }