exports.handler = async function(event, context) {
  const referer = event.headers.referer || event.headers.Referer;
  if (referer !== 'https://www.mnindustries.store/mn-secure-browser/') {
    return {
      statusCode: 403,
      body: 'Access denied.'
    };
  }
  // If the referer is correct, continue with your application logic here
  // ...
  return {
    statusCode: 200,
    body: 'Hello, world!'
  };
};
