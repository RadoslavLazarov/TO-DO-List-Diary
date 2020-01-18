const inquirer = require('inquirer');
const manager = require('./manager');

class App {
    constructor() {
        this.action = '';
    }

    static start() {
        return this.menuShow();
    }

    static menuShow() {
        inquirer.prompt([
            {
                type: 'list',
                message: 'Choose an option:',
                name: 'option',
                choices: ['Add item', 'Remove item', 'Mark as complete', 'Show list', 'Exit']
            }
        ]).then((answers) => {
            this.action = answers.option;
            return this.menuActions();
        });
    }

    static menuActions() {
        switch (this.action) {
            case 'Add item':
                manager.addItem(() => {
                    this.menuShow();
                });
                break;
            case 'Remove item':
                manager.removeItems(() => {
                    this.menuShow();
                });
                break;
            case 'Mark as complete':
                manager.completeItems(() => {
                    this.menuShow();
                });
                break;
            case 'Show list':
                manager.showItems(() => {
                    this.menuShow();
                });
                break;
            case 'Exit':
                break;
        }
    }
}

module.exports = App;
