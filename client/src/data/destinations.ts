/**
 * Chosen design philosophy: contemporary editorial collage — each destination
 * reads like a small field note, with one consistent data shape powering hero,
 * navigation, caption, and destination cards.
 */
export type Destination = {
  name: string;
  country: string;
  phonetic: string;
  title: string;
  description: string;
  aside: string;
  image: string;
  marker: string;
};

export const destinations: Destination[] = [
  {
    name: "Việt Nam",
    country: "Việt Nam",
    phonetic: "Duyên (duyên)",
    title: "Việt Nam — ngõ đèn lồng, sớm mai bên sông và những mái nhà mềm đi trong mưa",
    description: "Lần theo làn khói hương qua khu phố cũ, nơi mỗi bậc cửa đều giữ lại một chút thời tiết bên trong.",
    aside: "Một sợi duyên tìm đến",
    image: "/manus-storage/chimes-vietnam-editorial_a623ea27.png",
    marker: "VN",
  },
  {
    name: "Trung Quốc",
    country: "Trung Quốc",
    phonetic: "Duyên phận (một cuộc gặp đã định)",
    title: "Trung Quốc — sân vàng, huyền thoại con đường tơ lụa, mái ngói thách thức trọng lực",
    description: "Lang thang qua những khu vườn cấm, hiên mái sơn màu và những câu chuyện lâu đời hơn cả tấm bản đồ từng cố giữ chúng.",
    aside: "Một cuộc gặp đã định",
    image: "/manus-storage/chimes-hero-china_a199739c.png",
    marker: "CN",
  },
  {
    name: "Nhật Bản",
    country: "Nhật Bản",
    phonetic: "En (duyên kết nối)",
    title: "Nhật Bản — ngưỡng cửa tĩnh lặng, bóng tuyết tùng và tiếng chuông nhớ gió",
    description: "Đi vòng thật xa dưới những hiên đền, nơi im lặng gom nhặt từng chi tiết và mùa để lại dấu vết.",
    aside: "Một mối gặp ngang qua",
    image: "/manus-storage/chimes-japan-editorial-v2_73e835ad.png",
    marker: "JP",
  },
  {
    name: "Thái Lan",
    country: "Thái Lan",
    phonetic: "Sawasdee (lời chào)",
    title: "Thái Lan — mái ngói xếp lớp, bờ sông vàng nắng và những khoảng sân mở",
    description: "Một buổi chiều trôi chậm giữa hàng hiên, lớp sơn son và tiếng chuông rơi xuống mặt nước.",
    aside: "Một lời chào dưới mái cong",
    image: "/manus-storage/atlas-thailand_67c6d99f.png",
    marker: "TH",
  },
  {
    name: "Hàn Quốc",
    country: "Hàn Quốc",
    phonetic: "Jeong (tình gắn bó)",
    title: "Hàn Quốc — sân hanok, đường ngói thấp và nắng mỏng trên khung gỗ",
    description: "Lắng nghe một khu phố cổ tự sắp xếp lại nhịp thở quanh sân trong, cửa giấy và bóng núi.",
    aside: "Một tình thân ở lại",
    image: "/manus-storage/atlas-south-korea_e9e500e0.png",
    marker: "KR",
  },
  {
    name: "Campuchia",
    country: "Campuchia",
    phonetic: "Sok (bình an)",
    title: "Campuchia — đá sa thạch, rễ cây ôm tường và bình minh chạm vào Angkor",
    description: "Đi giữa những hành lang đổ bóng, nơi rừng và đền thờ cùng kể một câu chuyện bằng im lặng.",
    aside: "Một bình an phủ rêu",
    image: "/manus-storage/atlas-cambodia_4ec5d21d.png",
    marker: "KH",
  },
  {
    name: "Lào",
    country: "Lào",
    phonetic: "Sabaidee (an lành)",
    title: "Lào — mái chùa thấp, dòng Mekong chậm và những bức tường màu mật ong",
    description: "Một thành phố nhỏ mở ra bằng tiếng guốc, mùi gỗ cũ và ánh chiều vướng trên mái ngói.",
    aside: "Một nhịp an lành",
    image: "/manus-storage/atlas-laos_3fa0fff2.png",
    marker: "LA",
  },
  {
    name: "Indonesia",
    country: "Indonesia",
    phonetic: "Rasa (cảm vị)",
    title: "Indonesia — đá núi lửa, tháp tầng và sương sớm dâng từ ruộng bậc thang",
    description: "Đứng trước một ngọn tháp cổ, nơi đá đen giữ lại dấu tay của nước, lửa và những chuyến hành hương.",
    aside: "Một vị nhớ từ đất",
    image: "/manus-storage/atlas-indonesia_d5ce67a1.png",
    marker: "ID",
  },
  {
    name: "Malaysia",
    country: "Malaysia",
    phonetic: "Rasa sayang (thương mến)",
    title: "Malaysia — shophouse nhiều màu, hành lang có mái và gió mặn từ eo biển",
    description: "Một thành phố cảng ghép bằng nhiều tiếng nói, nơi cửa chớp, gạch hoa và bữa cơm gặp nhau.",
    aside: "Một thương mến đa thanh",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=85",
    marker: "MY",
  },
  {
    name: "Singapore",
    country: "Singapore",
    phonetic: "Kampong (ngôi làng)",
    title: "Singapore — mái ngói shophouse, bóng hiên năm chân và những lớp phố nhiệt đới",
    description: "Theo một dãy hành lang có mái, nơi ký ức thành thị nép dưới cửa chớp và ánh mưa xanh.",
    aside: "Một ngôi làng trong phố",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=85",
    marker: "SG",
  },
  {
    name: "Ấn Độ",
    country: "Ấn Độ",
    phonetic: "Jugaad (cách xoay xở)",
    title: "Ấn Độ — đá sa thạch ấm, vòm cửa chạm khắc và bụi vàng cuối ngày",
    description: "Một chuyến đi xuyên qua pháo đài, hang đá và những bậc thềm đã học cách giữ bóng râm.",
    aside: "Một cách xoay xở đẹp đẽ",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=85",
    marker: "IN",
  },
  {
    name: "Sri Lanka",
    country: "Sri Lanka",
    phonetic: "Ayubowan (chúc trường thọ)",
    title: "Sri Lanka — đá granite giữa rừng, mái chùa ấm sáng và con đường lên Lion Rock",
    description: "Từ một thành phố thiêng đến vách đá giữa rừng, mỗi bậc thang mở thêm một lớp của đảo quốc.",
    aside: "Một lời chúc dưới tán rừng",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=85",
    marker: "LK",
  },
  {
    name: "Nepal",
    country: "Nepal",
    phonetic: "Namaste (xin chào)",
    title: "Nepal — gạch nung, mắt Phật trên bảo tháp và mái đất đỏ dưới trời cao",
    description: "Đi qua những quảng trường gỗ và gạch, nơi đôi mắt trên bảo tháp nhìn thành phố chậm rãi đổi mùa.",
    aside: "Một lời chào nhìn thấu",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=85",
    marker: "NP",
  },
];
