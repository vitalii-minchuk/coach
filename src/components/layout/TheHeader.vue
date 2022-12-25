<template>
  <header class="header">
    <div class="wrapper">
      <h3><router-link to="/">LOGO</router-link></h3>
      <nav>
        <router-link to="/teams">Teams</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/users">Users</router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  text-align: center;
  height: 40px;
  margin-bottom: 30px;
  background-color: rgba(0, 0, 0, 0.3);
  line-height: 40px;
}
.wrapper {
  display: flex;
  justify-content: space-between;
}

.active-link {
  color: blueviolet;
}
</style>
