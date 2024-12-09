export const itemMenu = [
    { 
        name: "Dashboard", 
        to: "/dashboard", 
        icon: "fa-solid fa-gauge",
        type: "singleLink"
    },

    { 
      name: "IA", 
      to: "https://app-ventas.streamlit.app/", 
      icon: "fas fa-brain",
      type: "singleLink"
    },

    { 
      name: "Catálogo", 
      to: "/product/catalogo", 
      icon: "fas fa-book",
      type: "singleLink"
    },

    {
      name: "Reportes",
      icon: "fas fa-chart-line",
      children: [
        { name: "Estratégico", to: "/report/estrategico", type: "subItem"},
        { name: "Operativo", to: "/report/operativo", type: "subItem" },
        { name: "Tactico", to: "/report/tactico", type: "subItem" },
      ]
    },
    

    {
      name: "User",
      icon: "fas fa-user",
      children: [
        { name: "Create", to: "/user/create", type: "subItem"},
        { name: "List", to: "/user", type: "subItem" },
      ]
    },

    {
      name: "Rol",
      icon: "fas fa-user-shield",
      children: [
        { name: "Create", to: "/rol/create" , type: "subItem"},
        { name: "List", to: "/rol", type: "subItem" },
      ]
    },

    {
      name: "Producto",
      icon: "fas fa-box",
      children: [
        { name: "Create", to: "/product/create" , type: "subItem"},
        { name: "List", to: "/product", type: "subItem" },
      ]
    },

    {
      name: "Categoría",
      icon: "fas fa-tags",
      children: [
        { name: "Create", to: "/category/create" , type: "subItem"},
        { name: "List", to: "/category", type: "subItem" },
      ]
    },

    {
      name: "Medidas",
      icon: "fas fa-ruler",
      children: [
        { name: "Create", to: "/measure/create" , type: "subItem"},
        { name: "List", to: "/measure", type: "subItem" },
      ]
    },

    {
      name: "Venta",
      icon: "fas fa-shopping-cart",
      children: [
        { name: "Create", to: "/sale/create", type: "subItem"},
        { name: "List", to: "/sale", type: "subItem" },
      ]
    },

    {
      name: "Abastecimiento",
      icon: "fas fa-file-alt",
      children: [
        { name: "Create", to: "/orden/create", type: "subItem"},
        { name: "List", to: "/orden", type: "subItem" },
      ]
    },

    {
      name: "Proveedor",
      icon: "fas fa-truck",
      children: [
        { name: "Create", to: "/supplier/create", type: "subItem"},
        { name: "List", to: "/supplier", type: "subItem" },
      ]
    },

    {
      name: "Cliente",
      icon: "fas fa-users",
      children: [
        { name: "Create", to: "/client/create", type: "subItem"},
        { name: "List", to: "/client", type: "subItem" },
      ]
    },

];
