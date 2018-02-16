var tmpsUrl = 'temperature.json';

/**
 * Donwload asyncronosly from given url
 * @param url
 * @returns {Promise}
 */
function ajx(url) {
    return new Promise(function(resolve, reject){


    let xhr = new XMLHttpRequest();
    xhr.open('get', url);
    xhr.send(null);

    xhr.onload = () =>resolve(xhr.responseText)
    xhr.onerror = () => reject(xhr.statusText);



})

}

/**
 * give the json
 * @param url
 * @param callback
 */
function getJson(url,callback) {
     ajx(url)
    .then(value=>callback(eval(`(${value})`)))
    .catch((error)=>callback(null))

}



