const initialIsLoading = false;

export function isLoading(initial = initialIsLoading, namespace) {
  return function(state = initial, action) {
    switch (action.type) {
      case `${namespace}_ERROR`:
      case `${namespace}_SUCCESS`:
        return false;
      case namespace:
        return true;
      default:
        return state;
    }
  };
}

const initialError = null;

export function error(initial = initialError, namespaces) {
  return function(state = initial, action) {
    if (action.type.includes("SUCCES")) {
      return null;
    }
    if (action.type.includes("ERROR")) {
      return action.payload.error;
    }
    return state;
  };
}
