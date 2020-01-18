class Storage {
    constructor() {
        this.items = [];
    }

    get() {
        return this.items;
    }

    save(item) {
        /* inquirer module uses name to display in list
           and value to save in the answers hash */
        const id = this.items.length + 1;
        const newItem = { name: item, value: id, completed: false }
        return this.items.push(newItem);
    }

    update(completed) {
        this.items.forEach((el) => {
            if (completed.values.indexOf(el.value) !== -1) {
                el.completed = true;
            }
        });
    }

    delete(deleted) {
        this.items = this.items.filter((el) => {
            return deleted.values.indexOf(el.value) == -1;
        });
    }

}

module.exports = new Storage();
