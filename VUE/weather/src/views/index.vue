<template>
    <div class="container">
        <div class="nav">
            <div class="time">{{ now }}</div>
            <div class="city" @click="changeCity">切换城市</div>
        </div>
        <div class="city-info">
            <p class="city">{{state.city}}</p>
            <p class="weather">{{state.today.weather}}</p>
            <h2 class="temp"><em>{{state.today.temperature}}</em>℃</h2>
            <div class="detail">
                <span>风力:{{state.today.windPower}}级</span>|
                <span>风向:{{state.today.windDirection}}风</span>|
                <span>空气湿度:{{state.today.humidity   }}%</span>
            </div> 
        </div>
        <div class="future" v-if="state.future.length">
            <div class="group">
                明天:   
                <span class="tm">白天:{{state.future[1].dayTemp}}℃ {{state.future[1].dayWeather}} {{state.future[1].dayWindDir}}风 {{state.future[1].dayWindPower}}</span>
                <span class="tm">夜间:{{state.future[1].nightTemp}}℃ {{state.future[1].nightWeather}} {{state.future[1].nightWindDir}} {{state.future[1].nightWindPower}}</span>
            </div>
            <div class="group">
                后天:
                <span class="tm">白天:{{state.future[2].dayTemp}}℃ {{state.future[2].dayWeather}} {{state.future[2].dayWindDir}}风 {{state.future[2].dayWindPower}}</span>
                <span class="tm">夜间:{{state.future[2].nightTemp}}℃ {{state.future[2].nightWeather}} {{state.future[2].nightWindDir}} {{state.future[2].nightWindPower}}</span>
            </div>
        </div>
        <div class="echarts-wrap" ref="echartswrap"></div>
    </div>
    <van-action-sheet v-model:show="state.show" title="标题">
  <div class="content"><van-area title="地区" :area-list="areaList"
     :columns-num="2" @confirm="selectCity" @click="state.show=false"/>
  </div>
</van-action-sheet>


</template>

<script setup>
import { ref ,reactive ,onBeforeMount, onMounted,nextTick} from "vue";
import { areaList } from "@vant/area-data";
import * as echarts from 'echarts';

const now = ref('00:00:00')
setInterval(() => {
    now.value = new Date().toLocaleTimeString()
}, 1000);
const state = reactive({
    city:'',
    today:{

    },
    show:false,
    future:[]
})
AMap.plugin('AMap.CitySearch', function () {
  var citySearch = new AMap.CitySearch()
  citySearch.getLocalCity(function (status, result) {
    if (status === 'complete' && result.info === 'OK') {
      // 查询成功，result即为当前所在城市信息
    //   console.log(result);
        state.city=result.city
        getWeather(result.city)
    }
  })
})


const getWeather = (city)=>{
    //加载天气查询插件
AMap.plugin("AMap.Weather", function () {
  //创建天气查询实例
  var weather = new AMap.Weather();
  //执行实时天气信息查询
  weather.getLive(city, function (err, data) {
    // console.log(err, data);
    state.today=data
    //err 正确时返回 null
    //data 返回实时天气数据，返回数据见下表
  });

});
AMap.plugin("AMap.Weather", function () {
  //创建天气查询实例
  var weather = new AMap.Weather();
  //执行实时天气信息查询
  weather.getForecast(city, function (err, data) {
    console.log(err, data);
    state.future=data.forecasts
    nextTick(()=>{   // 保证内部的逻辑会在页面渲染完毕后执行
        initEcharts() 
    })
  
    //err 正确时返回 null
    //data 返回天气预报数据，返回数据见下表
  });
});
}
const selectCity =(	{ selectedOptions })=>{
state.city=selectedOptions[1].text ;
getWeather(state.city)
}
const changeCity=()=>{
    state.show=true
}
const echartswrap = ref(null)
const initEcharts=()=>{
    let myecharts = echarts.init(echartswrap.value)
    myecharts.setOption(
        {
  xAxis: {
    type: 'category',
    data: ['今天', '明天', '后天', '大后天']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
         type: 'line',  
      data: state.future.map(item=>{
        return item.dayTemp
      })
     
    }
  ]
}
    )
  
}

</script>

<style lang="css" scoped>
.container {
    min-height: 100vh;
    background-color: black;
    opacity: 0.7;
    color: white;

}

.nav {
    display: flex;
    justify-content: space-between;
    padding: 20px 20px;
}

.city-info {

    text-align: center;
}

p {
    margin-top: 10px;
}

.temp {
    font-size: 26px;
    margin: 10px 0;
}

.temp em {
    font-size: 34px;
}

.future{

    margin-top: 30px;
    padding: 0 10px
    
}
.group{
    height: 44px;
    line-height: 44px;
    background-color:rgba(255, 255, 255, 0.3);
    font-size: 13px;
    padding: 0 10px;
    margin-bottom: 10px;
    border-radius: 1 0px;
}
.echarts-wrap{
    width: 100%;
    height: 50vh;
}
</style>