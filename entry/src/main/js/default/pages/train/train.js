import router from '@system.router'
let speedSpan = 2;
let time1 = null;
let time2 = null;
let timeout = 0;
let startTime = 0;
let totalTime = 0;
export default {
    data: {
        total: 120,
        interval: null,
        isShow: true,
        huxi: '吸气',
        percent: 10
    },
    clickAction() {
        if (this.interval) {
            console.log('interval id:' + this.interval);
            clearInterval(this.interval);
            this.interval = null;
        }
        if (time1) {
            clearInterval(time1);
            clearInterval(time2);
            time2 = time1 = null;
        }
        router.replace({
            uri: "pages/index/index"
        })
    },

    onInit() {
        console.log(this.data1 + " " + this.data2);
        this.total = 60 * this.data1;
        speedSpan = this.data2 === '激烈'? 2:
                this.data2 === '较快'? 4:
                6;
        totalTime = speedSpan * 1000;
        this.run();
        this.countdown();
        this.interval = setInterval(() => {
            if (this.total > 0) {
                this.total -= 1;
            }else {
                clearInterval(this.interval);
                if (time1) {
                    clearInterval(time1);
                    clearInterval(time2);
                    time2 = time1 = null;
                }
                this.interval = null;
                this.isShow = false;
            }
        }, 1000);
        console.log('interval id:' + this.interval);
    },
    run() {
        time1 = setInterval(() => {
            if (this.huxi === '吸气') {
                this.huxi = '呼气';
            }else {
                this.huxi = '吸气';
            }
            clearInterval(time2);
            this.countdown();
            this.percent = 0;
        }, speedSpan*1000)
    },

    countdown() {
        startTime = new Date().getTime();
        time2 = setInterval(() => {
            let now = new Date().getTime();
            this.percent = Math.floor( (now-startTime) * 100 / totalTime ) ;
        }, 100)
    }
}
