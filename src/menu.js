const inquirer = require('inquirer');
const manager = require('./manager');

class Menu {
    constructor() {
        this.action = '';
    }

    static show() {
        inquirer.prompt([
            {
                type: 'list',
                message: 'Choose an option:',
                name: 'option',
                choices: ['Add item', 'Remove item', 'Mark as complete', 'Show list', 'Exit']
            }
        ]).then((answers) => {
            this.action = answers.option;
            return this.аctions();
        });
    }

    static аctions() {
        switch (this.action) {
            case 'Add item':
                manager.addItem(() => {
                    this.show();
                });
                break;
            case 'Remove item':
                manager.removeItems(() => {
                    this.show();
                });
                break;
            case 'Mark as complete':
                manager.completeItems(() => {
                    this.show();
                });
                break;
            case 'Show list':
                manager.showItems(() => {
                    this.show();
                });
                break;
            case 'Exit':
                break;
        }
    }
}

module.exports = Menu;
