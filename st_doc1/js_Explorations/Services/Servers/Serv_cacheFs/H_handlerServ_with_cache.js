const h_cashe = (req, res, cache) => {
    const url = req.url.substring(1);// req.url = /1.txt
    // substring(1) return from index = 1 to end
    if (!url) {
        const keys = cache.keys();
        for (let item of keys) {
            res.write(item + '\n')
        }
        // cache.keys.forEach(item => {
        //     res.write(item + '\n')
        // })
        res.end();
    } else {
        console.log({url, cache});

        const data = cache.get(url);
        if (data) res.end(data);
        else res.end('File ' + url + 'not found');
    }
};

module.exports = h_cashe;