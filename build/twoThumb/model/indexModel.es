import rp from 'request-promise';
class indexMode {
    construct() {}

    update() {
        var options = {
            method: 'GET',
            uri: 'localhost/praisephp.php'
        }

        return new Promise((resolve, reject) => {
            rp(options)
                .then(function(parsedBody) {
                    const info = JSON.parse(parsedBody);

                    if (info) {
                        resolve({
                            data: info;
                        })
                    } else {
                        reject('error');
                    }
                })
        })
    }
}

export default indexMode;
