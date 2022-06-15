<template>
  <view>打开普通页面</view>
  <uni-row>
    <uni-col :key="item" v-for="item of state.test">{{item}}</uni-col>
  </uni-row>
  <view :class="{login: !token, nickName: token}">
    <view v-if="!token" @tap="onJumpTestPageHandler">登录/注册</view>
    <template v-else>
      <image style="width: 50px; height: 50px;" :src="user.imageUrl" />
      <view>{{ user.nickName }}</view>
      <view class="auth" :class="{active: state.auth}">{{ state.auth ? '已认证' : '未认证' }}</view>
      <view class="tips">点击编辑个人资料</view>
    </template>
    <uni-icons type="right" size="18" />
  </view>
  <view :key="item" v-for="item of state.list">{{item}}</view>
  <view>
    {{ state.now }}
  </view>
  <button @tap="onJumpTestPageHandler">新开页面测试</button>
  <button @tap="appStore.logout" v-if="token">注销</button>
</template>
<script setup lang="ts">
  import dayjs from 'dayjs'
  import {onShow} from '@dcloudio/uni-app'
  import {reactive} from 'vue'
  import {storeToRefs} from 'pinia'

  import {useAppStore} from '/@/store/modules/app'

  const state = reactive({
    now: '',
    list: ['1', '2', '3', '4', '5'],
    test: ['11', '22', '33', '44', '55'],
    auth: false
  })
  const appStore = useAppStore()
  const {user, token} = storeToRefs(appStore)

  const onJumpTestPageHandler = () => uni.navigateTo({url: '/pages/test/index'})

  onShow(() => {
    console.log('user show')
    state.now = dayjs().format('YYYY-MM-DD HH:mm:ss')
    console.log(state.now)
  })
</script>
<style scoped lang="scss" />
