const inquirer = require('inquirer');
const manager = require('./manager');

class App {
    constructor() {
        this.action = '';
    }

    static start() {
        return this.showMenu();
    }

    static showMenu() {
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
                    this.showMenu();
                });
                break;
            case 'Remove item':
                manager.removeItems(() => {
                    this.showMenu();
                });
                break;
            case 'Mark as complete':
                manager.completeItems(() => {
                    this.showMenu();
                });
                break;
            case 'Show list':
                manager.showItems(() => {
                    this.showMenu();
                });
                break;
            case 'Exit':
                break;
        }
    }
}

module.exports = App;
