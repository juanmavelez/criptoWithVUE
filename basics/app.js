Vue.component('CoinDetail', {
  props: ['coin'],
  data() {
    return {
      showPrices: false,
      value: 0,
    };
  },
  methods: {
    toggleShowPrices() {
      this.showPrices = !this.showPrices;
      this.$emit('change-color', '#f4F4F4');
    },
  },
  computed: {
    title() {
      return `${this.coin.name} - ${this.coin.symbol}`;
    },
    convertedValue() {
      if (!this.value) {
        return 0;
      }
      return this.value / this.coin.price;
    },
  },

  template: `
  <div>
      <img  class="img"
      v-on:mouseover=toggleShowPrices
      v-bind:src="coin.img"
      v-bind:alt="coin.name">
    <h1
      v-bind:class="changePercent > 0 ? 'green' : 'red'">
      {{coin.title}}
      <span v-if="coin.changePercent > 0">Sube</span>
      <span v-else-if="coin.changePercent < 0">Baja</span>
      <span v-else>NADA</span>
    </h1>
    <span v-on:click="toggleShowPrices">{{showPrices? 'Hide prices' : 'Show prices'}}</span>
    <input type="number" v-model="convertedValue">
    <span>{{coin.value}}</span>

    <ul v-show=showPrices>
      <li v-bind:class="{orange: p.value === coin.price, red:p.value <coin.price, green:p.value >coin.price}"
        v-for="(p,i) in coin.pricesWithDays" v-bind:key="p.day">{{p.day}}
        {{p.value}}</li>
    </ul>
  </div>
    `,
});
/************************ */

/*********************** */

new Vue({
  el: '#app',
  data() {
    return {
      btc: {
        name: 'Bitcoin',
        symbol: 'BTC',
        img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
        changePercent: 0,
        price: 8400,
        pricesWithDays: [
          { day: 'Lunes', value: 8400 },
          { day: 'Martes', value: 7900 },
          { day: 'Miercoles', value: 8200 },
          { day: 'Jueves', value: 9000 },
          { day: 'Viernes', value: 9400 },
          { day: 'Sabado', value: 10000 },
          { day: 'Domingo', value: 10200 },
        ],
      },
    };
  },
  methods: {
    updateColor(color) {
      this.color = color || this.color.split('').reverse().join('');
    },
  },
});
