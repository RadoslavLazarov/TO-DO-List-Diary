const inquirer = require('inquirer');
const manager = require('./manager');

class Menu {
    constructor() {
        this.action = '';
    }

    static showMenu(callback) {
        inquirer.prompt([
            {
                type: 'list',
                message: 'Choose an option:',
                name: 'option',
                choices: ['Add item', 'Remove item', 'Mark as complete', 'Show list', 'Exit']
            }
        ]).then((answers) => {
            this.action = answers.option;
            return this.menuAction(callback);
        });
    }

    static menuAction(callback) {
        switch (this.action) {
            case 'Add item':
                manager.addItem(() => {
                    callback();
                });
                break;
            case 'Remove item':
                manager.removeItems(() => {
                    callback();
                });
                break;
            case 'Mark as complete':
                manager.completeItems(() => {
                    callback();
                });
                break;
            case 'Show list':
                manager.showItems(() => {
                    callback();
                });
                break;
            case 'Exit':
                break;
        }
    }
}

module.exports = Menu;
