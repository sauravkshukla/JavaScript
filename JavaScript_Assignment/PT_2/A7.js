function generateOTP() {
    return Math.floor(1000 + Math.random() * 9000);
}

console.log(`Here is your OTP: ${generateOTP()}`);
