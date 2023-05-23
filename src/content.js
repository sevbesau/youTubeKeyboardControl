const cursor = new Cursor();
const youtube = new Youtube();

const handleInput = (e) => {
    /* TODO 
     * - back to main page
     * - search
     */

    switch (e.key) {
        case KEYS.UP:
        case KEYS.DOWN:
        case KEYS.LEFT:
        case KEYS.RIGHT:
            youtube.higlightOption(cursor.pointer, false);
            cursor.move(e.key)
            youtube.higlightOption(cursor.pointer, true);
            break;
        case KEYS.PLAY:
            youtube.playVideo(cursor.pointer);
            resetState();
            break;
        case KEYS.HOME:
            youtube.goHome();
            resetState();
            break;
        default:
            break;
    }
}

const resetState = () => {
    youtube.reset();
    cursor.reset();
    // wait for the page and highlight the first option
    setTimeout(() => {
        youtube.loadOptions();
        youtube.countDimensions();
        cursor.setDimensions(youtube.getDimensions());
        youtube.highlightOption(cursor.pointer, true);
    }, 1000)
}

const main = () => {
    // continually scan for new options
    setInterval(() => {
        youtube.loadOptions();
        youtube.countDimensions();
        cursor.setDimensions(youtube.getDimensions());
    }, 1000);
    resetState();
}

addEventListener('keypress', handleInput);
addEventListener('unload', resetState);


window.onload = main()