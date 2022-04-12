<template>

  <div>
    <nav v-if="show">
      <ul class="pagination">
        <li :class="{ disabled: !prev }" v-on:click="go(prev)"><span>&laquo;</span></li>
        <li v-for="link in links" track-by="$index" :class="{ active: current == link, disabled: isNaN(link) }"
          v-on:click="go(link)"><span>{{ link }}</span></li>
        <li :class="{ disabled: !next }" v-on:click="go(next)"><span>&raquo;</span></li>
      </ul>
    </nav>
  </div>

</template>
<script>

Vue.component('pagination', {
  template: '#pagination',
  props: {
    total: {
      type: Number,
      default: 0
    },
    current: {
      type: Number,
      default: 1
    },
    limit: {
      type: Number,
      default: 4,
      coerce: function (limit) {
        return limit - 1;
      }
    }
  },
  data: function () {
    return {
      show: false
    };
  },
  computed: {
    pages: function () {
      var pages = [];

      for (var i = 1; i <= this.total; i++) {
        pages.push(i);
      }

      return pages;
    },
    links: function () {
      var first = [1, '...'],
        last = ['...', this.total],
        range = [];

      if (this.current <= this.limit) {
        range = this.range(1, this.limit + 1);

        return (this.current + range.length) <= this.total ? range.concat(last) : range;
      } else if (this.current > (this.total - this.limit)) {
        range = this.range(this.total - (this.limit), this.total);

        return (this.current - range.length) >= 1 ? first.concat(range) : range;
      } else {
        range = this.range(this.current - Math.ceil(this.limit / 2), this.current + Math.ceil(this.limit / 2));

        return first.concat(range).concat(last);
      }
    },
    next: function () {
      var next = this.current + 1;

      return next <= this.total ? next : false;
    },
    prev: function () {
      return this.current - 1;
    },
    show: function () {
      return this.next || this.prev;
    }
  },
  methods: {
    range: function (start, end) {
      var pages = [];

      for (var i = start - 1; i < end; i++) {
        if (this.pages[i]) {
          pages.push(this.pages[i]);
        }
      }

      return pages;
    },
    go: function (page) {
      if (isNaN(page)) {
        return;
      }

      this.$dispatch('paginate:to', page);
    }
  }
});







</script>