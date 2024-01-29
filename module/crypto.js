// (24-01-29-mon) 책 94쪽~

const crypto = require('crypto');
const data = 'pw1234';

let encData = crypto.createHash('sha512')
    .update(data)
    .digest('base64');

console.log(data, encData);

encData = crypto.createHash('sha512')
    .update(data)
    .digest('hex');

console.log(data, encData);


//salting 암호화
const createSalt = () => {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(64, (err, buf) => {
            if (err) reject(err);
            resolve(buf.toString('base64'));
        })
    })
}

const createCryptoPassword =
    async (plainPssword) => {
        const salt = await createSalt(); //await 를 꼭 써줘야 한다.

        return new Promise((resolve, reject) => {
            crypto.pbkdf2(plainPssword,
                salt,
                999,
                64,
                'sha512',
                (err, key) => {
                    if (err) reject(err);
                    resolve({
                        password: key.toString('base64'),
                        salt
                    })
                })
        })
    };
const cryptoPassword = async () => {
    encData = await createCryptoPassword(data);
    console.log(encData);
}
cryptoPassword();

createCryptoPassword(data)
    .then(result => console.log(result))
    .catch(err => console.log(err));
