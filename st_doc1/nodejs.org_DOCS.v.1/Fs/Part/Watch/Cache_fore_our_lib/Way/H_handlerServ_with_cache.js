const mod_path = require('path');
const memoryUsageLog = require(mod_path.join(__dirname, 'Additional', 'memoryUsageLog'));

const ls = (res, list) => {
    res.write('<html>');
    for (const name of list) {
        res.write(`<li><a href="${name}/">${name}</li>`);
    }
    memoryUsageLog();
    res.end('</html>');
};

const h_cashe = (req, res, cache) => {
    const url = req.url.substring(1);
    if (!url) return ls(res, cache.keys());
    const [mod, method] = url.split('/');
    const methods = cache.get(mod);
    if (methods) {
        if (!method) return ls(res, Object.keys(methods));
        const handler = methods[method];
        if (handler) {
            res.end(handler().toString());
            return;
        }
    }
    res.end('File ' + url + 'not found');
};


module.exports = h_cashe;