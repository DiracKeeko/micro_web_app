<template>
  <header class="header">
    <div class="header-main header-bgc">
      <span class="header-main-left">
        <CusMenu :menu-arr="menuArr"></CusMenu>
      </span>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";
import CusMenu from "./CusMenu";

export default {
  name: "CusHeader",
  components: {
    CusMenu,
  },
  data() {
    return {
      isInBanner: true,
      logoShow: true,
    };
  },
  computed: {
    ...mapState(["menuArr"]),
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2001;
  width: 100%;
  min-width: 1200px;
  height: 60px;

  .header-main {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    background-color: transparent;
    box-shadow: var(--bg-shadows);

    .header-main-left {
      display: flex;
      justify-content: flex-start;
      width: 60vw;
      .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 180px;
        .logo-item {
          width: 110px;
          height: 28px;
        }
      }
      .mini-logo {
        width: 80px;
        min-width: 80px;
        .mini-logo-item {
          width: 45px;
          height: 45px;
          margin: 0 0 0 5px;
        }
      }
    }
  }

  .header-bgc {
    background-color: #0448ab;
  }
}
</style>

<style lang="scss">
.el-menu--horizontal {
  display: flex;
  flex-wrap: nowrap;
  border: 0px !important;
  .el-menu-item:hover {
    background-color: transparent !important;
  }
  .el-submenu:hover .el-submenu__title {
    background-color: transparent !important;
  }
}

.el-menu--horizontal .el-menu .el-menu-item {
  width: 160px;
  height: 44px;
  padding-left: 20px;
  color: #333 !important;
  background-color: #fff !important;
}
.setting-popover {
  padding: 12px 27px;
  font-size: 14px;
  border-color: hsla(220, 100%, 65%, 1) !important;
  .item-user-infomation {
    padding: 0 5px;
    .username {
      font: 16px/42px "PingFangSC-Regular";
      color: #000;
    }
    .department {
      font: 12px/24px "PingFangSC-Regular";
      color: #333;
    }
    .account {
      font: 12px/24px "PingFangSC-Regular";
      color: #333;
    }
  }
  .item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font: 14px/30px "PingFangSC-Regular";
    color: #333;
    .personalCenterIconItem {
      width: 14px;
      height: 14px;
      margin: 0 10px 0 5px;
      filter: grayscale(100%);
    }
    &:hover {
      color: var(--primary-color);
      cursor: pointer;
      .personalCenterIconItem {
        filter: none;
      }
    }
  }
}
.document-popover {
  &.el-popover {
    min-width: auto;
    padding: 0;
    border-color: "";
    border-color: hsla(220, 100%, 65%, 1);
  }
  color: var(--text-normal);
  &__icon {
    margin-right: 6px;
    font-size: 14px;
    color: hsla(215, 59%, 83%, 1);
  }
  &__content {
    padding: 8px 16px 8px;
    &-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px 0;
      font-size: 14px;
      line-height: 16px;
      &:hover {
        color: var(--primary-color);
        cursor: pointer;
        .item__label {
          opacity: 0.8;
        }
        .document-popover__icon {
          color: var(--primary-color);
        }
      }
      a {
        display: -webkit-box;
        max-width: 140px;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
