<template>
  <view>打开分包页面</view>
  <uni-row>
    <uni-col :key="item" v-for="item of state.test">{{item}}</uni-col>
  </uni-row>
  <view :class="{login: !token, nickName: token}">
    <Avatar :src="user.imageUrl" />
    <view v-if="!token" @tap="onJumpTestPageHandler">登录/注册</view>
    <template v-else>
      <view>{{ user.nickName }}</view>
      <view class="auth" :class="{active: state.auth}">{{ state.auth ? '已认证' : '未认证' }}</view>
      <view class="tips">点击编辑个人资料</view>
    </template>
  </view>
  <view :key="item" v-for="item of state.list">{{item}}</view>
  <view>
    {{ state.now }}
  </view>
  <button @tap="onJumpTestPageHandler">新开页面测试</button>
  <button @tap="appStore.logout" v-if="token">注销</button>
  <button @tap="visible = true">overlay</button>
  <uni-icons type="contact" size="30"></uni-icons>

  <overlay :visible="visible" @click="visible = false" />
</template>
<script lang="ts">
  import dayjs from 'dayjs'
  import {onShow} from '@dcloudio/uni-app'
  import {reactive, ref} from 'vue'
  import {storeToRefs} from 'pinia'

  import Avatar from '/@/components/avatar/index.vue'
  import {useAppStore} from '/@/store/modules/app'

  export default {
    components: {Avatar},
    setup () {
      const visible = ref(false)
      const state = reactive({
        now: '',
        list: ['1', '2', '3', '4', '5'],
        test: ['11', '22', '33', '44', '55'],
        auth: false
      })
      const appStore = useAppStore()
      const {user, token} = storeToRefs(appStore)

      const onJumpTestPageHandler = () => uni.navigateTo({url: '/pages/subPackages/index'})

      onShow(() => {
        console.log('home show')
        state.now = dayjs().format('YYYY-MM-DD HH:mm:ss')
        console.log(state.now)
      })

      return {
        visible,
        state,
        appStore,
        user, token,
        onJumpTestPageHandler
      }
    }
  }
</script>
<style scoped lang="scss" />
