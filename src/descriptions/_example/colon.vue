<template>
  <t-space direction="vertical">
    <t-checkbox v-model="checked">展示引号</t-checkbox>
    <t-descriptions title="Shipping address" bordered :colon="checked">
      <t-descriptions-item label="Name">TDesign</t-descriptions-item>
      <t-descriptions-item label="Telephone Number">139****0609</t-descriptions-item>
      <t-descriptions-item label="Area">China Tencent Headquarters</t-descriptions-item>
      <t-descriptions-item label="Address">Shenzhen Penguin Island D1 4A Mail Center</t-descriptions-item>
    </t-descriptions>
  </t-space>
  <t-row justify="center"> </t-row>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(true);
</script>
