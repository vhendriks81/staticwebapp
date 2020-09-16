module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const crypto = require('crypto');
    crypto.randomBytes(256, (err, buf) => {
      if (err) throw err;
      const responseMessage = `${buf.length} bytes of random data: ${buf.toString('hex')}`;
      context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
      };
      context.done();
    });
}