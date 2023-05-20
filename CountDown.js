class CountDown {
    constructor(time) {
        this.endTime = new Date(time)
        this.currentTime = new Date()
        this.remainingTime = (this.endTime - new Date())
        this.complete = this.remainingTime <= 0 ? true : false
    }
    isComplete() {
        return this.complete
    }
    hasYears() {
        return Math.floor(((((((this.endTime - new Date()) / 1000) / 60) / 60) / 24) / 7) / 52) <= 0 ? false : true
    }
    hasWeeks() {
        return Math.floor((((((this.endTime - new Date()) / 1000) / 60) / 60) / 24) / 7) <= 0 ? false : true
    }
    hasDays() {
        return Math.floor(((((this.endTime - new Date()) / 1000) / 60) / 60) / 24) <= 0 ? false : true
    }
    hasHours() {
        return Math.floor((((this.endTime - new Date()) / 1000) / 60) / 60) <= 0 ? false : true
    }
    hasMinutes() {
        return Math.floor(((this.endTime - new Date()) / 1000) / 60) <= 0 ? false : true
    }
    hasSeconds() {
        return Math.floor((this.endTime - new Date()) / 1000) <= 0 ? false : true
    }
    Years() {
        return Math.floor((((((((this.endTime - new Date()) / 1000) / 60) / 60) / 24) / 7) / 52) % 100)
    }
    Weeks() {
        return Math.floor(((((((this.endTime - new Date()) / 1000) / 60) / 60) / 24) / 7) % 52)
    }
    Days() {
        return Math.floor((((((this.endTime - new Date()) / 1000) / 60) / 60) / 24) % 7)
    }
    Hours() {
        return Math.floor(((((this.endTime - new Date()) / 1000) / 60) / 60) % 24)
    }
    Minutes() {
        return Math.floor((((this.endTime - new Date()) / 1000) / 60) % 60)
    }
    Seconds() {
        return Math.floor(((this.endTime - new Date()) / 1000) % 60)
    }
}


// this.remainingTime / 1000



export default CountDown;