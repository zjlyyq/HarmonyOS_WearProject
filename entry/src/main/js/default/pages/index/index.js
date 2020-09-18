import router from  '@system.router'
let pick1value = "2";
let pick2value = "较快";
export default {
    data: {
//        title: 'Harmony'
        range1: [1, 2, 3],
        range2: ["舒缓","较快","激烈"]
    },
    clickAction() {
        router.replace({
            uri: "pages/train/train",
            params: {data1: pick1value, data2: pick2value}
        })
    },
    onCreate() {
        console.log('主页面 created');
    },
    onInit() {
        console.log('主页面 inited');
    },
    onReady() {
        console.log('主页面 onready');
    },
    onShow() {
        console.log('主页面 onshowed');
    },
    onDestroy() {
        console.log('主页面 ondestroy');
    },

    onChangeAction1(pv) {
        console.log(pv.newValue);
        pick1value = pv.newValue;
    },

    onChangeAction2(pv) {
        console.log(pv.newValue);
        pick2value = pv.newValue;
    }
}
