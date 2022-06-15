<script setup lang="ts">
  import {onLaunch} from '@dcloudio/uni-app'
  // #ifdef MP-WEIXIN
  onLaunch(() => {
    // 微信小程序版本更新提示
    if (uni.canIUse('getUpdateManager')) {
      const updateManager = uni.getUpdateManager()

      // eslint-disable-next-line
      updateManager.onCheckForUpdate(() => {})
      updateManager.onUpdateReady(() => {
        uni.showModal({
          title: '更新提示',
          content: '新版本已经准备好，是否重启应用？',
          success({confirm}) {
            if (confirm) updateManager.applyUpdate()
          }
        })
      })
      updateManager.onUpdateFailed(() => {
        uni.showModal({
          title: '更新提示',
          content: '版本更新失败，请重启应用',
          showCancel: false
        })
      })
    }
  })
  // #endif
</script>
