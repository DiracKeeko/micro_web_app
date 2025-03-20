<template>
  <div id="cus-menu">
    <el-menu
      :default-active="$route.path"
      mode="horizontal"
      background-color="transparent"
      text-color="#FFFFFF"
      active-text-color="#FFFFFF"
    >
      <template v-for="item in menuArr">
        <!-- ↓ 仅一级菜单( 1.menuItem(内链跳转) 2.a标签(外链跳转) )  -->
        <el-menu-item
          v-if="classifyMenuItem(item) === 'layer1' && item.hidden === 0"
          :key="item.index + 'layer1'"
          :index="item.index"
        >
          <i v-if="item.menuIcon" :class="item.menuIcon"></i>
          <span v-if="item.menuType && item.menuType === 'outer'" class="menu-span">
            <a :href="item.index" target="_blank" class="menu-span__a">{{ item.title }}</a>
          </span>
          <span v-else class="menu-span">
            <router-link :to="item.index" class="menu-span__a">{{ item.title }}</router-link>
          </span>
        </el-menu-item>

        <!-- ↓ 二级菜单(渲染submenu submenu中有两种可能 1.subMenuItem(内链跳转) 2.a标签(外链跳转) ) -->
        <el-submenu
          v-else-if="classifyMenuItem(item) === 'layer2'"
          :key="item.index + 'layer2'"
          :index="item.index"
          popper-class="popup-menu"
        >
          <template slot="title">{{ item.title }}</template>
          <div v-for="(i, indexSub) in item.menuItem" :key="indexSub">
            <el-menu-item v-show="i.hidden === 0" :key="i.index" :index="i.index">
              <a
                v-if="i.menuType && i.menuType === 'outer'"
                :href="i.index"
                target="_blank"
                class="popup-menu-span__a"
                >{{ i.title }}</a
              >
              <span v-else>
                <router-link :to="i.index" class="popup-menu-span__a">{{ i.title }}</router-link>
              </span>
            </el-menu-item>
          </div>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'CusMenu',
  props: {
    menuArr: { type: Array, required: true }
  },
  methods: {
    classifyMenuItem(item) {
      // 如果没有 item.menuItem，说明是一级菜单
      // 如果一级菜单没有对应跳转链接，说明需要被隐藏
      if (!item.menuItem) {
        if (/^\d+$/.test(item.index)) {
          return 'hidden';
        }
        return 'layer1';
      }
      return 'layer2';
    }
  }
};
</script>

<style lang="scss" scoped>
.el-menu-item {
  padding: 0;
  background-color: transparent !important;
  .menu-span__a {
    display: block;
    height: 60px;
    padding: 0 20px;
    text-decoration: none;
  }
}
.el-sub-menu {
  background-color: transparent !important;
}
</style>
<style lang="scss">
.popup-menu .el-menu--popup {
  min-width: auto;
  padding: 0;
  .el-menu-item {
    height: 36px !important;
    padding: 0;
    line-height: 36px;
    .popup-menu-span__a {
      display: block;
      padding: 0 10px;
      text-decoration: none;
      color: var(--dark-color);
    }
    &:hover {
      .popup-menu-span__a {
        color: var(--primary-color);
      }
    }
    &:visited {
      .popup-menu-span__a {
        color: var(--dark-grey-color);
      }
    }
  }
}
</style>
