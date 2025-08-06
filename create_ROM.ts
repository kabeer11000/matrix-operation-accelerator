/**
 * Converts a 64-bit binary string to a fixed-length 16-character hexadecimal string.
 *
 * @param {string} binaryString The 64-bit binary string to convert.
 * @returns {string} The 16-character hexadecimal representation of the binary string.
 * @throws {Error} If the input is not a valid 64-bit binary string.
 */
function convert64BitBinaryToFixedHex(binaryString: string) {
    // Validate that the input is a 64-bit binary string
    if (!/^[01]{64}$/.test(binaryString)) {
        throw new Error('Input must be a valid 64-bit binary string.');
    }

    let hexString = '';
    // Loop through the binary string in chunks of 4 bits
    for (let i = 0; i < binaryString.length; i += 4) {
        const chunk = binaryString.slice(i, i + 4);
        // Convert the 4-bit chunk to its hexadecimal equivalent
        const hexDigit = parseInt(chunk, 2).toString(16);
        hexString += hexDigit;
    }

    // Ensure the output is a fixed-length 16-character string
    return hexString.padStart(16, '0');
}
function reverseStringOneLiner(str: string) {
    return str.split('').reverse().join('');
}

function main() {

    const opcode = '0001';

    const o = `0000000000000000000000000000000000001000000000000000000000000000
0000000000000000000000000000000000000000000000000000000000000000
0000000000000000000000000000000000000100010000000000000000000000
0000000000000000000000000000000000000100010000000000000000000000`.split('\n').map(a => convert64BitBinaryToFixedHex(reverseStringOneLiner(a))).join(' ');
    console.log('OPCODE / LOCATION: ', parseInt(opcode + '0'.repeat(8)).toString(16).padStart(4, '0'), parseInt(opcode + '0'.repeat(8)).toString(16).padStart(4, '0').length);
    console.log('Image:', o);
}
main();