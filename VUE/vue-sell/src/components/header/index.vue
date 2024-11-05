    <template>
        <div class="header">
            <div class="content-wrapper">
                <div class="avatar"><img src="https://pic4.zhimg.com/v2-ea61f21b224213fa46c0e5370b6f4bdf_r.jpg" alt="">
                </div>
                <div class="content">
                    <div class="title">

                        <span class="brand"></span>
                        <span class="name">周杰伦手抓饼</span>
                    </div>
                    <div class="description">
                        飞鸟转送/三分钟送达
                    </div>
                    <div class="suppprt">
                        <!-- pic -->
                        <span>在线支付满20减19</span>
                    </div>
                </div>
            </div>
            <div class="bulletin-wrapper"></div>
        </div>
    </template>

<script setup>

</script>

<style lang="less" scoped>
@import 'src/assests/variable.less';
@import 'src/assests/mixin.less';


.header {
    color: @color-white;
    position: relative;
    background-color: @color-background-ss;

    .content-wrapper {
        display: flex;
        padding: 24px 12px 18px 24px;

        .avatar {

            width: 64px;
            height: 64px;
            overflow: hidden;

            img {
                border-radius: 10px;
                width: 100%;
            }
        }

        .content {
            flex: 1;
            margin-left: 16px;

            .title {
                margin-bottom: 8px;


                .brand {
                    display: inline-block;
                    width: 30px;
                    height: 16px;
                    background-image: url(./brand@2x.png);
                    .bg-image('brand');
                    background-size: 100% 100%;
                }

                .name {
                    font-weight: bold;
                    font-size: @fontsize-large;
                    margin-left: 6px;
                }
            }

            .description {
                font-size: @fontsize-small;
                margin-bottom: 8px;
            }

            .support {}
        }
    }

    @media(-webkit-min-device-pixel-ratio:3) {
        .brand {
            background-image: url(./brand@3x.png) !important;
        }
    }
}
</style>