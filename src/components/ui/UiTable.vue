<script setup lang="ts">
import { computed, ref } from 'vue'
import UiIcon from './UiIcon.vue'
import UiInput from './UiInput.vue'

interface Header {
  title: string
  key: string
  isSortable: boolean
  isSlot?: boolean
  isCheckable?: boolean
}
interface Props {
  headers: Header[]
  data: Record<string, unknown>
  tableTitle: string
  tableSubTitle: string
  fieldsToSearch?: string[]
  isMini?: boolean
}
const props = defineProps<Props>()
const searchTerm = ref(null)

const tableData = computed(() => {
  if (!searchTerm.value || !props.fieldsToSearch) {
    if (props.isMini) return props.data.slice(0, 4)

    return props.data
  }

  const filteredData = props.data.filter((item: Record<string, unknown>) => {
    return props.fieldsToSearch?.some((key) => {
      const value = item[key]
      if (typeof value === 'string') {
        return value.toLowerCase().includes(searchTerm.value.toLowerCase())
      } else if (Array.isArray(value)) {
        return value.some((v) => v.toLowerCase().includes(searchTerm.value.toLowerCase()))
      }
      return false
    })
  })

  if (props.isMini) return filteredData.slice(0, 4)

  return filteredData
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
      <UiInput
        v-if="props.fieldsToSearch"
        v-model="searchTerm"
        icon-name="Search"
        placeholder="Search"
      />
    </header>
    <div class="table-container">
      <table>
        <thead>
          <tr class="table-heading">
            <th v-for="(header, index) in props.headers" :key="index" class="table-heading-item">
              <div>
                <input v-if="header.isCheckable" type="checkbox" />

                <span class="title">{{ header.title }}</span>
                <UiIcon v-if="header.isSortable" name="ArrowDown" />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in tableData" :key="index" class="table-item">
            <td v-for="(header, headerIndex) in props.headers" :key="headerIndex">
              <slot v-if="header.isSlot" :data="item" :name="header.key" />
              <span v-else class="table-text">{{ item[header.key] }}</span>
            </td>
          </tr>
        </tbody>
      </table>
      <footer v-if="$slots.footer">
        <slot name="footer" />
      </footer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
  h3 {
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
    margin-bottom: 4px;
  }
  p {
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #6a6a6a;
  }
}
.table-container {
  border: 1px solid #e0e0e0;
  overflow: hidden;
  border-radius: 8px;
}
table {
  width: 100%;
  padding: 0;
  border-spacing: 0;
  border-collapse: collapse;

  thead {
    background: #f5f5f5;
    font-family: 'Helvetica Neue';
    font-weight: 500;
    font-size: 14px;
    color: #000000;
    padding: 16px;
    height: 50px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }

  tbody {
    tr {
      height: 81px;
      border-top: 1px solid #e0e0e0;
    }
  }
  td,
  th {
    text-align: left;
    padding: 0 16px;
  }
  .table-text {
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
    div {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .title {
      font-family: 'Helvetica Neue';
      font-weight: 500;
      font-size: 14px;
      color: #000000;
    }
    background-clip: padding-box;
    input[type='checkbox'] {
      width: 14px;
      height: 14px;
      border: 1px solid #e0e0e0;
      border-radius: 4px;
      background-color: #ffffff;
    }
  }
}
footer {
  background: #f5f5f5;
  padding: 16px;
  border-top: 1px solid #e0e0e0;
}
</style>
