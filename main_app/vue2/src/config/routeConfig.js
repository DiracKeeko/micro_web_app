import router from "@/router";
import store from "@/store";


const menuConfigArr = [
  {
    "index": "/home",
    "title": "首页",
    "hidden": 0,
    "menuType": "inner",
    "menuId": 1,
    "componentPath": "home/Home.vue"
  },
  {
    "index": "2",
    "title": "测试案例",
    "hidden": 0,
    "menuType": "inner",
    "menuId": 20,
    "menuItem": [
      {
        "index": "/jsonFormat",
        "title": "JsonFormat",
        "hidden": 0,
        "menuType": "inner",
        "menuId": 21,
        "componentPath": "testCase/TestJsonFormat.vue"
      },
      {
        "index": "/eslintCase",
        "title": "eslintCase",
        "hidden": 0,
        "menuType": "inner",
        "menuId": 22,
        "componentPath": "testCase/EslintCase.vue"
      },
      {
        "index": "/elPopoverEvent",
        "title": "elPopoverEvent",
        "hidden": 0,
        "menuType": "inner",
        "menuId": 23,
        "componentPath": "testCase/ElPopoverCase.vue"
      }
    ]
  },
  {
    "index": "3",
    "title": "子应用",
    "hidden": 0,
    "menuType": "inner",
    "menuId": 6,
    "menuItem": [
      {
        "index": "/mv2/home",
        "title": "microVue2Home",
        "hidden": 0,
        "menuType": "inner",
        "menuId": 60,
        "componentPath": "microApp/MicroApp.vue"
      },
      {
        "index": "/mv2/about",
        "title": "microVue2About",
        "hidden": 0,
        "menuType": "inner",
        "menuId": 61,
        "componentPath": "microApp/MicroApp.vue"
      },
      {
        "index": "/mr18/home",
        "title": "microReactHome",
        "hidden": 0,
        "menuType": "inner",
        "menuId": 62,
        "componentPath": "microApp/MicroApp.vue"
      },
      {
        "index": "/mr18/about",
        "title": "microReactAbout",
        "hidden": 0,
        "menuType": "inner",
        "menuId": 63,
        "componentPath": "microApp/MicroApp.vue"
      },
      {
        "index": "/mr18/hashAnchor",
        "title": "microReactHashAnchor",
        "hidden": 0,
        "menuType": "inner",
        "menuId": 63,
        "componentPath": "microApp/MicroApp.vue"
      }
    ]
  }
];


function createRouteItem(menuItem) {
  const { index, componentPath } = menuItem;
  const routeItem = {
    path: index,
    name: index.slice(1),
    component: () => import(`@/views/${componentPath}`)
  };
  return routeItem;
}

function recursionPushRouteItem(menuArr, routeArr) {
  menuArr.forEach((item) => {
    const isInner = !(item.menuType && item.menuType === "outer");
    if (isInner) {
      const isRealMenu = item.index && !/^\d$/.test(item.index);
      const isComponentPathExist = item.componentPath && item.componentPath.trim() !== "";
      if (isRealMenu && isComponentPathExist) {
        routeArr.push(createRouteItem(item));
      }
      const isChildMenuExist = item.menuItem && item.menuItem.length > 0;
      if (isChildMenuExist) {
        recursionPushRouteItem(item.menuItem, routeArr);
      }
    }
  });
}

function createRouteArrByMenuArr(menuArr) {
  const routeArr = [];
  recursionPushRouteItem(menuArr, routeArr);
  // routeArr.push({
  //   path: '/:micro(mv2|mr18)/:endPath(.*)', // /micro-vue/ 或者 /mr18/ 调用MicroApp组件
  //   name: 'microApp',
  //   meta: { title: 'micro-app' },
  //   component: () => import('@/views/microApp/MicroApp.vue')
  // })
  routeArr.push({ path: "*", redirect: "/home" });
  return routeArr;
}

let menuArr = [];
router.beforeEach((to, from, next) => {
  if (to.path === "/login" || to.path === "/401") {
    // 未登录,放行  ->  login
    menuArr = [];
    next();
  } else if (menuArr.length > 0) {
    next();
  } else {
    menuArr = menuConfigArr;
    store.commit("setMenuArr", menuArr);
    const routeArr = createRouteArrByMenuArr(menuArr);
    router.addRoutes(routeArr);
    next({ ...to, replace: true });
  }
});
