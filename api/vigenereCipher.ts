export const vigenereCipher = (message: string, keyword: string, encode: boolean = true): string => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const messageLower = message.toLowerCase();
    const keywordLower = keyword.toLowerCase();

    let result = '';
    let keywordIndex = 0;

    for (let i = 0; i < messageLower.length; i++) {
        const messageChar = messageLower[i];
        const keywordChar = keywordLower[keywordIndex % keywordLower.length];

        const messageCharIndex = alphabet.indexOf(messageChar);
        const keywordCharIndex = alphabet.indexOf(keywordChar);

        if (messageCharIndex !== -1) {
            const shift = encode ? keywordCharIndex : -keywordCharIndex;
            const newCharIndex = (messageCharIndex + shift + 26) % 26;
            result += alphabet[newCharIndex];
            keywordIndex++;
        } else {
            result += messageChar;
        }
    }

    return result;
};
