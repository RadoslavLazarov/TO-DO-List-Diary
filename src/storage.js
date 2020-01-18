class Storage {
    constructor() {
        this.items = [];
        this.id = 0;
    }

    get() {
        return this.items;
    }

    save(item) {
        this.id++;
        const newItem = { name: item, value: this.id, completed: false }
        this.items.push(newItem);
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
