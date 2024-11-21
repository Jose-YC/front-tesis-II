export const itemMenu = [
    { 
        name: "Dashboard", 
        to: "/", 
        icon: "fa-solid fa-gauge",
        type: "singleLink"
    },


    // {
    //   name: "URL",
    //   icon: "fa-solid fa-link",
    //   children: [
    //     { name: "Short", to: "/url/create", type: "subItem"},
    //     { name: "List", to: "/url", type: "subItem" },
    //   ]
    // },

    {
        name: "User",
        icon: "fa-regular fa-address-book",
        children: [
          { name: "Create", to: "/user/create", type: "subItem"},
          { name: "List", to: "/user", type: "subItem" },
        ]
    },

      {
        name: "Rol",
        icon: "fa-solid fa-user-group",
        children: [
          { name: "Create", to: "/rol/create" , type: "subItem"},
          { name: "List", to: "/rol", type: "subItem" },
        ]
      },

];
