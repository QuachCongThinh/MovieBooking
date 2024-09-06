const menuItems = [
  {
    title: "Phim",
    link: "/phim",
  },
  {
    title: "Sự kiện",
    link: "#",
    subMenu: [
      { title: "Ưu đãi", link: "/su-kien/uu-dai" },
      { title: "Phim hay tháng", link: "/su-kien/phim-hay-thang" },
    ],
  },
  {
    title: "Rạp/Giá vé",
    link: "#",
    subMenu: [
      { title: "Galaxy Nguyễn Du", link: "/rap/gia-ve/nguyen-du" },
      { title: "Galaxy Sala", link: "/rap/gia-ve/sala" },
      { title: "Galaxy Tân Bình", link: "/rap/gia-ve/tan-binh" },
      {
        title: "Galaxy Kinh Dương Vương",
        link: "/rap/gia-ve/kinh-duong-vuong",
      },
      { title: "Galaxy Quang Trung", link: "/rap/gia-ve/quang-trung" },
      { title: "Galaxy Huỳnh Tấn Phát", link: "/rap/gia-ve/huyh-tan-phat" },
      {
        title: "Galaxy Co.opXtra Linh Trung",
        link: "/rap/gia-ve/co-opxtra-linh-trung",
      },
      { title: "Galaxy Trường Chinh", link: "/rap/gia-ve/truong-chinh" },
      { title: "Galaxy Parc Mall Q8", link: "/rap/gia-ve/parc-mall-q8" },
    ],
  },
];

export default menuItems;
