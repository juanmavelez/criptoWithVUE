new Vue({
  el: '#app',

  data() {
    return {
      courses: [],
      title: '',
      time: 0,
    };
  },

  computed: {
    totalTime() {
      if (!this.courses.length) {
        return 0;
      }
      return this.courses.reduce((a, b) => a + parseInt(b.time), 0);
    },
  },

  methods: {
    addCourse() {
      this.courses.push({ title: this.title, time: this.time });
      this.title = '';
      this.time = 0;
    },
  },
});
