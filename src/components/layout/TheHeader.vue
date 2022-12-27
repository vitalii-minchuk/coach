<template>
  <header class="header">
    <div class="container">
      <div class="header-wrapper">
        <h3>
          <router-link to="/">COACH</router-link>
        </h3>
        <nav class="nav">
          <router-link to="/coaches">All coaches</router-link>
          <router-link to="/requests">Requests</router-link>
        </nav>
      </div>
    </div>
  </header>
</template>
<script>
export default {};
</script>
<style scoped>
.header {
  background-color: rgb(81, 81, 238);
  box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.5);
  color: #eee;
}

.header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}

.nav {
  display: flex;
  gap: 20px;
}

.router-active-link {
  color: purple;
}
</style>
