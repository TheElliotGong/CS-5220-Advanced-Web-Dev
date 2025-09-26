/*
    steps to run:
    1. install the deps using: npm install
    2. run the file: node index.js
*/

import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

// sync hash of passwords
const START_SYNC = Date.now();
const hashPasswordSync = (password, salt) => {
    // generate a hash sync of the password using the salt
    const hash = bcrypt.hashSync(password, salt);

    const end = Date.now();

    // log the hashed password and the time taken to hash
    console.log(`Sync hashed: ${hash} | ${end - START_SYNC}`);
};

hashPasswordSync('password', SALT_ROUNDS);
hashPasswordSync('password', SALT_ROUNDS);
hashPasswordSync('password', SALT_ROUNDS);

// async hash of passwords
const START_ASYNC = Date.now();
const hashPasswordAsync = async (password, salt) => {
    try {
        // generate a hash async of the password using the salt
        const hash = await bcrypt.hash(password, salt);

        const end = Date.now();

        // log the hashed password and the time taken to hash
        console.log(`Async hashed: ${hash} | ${end - START_ASYNC}`);
    } catch (error) {
        console.error(error);
    }
};

hashPasswordAsync('password', SALT_ROUNDS);
hashPasswordAsync('password', SALT_ROUNDS);
hashPasswordAsync('password', SALT_ROUNDS);
