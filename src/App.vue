<template>
  <div>
    <h3>Friends list</h3>
    <new-friend @make-friend="createNewFriend"></new-friend>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :friend="friend"
        @toggle-favorite="handleFavorite"
      ></friend-contact>
    </ul>
  </div>
</template>

<script>
import FriendContact from "./components/FriendContact.vue";
import newFriend from "./components/NewFriend.vue";
export default {
  components: { "friend-contact": FriendContact, "new-friend": newFriend },
  data() {
    return {
      friends: [
        {
          id: 1,
          name: "Max",
          age: 33,
          email: "max@gmail.com",
          isFavorite: true,
        },
        {
          id: 2,
          name: "Den",
          age: 35,
          email: "den@gmail.com",
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    handleFavorite(id) {
      const friends = this.friends.map((friend) => {
        if (friend.id === id) {
          return { ...friend, isFavorite: !friend.isFavorite };
        }
        return friend;
      });

      this.friends = friends;
    },
    createNewFriend(friend) {
      const getId = this.friends.sort((a, b) => b.id - a.id);
      const newId = getId[0].id + 1;
      const newFriend = { ...friend, id: newId };

      this.friends.push(newFriend);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
