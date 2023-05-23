class Cursor {
    rows = 0;
    cols = 0;
    pointer = { x: 0, y: 0 };

    constructor() {

    }

    reset() {
        rows = 0;
        cols = 0;
        pointer = { x: 0, y: 0 };
    }

    setDimensions({ rows, cols }) {
        this.rows = rows;
        this.cols = cols;
    }

    move(direction) {
        log('move', direction)
        switch (direction) {
            case KEYS.UP:
                this.pointer.y = Math.max(0, this.pointer.y - 1);
                break;
            case KEYS.DOWN:
                this.pointer.y = Math.min(this.rows - 1, this.pointer.y + 1);
                break;
            case KEYS.LEFT:
                this.pointer.x = Math.max(0, this.pointer.x - 1);
                break;
            case KEYS.RIGHT:
                this.pointer.x = Math.min(this.cols - 1, this.pointer.x + 1);
                break;
        }
    }
}
