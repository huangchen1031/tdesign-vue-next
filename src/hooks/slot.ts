import { Slots, VNode, Component, getCurrentInstance, Fragment } from 'vue';

/**
 * 渲染default slot，获取子组件VNode。处理多种子组件创建场景
 * 使用场景：<t-steps> <t-steps-item /> </t-steps>, <t-steps> <t-steps-item v-for="(item, index)" :key="index" /> </t-steps>
 * @returns {function(childComponentName: string, slots: Slots): VNode[]}
 * @param childComponentName
 * @param slots
 * @example const getChildByName = useChildComponentSlots()
 * @example getChildComponentByName('TStepItem')
 */
export function useChildComponentSlots() {
  const instance = getCurrentInstance();
  return (childComponentName: string, slots?: Slots): VNode[] => {
    if (!slots) {
      slots = instance.slots;
    }
    const content = slots?.default?.() || [];

    return content
      .map((item: VNode) => {
        if (item.children && Array.isArray(item.children)) return item.children;
        return item;
      })
      .flat()
      .filter((item: VNode) => (item.type as Component).name?.endsWith(childComponentName)) as VNode[];
  };
}

/**
 * 渲染default slot，获取slot child
 * @param childComponentName
 * @param slots
 * @example const getChildSlots = useChildSlots()
 * @example getChildSlots()
 */
export function useChildSlots() {
  const instance = getCurrentInstance();
  return () => {
    const { slots } = instance;
    const content = slots?.default?.() || [];

    return content
      .map((item) => {
        if (item.children && Array.isArray(item.children) && item.type === Fragment) return item.children;
        return item;
      })
      .flat();
  };
}
