<template>
  <div class="dropdown-container" v-if="show">
    <div class="dropdown">
      <div name="dropdown__body">
        <ul class="dropdown__body--list">
          <li>
            <button>
              <i class="fa-solid fa-trash-can"></i>
              <p>Remove</p>
            </button>
          </li>

          <li>
            <button>
              <i class="fa-solid fa-trash-can"></i>
              <p>Remove</p>
            </button>
          </li>

          <li>
            <button>
              <i class="fa-solid fa-trash-can"></i>
              <p>Remove</p>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  //   components: {},
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  //   methods: {},
});
</script>

<style lang="scss" scoped>
@import '@/styles/essentials.scss';

.dropdown-container {
  z-index: 100;

  .dropdown {
    background: $white;
    border-radius: 8px;
    box-shadow: 5px 5px 10px rgb(177 177 177 / 12%);

    &__body {
      &--list {
        padding: 0;
        list-style: none;

        li {
          button {
            width: 100%;
            display: flex;
            align-items: center;
            transition: 0.1s ease;

            p {
              margin-left: 10px;
              text-transform: capitalize;
            }

            &:hover {
              background: #7e1f86;

              i,
              p {
                color: $white;
              }
            }
          }
        }
      }
    }
  }
}
</style>
