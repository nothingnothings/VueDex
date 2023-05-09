<template>
  <div class="toolbar-container">
    <nav class="toolbar">
      <div class="toolbar__logo">
        <h1>LOGO</h1>
      </div>

      <ul>
        <li>
          <router-link to="/">
            <i class="fa-sharp fa-solid fa-house"></i>
            <p>Início</p>
          </router-link>
        </li>
        <li>
          <router-link to="/dashboard">
            <i class="fa-solid fa-chart-line"></i>
            <p>Métricas</p>
          </router-link>
        </li>
        <li>
          <router-link to="/boxes">
            <i class="fa-solid fa-boxes-stacked"></i>
            <p>Selecionados</p>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {};
  },

  methods: {},
});
</script>

<style lang="scss" scoped>
@import '@/styles/essentials.scss';

.toolbar-container {
  .toolbar {
    height: 6vh;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 8px;
    background: $white;
    box-shadow: 0 0 10px #0000001f;
    transition: 0.5s ease;
    overflow: hidden;

    @include break-up(map-get($breakpoints, 'md')) {
      height: 100vh;
      width: 80px;
      left: 0;
      top: 0;
      right: inherit;

      &:hover {
        width: 205px;
        transition: 0.5s ease;

        ul > li {
          width: 200px;
          justify-content: start;

          & a > p {
            opacity: 1;
            transition: 0.2s ease-in;
          }
        }
      }
    }

    &__logo {
      display: none;
      justify-content: center;
      color: $white;
    }

    ul {
      list-style: none;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 0;
      margin: 0;

      @include break-up(map-get($breakpoints, 'md')) {
        height: 242.23px;
        justify-content: space-around;
        flex-direction: column;
        align-items: flex-start;
      }

      li {
        width: 25%;
        min-width: 65px;
        padding: 10px;
        margin: {
          top: 5px;
          left: 5px;
          bottom: 5px;
        }
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        a,
        i {
          text-decoration: none;
          font-size: 16px;
          color: $grey;
        }

        p {
          display: none;
          opacity: 0;
          color: $grey;
          font-weight: 600;
          margin-left: 10px;
        }

        @include break-up(map-get($breakpoints, 'md')) {
          width: 65px;
          min-width: inherit;
          justify-content: space-between;
          margin-left: 19px;

          p,
          a,
          i {
            display: flex;
            align-items: center;
          }
        }

        &:hover {
          p,
          a,
          i {
            color: #7e1f869c;
          }
        }

        &:active,
        .active-path {
          p,
          a,
          i {
            color: $primary;
          }
        }
      }
    }
  }
}
</style>
