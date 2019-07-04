<template>
  <div id="app">
    <div class="main-view"></div>
    <div class="main-right">
      <div class="right-menu">
        <div class="menu">
          <div class="menu-title">开始</div>
        </div>
      </div>
    </div>
    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}
html,
body {
  height: 100%;
  overflow: hidden;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  padding: 0px;
  margin: 0px;
}
.main-view {
  width: 100%;
  height: 100%;
  background-color: #555;
}
.main-right {
  width: 100%;
  height: 100%;
  background-color: #333;
  position: absolute;
  left: 100%;
  top: 0px;
}
.right-menu {
  width: 200px;
  height: 100%;
  position: relative;
  left: -200px;
  top: 0px;
  background-color: #444;
  transition: 0.5s ease-in-out 0s;
  /* padding-top: 10px; */
}
/* .right-menu:hover{
  left: -800px;
} */
.menu {
  width: 100%;
  overflow: hidden;
}
.menu-title {
  height: 55px;
  line-height: 55px;
  font-size: 24px;
  color: #eee;
  text-align: center;
  cursor: pointer;
  user-select: none;
}
.menu-title:hover {
  background-color: #333;
}
</style>
