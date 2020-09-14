import router from  '@system.router'
export default {
    data: {
        title: 'Harmony'
    },
    clickAction() {
        router.replace({
            uri: "pages/train/train"
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
    }
}
