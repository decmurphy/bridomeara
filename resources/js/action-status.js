
class ActionStatus {

    constructor(icon = null) {
        this._in_progress = false;
        this._color = '';
        this._icon = icon;

        this._resetIcon = icon;
    }

    get in_progress() {
        return this._in_progress;
    }

    get color() {
        return this._color;
    }

    get icon() {
        return this._icon;
    }

    start() {
        this._in_progress = true;
    }

    success() {
        this._in_progress = false;
        this._color = 'bg-success text-black';
        this._icon = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';

        // this.reset();
    }

    fail() {
        this._in_progress = false;
        this._color = 'bg-fail text-black';
        this._icon = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';

        this.reset();
    }

    reset() {
        setTimeout(() => {
            this._icon = this._resetIcon;
            this._color = '';
        }, 4000);
    }
}

export default ActionStatus;