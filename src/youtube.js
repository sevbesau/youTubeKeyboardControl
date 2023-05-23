class Youtube {
    options = [];
    highlightedCoords = { x: 0, y: 0 }
    cols = 0

    constructor() {
    }

    reset() {
        this.options = [];
        this.rows = 0
    }

    loadOptions() {
        this.options = document.querySelectorAll('ytd-thumbnail');
        log('found', this.options.length, 'options')
    }

    getOption({ x, y }) {
        log('get', x, y)
        if (onHomePage()) return this.options[1 + (x) + (y * this.cols)];
        return this.options[1 + y]
    }

    higlightOption({ x, y }, highlighted) {
        // TODO: hover mouse over video to enable preview
        const option = this.getOption({ x, y });
        if (highlighted) {
            option.style.border = '5px solid red'
            option.style.borderRadius = '14px'
            option.scrollIntoView({ behaviour: 'smooth', block: 'center' });
        } else {
            option.style.border = '0px'
            option.style.borderRadius = '0px'
        }
    }

    countDimensions() {
        const row = this.options[1].parentElement.parentElement.parentElement.parentElement
        this.cols = row.getAttribute('items-per-row')
    }

    getDimensions() {
        return {
            cols: this.cols,
            rows: (this.options.length - 1) / this.cols
        }
    }

    goHome() {
        document.location.replace(HOME_URL);
    }

    // open the page of the video and start playback
    playVideo({ x, y }) {
        const option = this.getOption({ x, y });
        document.location.replace(option.childNodes[2].href);
    }
}