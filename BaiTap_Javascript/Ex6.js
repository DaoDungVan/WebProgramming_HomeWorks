//NOTE: Bài tập 6:
function Stopwatch() {
    this.duration = 0;
    let startTime = 0;
    let running = false;

    this.start = function() {
        if (running) {
            console.log("Stopwatch đang chạy");
            return;
        }
        running = true;
        startTime = Date.now();
    };

    this.stop = function() {
        if (!running) {
            console.log("Stopwatch chưa được bắt đầu");
            return;
        }
        running = false;
        this.duration += (Date.now() - startTime) / 1000;
    };

    this.reset = function() {
        this.duration = 0;
        running = false;
        startTime = 0;
    };
}

const sw = new Stopwatch();

sw.start();
sw.stop();
console.log(sw.duration);

sw.start();
sw.start(); // báo lỗi

sw.stop();
sw.stop(); // báo lỗi

sw.reset();
console.log(sw.duration);