module.exports = async function (context, req) {
    const crypto = require('crypto');
    const buf = crypto.randomBytes(256);
    const responseMessage = `var randomBytes = '${buf.toString('hex')}';`;
      context.res = {
        body: responseMessage
      };
}