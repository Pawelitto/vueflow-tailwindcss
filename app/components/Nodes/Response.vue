<script setup lang="ts">
import { useNode, Handle, Position } from "@vue-flow/core"

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  data: {
    type: Object,
    required: true
  }
})

const data = useNode(props.id)
</script>

<template>
  <Handle :id="`tg-${props.id}`" type="target" :position="Position.Left" />
  <Handle :id="`sc-${props.id}`" type="source" :position="Position.Right" />
  <UCard
    :ui="{
      body: 'w-[350px] font-light transition-all'
    }"
  >
    <template #header>
      <div class="flex items-center justify-start text-primary-500 font-medium">
        <icon class="h-10 w-10 mr-2" name="i-ri-messenger-line" />
        <div class="flex flex-col -space-y-2 w-[252px]">
          <span class="text-2xs">Facebook</span>
          <span class="text-xl truncate">{{ data.node.data.label }}</span>
        </div>
      </div>
    </template>

    <UCard>
      <div
        v-if="data.node.data.buttons?.length > 0"
        class="flex flex-col space-y-2"
      >
        <UButton
          v-for="btn in data.node.data.buttons"
          :key="btn.id"
          :label="btn.title"
          :ui="{
            base: 'justify-between'
          }"
          truncate
          trailing
          block
          variant="soft"
          icon="i-heroicons-arrow-right"
        >
          <template #trailing>
            <div class="relative">
              <Handle
                :id="`btn-${btn.id}`"
                type="source"
                :position="Position.Right"
              />
            </div>
          </template>
        </UButton>
      </div>
    </UCard>
  </UCard>
</template>
