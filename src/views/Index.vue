<template lang="html">
  <div class="">
    <vHeader :headline="headline"
             :subline="subline"
             :mySrc="imgSrc"/>
    <ul class="main-wrapper" id="content">
      <li v-for="item in contentList" class="main-item">
        <router-link :to="{name: 'article', params: {id: item.id}}" class="item">
          <section class="list-title" v-text="item.title"></section>
        </router-link>

        <section class="list-abstract">
          {{item.summary}}
          <router-link :to="{name: 'article', params: {id: item.id}}">»</router-link>
        </section>

        <section class="list-info">
          <section class="list-author" v-text="item.author"></section>
          <section class="list-created">{{item.createTime}}</section>
        </section>
      </li>
    </ul>
    <vFooter/>
  </div>
</template>

<script>
  import {getImgUrl} from '@/api/user'
  import {mapGetters} from "vuex";
  // import contentList from "../vuex/modules/contentList";

  export default {
    name: "Index",
    components: {
      'vHeader': () => import('../components/Header.vue'),
      'vFooter': () => import('../components/Footer.vue')
    },
    data() {
      return {
        headline: 'Nickj', // 用户名
        subline: '出发之前永远是梦想，上路之后永远是挑战', // 副标题
        imgSrc: null // 头图
      }
    },
    // computed: Vuex.mapState({
    //   contentList: state => state.contentList.contentList,
    // }),
    computed: {
      ...mapGetters(["contentList"])
    },
    created() {
      var self = this;
      getImgUrl().then(res => {
        // console.log(res.data)
        let imgURL = []
        for (var i = 0; i < res.data.length; i++) {
          imgURL.push(res.data[i].url)
        }
        self.imgSrc = imgURL[Math.floor(Math.random() * (imgURL.length))]
        // console.log(self.imgSrc)
      })
      this.$store.dispatch('getContentByPage', 1)
    },
  }
</script>

<style lang="scss" scoped>
  @import '../assets/scss/index.scss';
</style>
