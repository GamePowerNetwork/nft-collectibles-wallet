export function getPhrase() {
    const phrase = util_crypto.mnemonicGenerate();
    console.log(phrase);
}