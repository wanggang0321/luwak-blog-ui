<template>
  <div class="comment">
    <h1>评论</h1>
    <ul class="comments-list">
      <li class="comment-item" v-for="item in commentList" :key="item.id">
        <div class="item-title">
          <span class="title-name" v-text="item.username"></span>
          <span class="title-createdAt" v-text="item.createTime"></span>
        </div>
        <!--评论回复-->
        <div v-if="item.replyList" class="item-reply">
          <div class="item-title">
            <span class="title-name" v-text="item.reply.username"></span>
            <span class="title-createdAt" v-text="item.reply.createTime"></span>
          </div>
          <p class="item-content" v-text="item.reply.content"></p>
        </div>

        <p class="item-content" v-text="item.content"></p>
        <div class="comment-reply">
          <a href="javascript:void(0)" @click="reply(item.id, item.username)" class="reply">回复</a>
        </div>
      </li>
    </ul>
    <!--回复输入栏-->
    <a id="firstAnchor"></a>
    <h1 id="comment-form-title">回复 {{replyName}}</h1>
    <div class="comment-form">
      <el-input class="form-name" v-model="formName" placeholder="你的昵称？"></el-input>
      <el-input class="form-content" type="textarea" :rows="8" :cols="30" placeholder="欢迎发表你的评论-……-" v-model="formContent"></el-input>
      <div class="comment-reply">
        <a @click="submit()" class="reply reply-submit">提交</a>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from "vuex"
  export default {
    data() {
      return {
        formName: '',
        formContent: '',
        formReply: '',
        replyName: '',
        articleId: this.$route.params.id
      }
    },
    created() {
      this.$store.dispatch('getCommentsList', this.articleId)
    },
    computed: {
      ...mapGetters(["commentList"])
      // commentList() {
      //   return [].slice.call(...mapGetters(["commentList"])).map((item, index, arr) => {
      //     if (item.replyList) {
      //       const replyToId = item.replyList
      //       let obj = {}
      //       let reply = arr.find(data => data.id === replyToId)
      //       obj.id = item.id
      //       obj.name = item.name
      //       obj.createdTime = item.createdTime
      //       obj.content = item.content
      //       obj.replyList = reply
      //
      //       return obj
      //     }
      //     return item
      //   })
      // }
    },
    methods: {
      submit() {
        if (!this.formName.trim() || !this.formContent.trim()) {
          this.alertWarn('昵称和内容不可为空!');
          return
        }
        const replyData = {
          "name": this.formName,
          "content": this.formContent,
          "reply": this.formReply,
          "articleId": this.articleId
        }
        this.$store.dispatch('submitComment', replyData)
        // this.formName = ''
        this.formContent = ''
        this.replyName = ''
        this.formReply = ''
        this.$store.dispatch('getCommentsList', this.articleId)
        this.$message({
          message: '感谢您的宝贵评论!',
          type: 'success'
        });
      },
      reply(replyToId, replyToName) {
        // console.log(replyToName)
        this.replyName = replyToName

        var anchor = this.$el.querySelector('#firstAnchor')
        document.body.scrollTop = anchor.offsetTop

        this.formReply = replyToId
      },
      alertWarn(msg) {
        this.$message({
          message: msg,
          type: 'warning'
        });
      },
    }
  }
</script>

<style lang="scss">
  @import '../assets/scss/components/comment.scss';
</style>
