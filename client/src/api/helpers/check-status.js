import extractErrorMessage from "./extract-error-message";

export default async function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  await parseJSONError(response);
}

async function parseJSONError(response) {
  let data;

  try {
    data = await response.json();
  } catch {
    // there was an error trying to parse the JSON body (maybe it's not JSON?)
    // just ignore it and return an error with the original response without a parsed body
    let error = new Error(response.statusText || `Request failed with status code ${response.status}`);
    error.response = response;
    throw error;
  }

  let msg = extractErrorMessage(data);
  if (!msg) msg = response.statusText;

  let error = new Error(msg);
  error.response = {
    status: response.status,
    type: response.type,
    url: response.url,
    body: data
  };

  throw error;
}
