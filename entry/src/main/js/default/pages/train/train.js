import router from '@system.router'
export default {
    clickAction() {
        router.replace({
            uri: "pages/index/index"
        })
    },

    onInit() {
        console.log(this.data1 + " " + this.data2);
    }
}
