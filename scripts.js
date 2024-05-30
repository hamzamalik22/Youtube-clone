let menu_btn = document.querySelector("#menu");
let nav2 = document.querySelector("#nav2");
let arrow_down = document.querySelector("#arrow_down");
let down_arrow_menu = document.querySelector("#down_arrow_menu");

menu_btn.addEventListener("click", () => {
  nav2.classList.toggle("translate-x-0");
  nav2.classList.toggle("-translate-x-full");
});

arrow_down.addEventListener("click", () => {
  down_arrow_menu.classList.toggle("hidden");
});

let videoData = [
  {
    thumbnail:
      "https://i.ytimg.com/vi/vOoTZnYFz_s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBU_FUYkNVcnQNRkzh3vOK_14IBFQ",
    icon: "https://yt3.ggpht.com/VgN1xtSYcLs3MJurBTJ3iTAe91e-k_KDEr_pQuFzritpBmbHOdv_Ul0KrKRZb79B1Pup6WNxdQ=s68-c-k-c0x00ffffff-no-rj",
    title: "Online Earning | How it can help you grow?",
    channel: "Irfan Malik",
    views: "272 views",
    time: "36 minutes ago",
  },
  {
    thumbnail:
      "https://i.ytimg.com/vi/2_Qb_OZxwGU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIYsmQA3RXyZ4B_vwgYdot2bhdGQ",
    icon: "https://yt3.ggpht.com/ytc/AIdro_kHhN-kHUxPcg6jKO3Zu--Lw6sxBWRJ_Z3hv_dHvDxytyU=s68-c-k-c0x00ffffff-no-rj",
    title:
      "Finally wo janwar ley hi lia jis per dil aya tha 😍🐂 lekin kitne ka soda hua ?",
    channel: "Mustafa Hanif",
    views: "67k views",
    time: "1 hour ago",
  },

  {
    thumbnail:
      "https://i.ytimg.com/vi/ydmMLOcoxyw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAvTlHSNdF-wJws93bQ9X3EEQ3WBg",
    icon: "https://yt3.ggpht.com/anbnvLuHOSGOlK_pHcNksiTwEfDwJTd727nCXmx9BNDLobLFBAzJLOv-aDi5KEhTLAprxMdPQA=s68-c-k-c0x00ffffff-no-rj",
    title: "Insan Ki Takhleeq Ka Maqsad | Why ALLAH Created You? | Dr. Israr Ahmed Life Changing Bayan",
    channel: "Dr. Israr Ahmad",
    views: "1M views",
    time: "13 hours ago",
  },

  {
    thumbnail:
      "https://i.ytimg.com/vi/gZRS143PFqI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAOpblUeVqe060C5dmfgqqD57Hjzg",
    icon: "https://yt3.ggpht.com/8Yat-ht6uSglpKe5BonuiW3ZeaoU89MP0652EWzITq0lMWYD99Ak1pZXdZlqrSjUVm5WRjErnA=s68-c-k-c0x00ffffff-no-rj",
    title: "Protect The Item from the Challenges, Keep it!",
    channel: "Stay Wild",
    views: "272 views",
    time: "36 minutes ago",
  },

  {
    thumbnail:
      "https://i.ytimg.com/vi/VlPiVmYuoqw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB896i1qlQgSZkU77Na-XjBXaMbcA",
    icon: "https://yt3.ggpht.com/00yIYVKjmFvR7sFZXmP5aMq1u0P7ZcLfnDW27A7zRD1hTqcWLwYn0-o_5rGkK2eKfCf43ueE7Q=s88-c-k-c0x00ffffff-no-rj",
    title: "JavaScript Tutorial (2024) for Beginners to Pro (with Notes, Projects & Practice Questions)",
    channel: "Apna College",
    views: "2.1M views",
    time: "5 months ago",
  },

  {
    thumbnail:
      "https://i.ytimg.com/vi/gZRS143PFqI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAOpblUeVqe060C5dmfgqqD57Hjzg",
    icon: "https://yt3.ggpht.com/8Yat-ht6uSglpKe5BonuiW3ZeaoU89MP0652EWzITq0lMWYD99Ak1pZXdZlqrSjUVm5WRjErnA=s68-c-k-c0x00ffffff-no-rj",
    title: "Protect The Item from the Challenges, Keep it!",
    channel: "Stay Wild",
    views: "272 views",
    time: "36 minutes ago",
  },

  {
    thumbnail:
      "https://i.ytimg.com/vi/ydmMLOcoxyw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAvTlHSNdF-wJws93bQ9X3EEQ3WBg",
    icon: "https://yt3.ggpht.com/anbnvLuHOSGOlK_pHcNksiTwEfDwJTd727nCXmx9BNDLobLFBAzJLOv-aDi5KEhTLAprxMdPQA=s68-c-k-c0x00ffffff-no-rj",
    title: "Insan Ki Takhleeq Ka Maqsad | Why ALLAH Created You? | Dr. Israr Ahmed Life Changing Bayan",
    channel: "Dr. Israr Ahmad",
    views: "1M views",
    time: "13 hours ago",
  },

  {
    thumbnail:
      "https://i.ytimg.com/vi/vOoTZnYFz_s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBU_FUYkNVcnQNRkzh3vOK_14IBFQ",
    icon: "https://yt3.ggpht.com/VgN1xtSYcLs3MJurBTJ3iTAe91e-k_KDEr_pQuFzritpBmbHOdv_Ul0KrKRZb79B1Pup6WNxdQ=s68-c-k-c0x00ffffff-no-rj",
    title: "Online Earning | How it can help you grow?",
    channel: "Irfan Malik",
    views: "272 views",
    time: "36 minutes ago",
  },

];

let videos = document.querySelector("#videos");

videoData.forEach((video) => {
  let videoCard = document.createElement("div");
  videoCard.className = "video flex flex-col items-center py-4";

  videoCard.innerHTML += `
  <div class="thumbnail w-80 h-44 rounded-lg">
      <img class="rounded-lg w-full h-full object-cover" src="${video.thumbnail}" alt="">
  </div>
  <div class="title_pane mt-4 flex w-80 px-3 items-center">
      <div class="icon rounded-full">
          <img class="rounded-full w-12 h-12" src="${video.icon}" alt="">
      </div>
      <div class="title">
          <p class="text-sm px-2 break-words">${video.title.slice(0, 50)}</p>
      </div>
  </div>
  <div class="details_pane flex flex-col mt-1 mb-2 w-80 px-3">
      <div class="channel_name flex justify-between relative left-12 w-full">
          <p class="text-xs">${video.channel}</p>
      </div>
      <div class="views flex justify-between w-full relative left-12">
          <p class="text-xs">${video.views} • ${video.time}</p>
      </div>
  </div>
`;

  videos.appendChild(videoCard);
});
