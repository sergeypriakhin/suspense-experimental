
export function fetchTopMovies() {
  return wrapPromise(Api('/get/N1xR1Cgkd?delay=2000'));
}

export function fetchMovieDetails(id) {
  const fetch = Api('/get/41DPoL41_').then(response => (
    response[id]
  ));

  return wrapPromise(fetch);
}

export function fetchMovieReviews(movieId) {
  const fetch = Api('/get/Vyi3Bl9Jd?delay=3000').then(response => (
    response[movieId]
  ));

  return wrapPromise(fetch)
}

async function Api(url) {  
  const response = await fetch('https://next.json-generator.com/api/json' + url);
  if (response.status !== 200) {
    throw new Error('API returned Error ' + response.status);
  }
  return response.json();
}

function wrapPromise(promise) {
  let status = "pending";
  let result;
  let suspender = promise.then(
    r => {
      status = "success";
      result = r;
    },
    e => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    }
  };
}