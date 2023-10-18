export default [
  {
    _tag: "CSidebarNavItem",
    name: "MyDashboard",
    to: "/dashboard",
    icon: "cil-speedometer",
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Admin"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Admin List",
    to: "/admin/admin.js",
    icon: "cil-pencil",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Module"],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Templates",
    route: "/base",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Templates",
        to: "/start-selling",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Developer-hub",
    route: "/buttons",
    icon: "cil-cursor",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Developer hub list",
        to: "/developer-hub",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Services",
    route: "/notifications",
    icon: "cil-bell",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Services",
        to: "/get-service",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Work",
    route: "/notifications",
    icon: "cil-bell",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Work",
        to: "/work",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Developers",
    route: "/notifications",
    icon: "cil-bell",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Developers List",
        to: "/developer",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Post Work",
    route: "/notifications",
    icon: "cil-bell",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Post Work List",
        to: "/post-work",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Tutorial",
    route: "/notifications",
    icon: "cil-bell",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Tutorial List",
        to: "/tutorial",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Account",
    route: "/notifications",
    icon: "cil-bell",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Add Item",
        to: "/notifications/alerts",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Account List",
        to: "/notifications/badges",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Cart",
    route: "/notifications",
    icon: "cil-bell",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Cart List",
        to: "/cart",
      },
    ],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Seller",
    to: "/seller",
    icon: "cil-calculator",
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    _tag: "CSidebarNavDivider",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Extras"],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Pages",
    route: "/pages",
    icon: "cil-star",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Login",
        to: "/login",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Register",
        to: "/register",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Error 404",
        to: "/404",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Error 500",
        to: "/500",
      },
    ],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Disabled",
    icon: "cil-ban",
    badge: {
      color: "secondary",
      text: "NEW",
    },
    addLinkClass: "c-disabled",
    disabled: true,
  },
  {
    _tag: "CSidebarNavDivider",
    className: "m-2",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Labels"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Label danger",
    to: "",
    icon: {
      name: "cil-star",
      className: "text-danger",
    },
    label: true,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Label info",
    to: "",
    icon: {
      name: "cil-star",
      className: "text-info",
    },
    label: true,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Label warning",
    to: "",
    icon: {
      name: "cil-star",
      className: "text-warning",
    },
    label: true,
  },
  {
    _tag: "CSidebarNavDivider",
    className: "m-2",
  },
];
