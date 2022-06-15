<template>
  <view>我是普通页面</view>
  <view>
    <button @tap="onSubmit">登录</button>
  </view>
</template>
<script setup lang="ts">
  import {useAppStore} from '/@/store/modules/app'

  const {login} = useAppStore()

  const onSubmit = () => {
    login({
      id: '13800000000',
      token: '13800000000',
      imageUrl: 'https://img2.woyaogexing.com/2022/04/15/f212a1135ce445a8999d39b4a3d29aed!400x400.jpeg',
      nickName: '马化腾',
      phoneNumber: '13800000000',
    })
    uni.showToast({icon: 'none', title: '登录成功'})
    uni.navigateBack({delta: 1})
  }
</script>
<style scoped lang="scss" />
