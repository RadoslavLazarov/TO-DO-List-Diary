const inquirer = require('inquirer');

const storage = require('./storage');

class Manager {
    constructor() { }

    static addItem(callback) {
        inquirer.prompt([
            {
                type: 'input',
                message: 'Add item:',
                name: 'item',
                validate: (input) => {
                    if (input.length) {
                        return true;
                    } else {
                        return 'Please enter something...';
                    }
                }
            }
        ]).then((result) => {
            storage.save(result.item);
            return callback();
        });
    }

    static removeItems(callback) {
        inquirer.prompt([
            {
                type: 'checkbox',
                message: 'Mark items:',
                name: 'values',
                choices: storage.get()
            }
        ]).then((deleted) => {
            storage.delete(deleted);
            return callback();
        });
    }

    static completeItems(callback) {
        inquirer.prompt([
            {
                type: 'checkbox',
                message: 'Mark items:',
                name: 'values',
                choices: storage.get()
            }
        ]).then((completed) => {
            storage.update(completed);
            return callback();
        });
    }

    static showItems(callback) {
        return inquirer.prompt([
            {
                type: 'list',
                name: 'option',
                choices: () => {
                    const getItems = storage.get();
                    const items = [];

                    if (!getItems.length) {
                        return ['The list is empty...'];
                    };

                    getItems.forEach((el, i) => {
                        items.push(`${i + 1}: ${el.name} (${el.completed ? 'completed' : 'uncompleted'})`);
                    })

                    return items;
                }
            }
        ]).then(() => {
            return callback();
        });
    }
}

module.exports = Manager;
