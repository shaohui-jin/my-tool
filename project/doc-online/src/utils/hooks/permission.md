---
outline: deep
---

# permission 权限 <Badge type="tip" text="permission" />

## usePermission 权限hook

### 基础用法

<script lang="ts" setup>
import { ref } from 'vue';
import { usePermission } from 'sla-utils/permission';

const permissionList = ['add', 'edit', 'delete', 'view'];
const permission = ref(0);
const { hasPermission, getPermission, switchPermission } = usePermission(permissionList);

const handlePermission = (p) => {
  if (permission.value === 0) {
    permission.value = getPermission([p])
  } else {
    permission.value = switchPermission(permission.value, p)
  }
}
</script>

<div class="permission__container demo">
  获取/切换权限：
  <button
    v-for="(p, i) in permissionList"
    :key="i"
    :class="{ active: hasPermission(permission, p)}"
    @click="handlePermission(p)"
    >
    {{ p }}
  </button>
  <br>
  当前权限值：{{ permission }}
</div>

代码如下：

```vue
<script lang="ts" setup>
  import { ref } from 'vue';
  import { usePermission } from 'sla-utils/permission';
  
  const permissionList = ['add', 'edit', 'delete', 'view'];
  const permission = ref(0);
  const { hasPermission, getPermission, switchPermission } = usePermission(permissionList);
  
  const handlePermission = (p) => {
    if (permission.value === 0) {
      permission.value = getPermission([p])
    } else {
      permission.value = switchPermission(permission.value, p)
    }
  }
</script>

<div class="permission__container demo">
  获取/切换权限：
  <button
    v-for="(p, i) in permissionList"
    :key="i"
    :class="{ active: hasPermission(permission, p)}"
    @click="handlePermission(p)"
  >
    {{ p }}
  </button>
  <br>
  当前权限值：{{ permission }}
</div>
```

### 配置参数

```ts
declare const usePermission: <T extends readonly string[]>(permissions: T) => {
  getPermission: (p: Array<arrayToUnion<T>>) => number;
  hasPermission: (v: number, p: arrayToUnion<T>) => boolean;
  switchPermission: (v: number, p: arrayToUnion<T>) => number;
};
```

| 参数名 | 类型     | 默认值 | 描述         |
|-----|--------|-----|------------|
|  value   | T      |   | 响应式数据 |
|  delay   | number | 300  | 防抖延迟时间，单位毫秒，默认300ms |
