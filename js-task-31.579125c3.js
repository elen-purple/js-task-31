class CountdownTimer {
    constructor({ selector, targetDate }){
        this.selector = selector;
        this.targetDate = targetDate;
    }
    setDate() {
        const targetDate = new Date(this.targetDate);
        let nowDate = Date.now();
        let dif = targetDate - nowDate;
        let days = Math.floor(dif / 1000 / 60 / 60 / 24);
        dif %= 86400000;
        let hours = Math.floor(dif / 1000 / 60 / 60);
        dif %= 3600000;
        let mins = Math.floor(dif / 1000 / 60);
        dif %= 60000;
        let secs = Math.floor(dif / 1000);
        const timer = document.querySelector(this.selector);
        timer.querySelector(`[data-value="days"]`).textContent = days;
        timer.querySelector(`[data-value="hours"]`).textContent = `${hours}`.padStart(2, "0");
        timer.querySelector(`[data-value="mins"]`).textContent = `${mins}`.padStart(2, "0");
        timer.querySelector(`[data-value="secs"]`).textContent = `${secs}`.padStart(2, "0");
        setInterval(()=>{
            nowDate = Date.now();
            let dif = targetDate - nowDate;
            days = Math.floor(dif / 1000 / 60 / 60 / 24);
            dif %= 86400000;
            hours = Math.floor(dif / 1000 / 60 / 60);
            dif %= 3600000;
            mins = Math.floor(dif / 1000 / 60);
            dif %= 60000;
            secs = Math.floor(dif / 1000);
            timer.querySelector(`[data-value="days"]`).textContent = days;
            timer.querySelector(`[data-value="hours"]`).textContent = `${hours}`.padStart(2, "0");
            timer.querySelector(`[data-value="mins"]`).textContent = `${mins}`.padStart(2, "0");
            timer.querySelector(`[data-value="secs"]`).textContent = `${secs}`.padStart(2, "0");
        }, 1000);
    }
}
new CountdownTimer({
    selector: "#timer-1",
    targetDate: new Date("Jul 17, 2025")
}).setDate();

//# sourceMappingURL=js-task-31.579125c3.js.map
