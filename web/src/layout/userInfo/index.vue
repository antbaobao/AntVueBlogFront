<template>
  <div class="user-info">
    <el-dropdown @command="onCommand" v-if="userInfo" trigger="click">
      <span class="user-info__name">
        {{userInfo.name}}
        <i class="el-icon-arrow-down el-icon--right" style="color: white"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="1">登出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <div v-else class="user-info__login-cn">
      <a @click="loginVisible=true" class="user-info__login">登录</a>
      |
      <a @click="signupVisible=true" class="user-info__signup">注册</a>
    </div>
    <el-dialog
      append-to-body
      :visible="loginVisible || signupVisible"
      width="30%"
      @close="onDialogClose"
      align="center"
    >
      <Login
        v-show="loginVisible"
        @success="onLoginSuccess"
        @toggle="()=>{loginVisible=false;signupVisible=true}"
        ref="login"
      />
      <Signup
        ref="signup"
        v-show="signupVisible"
        @success="onSignupSuccess"
        @toggle="()=>{loginVisible=true;signupVisible=false}"
      />
    </el-dialog>
  </div>
</template>
<script>
import Login from './login'
import Signup from './signup'
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      loginVisible: false,
      signupVisible: false
    }
  },
  components: {
    Login,
    Signup
  },
  computed: {
    userInfo() {
      return this.$store.state.user.userInfo
    }
  },
  async created() {
    await this.GET_USER_INFO()
  },
  methods: {
    ...mapActions(['GET_USER_INFO', 'LOGIN']),
    onDialogClose() {
      if (this.loginVisible) {
        this.loginVisible = false
        this.$refs.login.resetForm()
      } else {
        this.signupVisible = false
        this.$refs.signup.resetForm()
      }
    },
    onSignupSuccess() {
      this.signupVisible = false
      this.loginVisible = true
      this.$refs.signup.resetForm()
    },
    onLoginSuccess() {
      this.loginVisible = false
      this.GET_USER_INFO()
      this.$refs.login.resetForm()
    },
    logout() {
      localStorage.removeItem('token')
      location.reload()
    },
    onCommand(val) {
      if (val === '1') {
        this.logout()
      }
    },
    async getUserInfo() {
      try {
        const res = await this.GET_USER_INFO()
        if (res.data.code === 'error_003') {
          this.$message.error('登录过期，请重新登录')
          this.logout()
        }
      } catch (e) {
        this.$message.error('请求出错')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.user-info {
  color: white;
  &__login {
    color: white;
    font-size: 14px;
  }
  &__signup {
    color: white;
    font-size: 14px;
  }
  &__name {
    font-size: 14px;
    color: white;
    cursor: pointer;
    display: inline-block;
    width: 80px;
    text-align: right;
    display: inline-block;
    width: 80px;
    text-align: right;
    text-overflow: ellipsis;
  }
  &__login-cn{
    width: 80px;
  }
}
</style>
