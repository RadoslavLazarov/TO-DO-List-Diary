const menu = require('./menu');

(function run() {
    menu.showMenu(() => {
        return run();
    });
})();
