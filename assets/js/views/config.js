'use strict';

const api_key = '68ce61b8c98157187736a604d45c7ec1';
const imageBaseURL = 'https://image.tmdb.org/t/p/';

/**
 * Fetch the data from the server and pass the results in the json data
 * to a callback function along with an optional parameter 'optionaParam'
 */
const fetchDataFromServer = function (url, callback, optionaParam) {
  fetch(url)
    .then(response => response.json())
    .then(data => callback(data, optionaParam));
};

export {imageBaseURL, api_key, fetchDataFromServer}
