<script setup lang="ts">
import { computed } from 'vue'
interface Header {
  title: string
  key: string
  isSortable: boolean
  isSlot?: boolean
}

interface Data {
  [key: string]: unknown
}

interface Props {
  headers: Header[]
  data: Data[]
  isSearchable?: boolean
  tableTitle: string
  tableSubTitle: string
}
const props = defineProps<Props>()

const tableData = computed(() => {
  return props.data
})
</script>

<template>
  <div>
    <header>
      <div>
        <h3>
          {{ props.tableTitle }}
        </h3>
        <p>
          {{ props.tableSubTitle }}
        </p>
      </div>
    </header>
    <table>
      <thead>
        <tr class="table-heading">
          <th v-for="(header, index) in props.headers" :key="index" class="table-heading-item">
            {{ header.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tableData" :key="index" class="table-item">
          <td v-for="(header, headerIndex) in props.headers" :key="headerIndex">
            <slot v-if="header.isSlot" :data="item" :name="header.key" />
            <span v-else>{{ item[header.key] }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
table {
  width: 100%;
  border: 1px solid #e0e0e0;
  padding: 0;
  border-collapse: separate;
  border-radius: 8px;
  border-spacing: 0;
  overflow: hidden;

  thead {
    background: #f5f5f5;
    font-family: 'Helvetica Neue';
    font-weight: 500;
    font-size: 14px;
    color: #000000;
    padding: 16px;
    height: 50px;
    border-collapse: collapse;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }

  tbody {
    tr {
      height: 81px;
      border-top: 1px solid #e0e0e0;
      border-collapse: seperate;
    }
  }

  td,
  th {
    text-align: left;
    padding: 0 16px;
    border-collapse: collapse;
  }
  td {
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
  }
}

.table-heading {
  .table-heading-item {
    font-family: 'Helvetica Neue';
    font-weight: 500;
    font-size: 14px;
    color: #000000;
    background-clip: padding-box;
  }
}
</style>
