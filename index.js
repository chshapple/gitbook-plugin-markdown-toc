var toc = require("markdown-toc");

module.exports = {
    hooks: {
        "page:before": function (page) {

            var configs = this.options.pluginsConfig["markdown-toc"];
            configs.slugify = function (str) {
                return encodeURI(str.toLowerCase()).replace(/%20/g, '-');
            }

            page.content = toc.insert(page.content, configs);
            return page;
        }
    }
}