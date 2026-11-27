/* ============================================================
 * 爆款信号器 · 数据层（爬虫喂数据口）
 * ------------------------------------------------------------
 * 本文件是面板唯一的数据来源：爬虫每天从 7 个源
 * （Facebook 3 / TikTok 3 / Instagram 2 / Reddit 2 / X 2 /
 *  Amazon 2 / 阿里国际站 1，共 15 款）抓取后，覆盖本文件即可，
 * 面板（index.html）只负责渲染，不写死任何一款数据。
 * 字段：photo 照片 / price 价格 / priceNote 价格备注 /
 *       platform 平台 / salesData 销售数据 / time 时间 /
 *       sellingPoint 卖点 / verdict 爆款判断 / sourceUrl 查看原品链接
 * 当前内容：2026-11-28 正刊
 * ============================================================ */
window.SIGNAL_DATA = {
  date: "2026-11-28",
  edition: "正刊",
  products: [
{id:1, photo:"assets/image1.jpg", name:"真空封口机 Chef Preserve Vacuum Sealer", platform:"Facebook",
 price:"$59.00", priceNote:"原价 $154，黑五 62% OFF，官网实测",
 salesData:"投放时长 9 天（2026-11-19 至 2026-11-28），同一素材 5 条广告在投，官网评分 4.8 分（10,000+ 评价），官网称 1M+ 顾客",
 time:"数据时间段 2026-11-19 至 2026-11-28；采集日期 2026-11-28",
 sellingPoint:"一键抽真空封口，锁住食物新鲜、延长保鲜期。",
 verdict:"可以观望", verdictClass:"watch",
 sourceUrl:"https://chefpreserve.com/"},
{id:2, photo:"assets/image2.jpg", name:"每日组合：便携意式浓缩咖啡机 + 榨汁机 The Daily Duo: Espresso Maker + Blender（Sipwell）", platform:"Facebook",
 price:"$75.59", priceNote:"原价 $94.49，落地页实测黑五价",
 salesData:"投放时长 19 天（2026-11-09 至 2026-11-28），页面黑五倒计时剩余约 3 天，页面未显示评价数",
 time:"数据时间段 2026-11-09 至 2026-11-28；采集日期 2026-11-28",
 sellingPoint:"意式浓缩咖啡机加便携榨汁机二合一，居家通勤一机两用。",
 verdict:"可以观望", verdictClass:"watch",
 sourceUrl:"https://sipwell.net/products/the-daily-duo"},
{id:3, photo:"assets/image3.jpg", name:"儿童红外激光对战枪套装（含靶标射击投影仪） Children Laser Battle Gun Set with Target Shooting Projector（Munichsunny）", platform:"Facebook",
 price:"$99.99", priceNote:"原价 $199.98，5 折，落地页实测",
 salesData:"投放时长 15 天（2026-11-13 至 2026-11-28），同款另有 Lilingg、Kariney 多广告主在投，评分 4.9/5",
 time:"数据时间段 2026-11-13 至 2026-11-28；采集日期 2026-11-28",
 sellingPoint:"红外激光对战枪加投影靶标，支持多人对战，圣诞送礼佳品。",
 verdict:"可以观望", verdictClass:"watch",
 sourceUrl:"https://munichsunny.com/products/children-laser-battle-gun-set-with-target-shooting-projector"},
{id:4, photo:"assets/image4.jpg", name:"HydroJug Traveler", platform:"TikTok",
 price:"$25.49", priceNote:"TokConnect 榜单价，TikTok Shop，USD",
 salesData:"近7日营收 $118,990，环比 +876%，7 日卖出 约 4.7 千件，4174 位达人带货（TokConnect 估算，非平台官方）",
 time:"数据时间段 2026-11-19 至 2026-11-25；采集日期 2026-11-27",
 sellingPoint:"32/40oz 大容量保温旅行水杯，带手柄与翻盖吸管，防漏、可进杯架，冷饮保冷 24 小时。",
 verdict:"值得跟进", verdictClass:"go",
 sourceUrl:"https://tokconnect.com/trends/tiktok-shop/rising-products/"},
{id:5, photo:"assets/image5.jpg", name:"Shark Air Purifier with True HEPA", platform:"TikTok",
 price:"$199.99", priceNote:"TokConnect 榜单价，TikTok Shop，USD",
 salesData:"近7日营收 $125,990，环比 +629%，7 日卖出 约 630 件，79 位达人带货（TokConnect 估算，非平台官方）",
 time:"数据时间段 2026-11-19 至 2026-11-25；采集日期 2026-11-27",
 sellingPoint:"True HEPA 多层过滤空气净化器，带 Clean Sense IQ 实时空气质量显示，可捕捉 99.98% 细微颗粒物。",
 verdict:"值得跟进", verdictClass:"go",
 sourceUrl:"https://tokconnect.com/trends/tiktok-shop/rising-products/"},
{id:6, photo:"assets/image6.jpg", name:"Amp Kit Holiday Edition by Point of View Beauty", platform:"TikTok",
 price:"$35.00", priceNote:"TokConnect 榜单价，TikTok Shop，USD",
 salesData:"近7日营收 $81,240，环比 +575%，7 日卖出 约 2.3 千件，400 位达人带货（TokConnect 估算，非平台官方）",
 time:"数据时间段 2026-11-19 至 2026-11-25；采集日期 2026-11-27",
 sellingPoint:"节日限定美妆套装：滋养精华 + 釉面妆前乳 + 保湿绵密面霜三件套，配金属银色收纳包。",
 verdict:"值得跟进", verdictClass:"go",
 sourceUrl:"https://tokconnect.com/trends/tiktok-shop/rising-products/"},
{id:7, photo:"assets/image7.jpg", name:"Apple AirPods Pro 3 Wireless Earbuds with Active Noise Cancellation | Live Translation, Heart Rate Sensing, Hearing Aid Feature, Bluetooth Headphones, Spatial Audio, USB-C Charging", platform:"Amazon",
 price:"$149.00", priceNote:"apiguru Best Sellers 接口，USD",
 salesData:"Best Sellers 第 1 名，评分 4.4/5，18,427 条评价",
 time:"采集日期 2026-11-27",
 sellingPoint:"主动降噪真无线耳机，支持实时翻译、心率监测与助听功能，空间音频，USB-C 充电。",
 verdict:"可以观望", verdictClass:"watch",
 sourceUrl:"https://www.amazon.com/Apple-Cancellation-Translation-Headphones-High-Fidelity/dp/B0FQFB8FMG/ref=zg_bs_g_electronics_d_sccl_1/131-8178280-3618421?psc=1"},
{id:8, photo:"assets/image8.jpg", name:"Apple AirTag (2nd Generation): Tracker for Keychain, Wallet, and More; Locator with Sound; Simple One-Tap Setup with iPhone or iPad; Key Finder with up to 1.5X Precision Finding Range", platform:"Amazon",
 price:"$18.00", priceNote:"apiguru Best Sellers 接口，USD",
 salesData:"Best Sellers 第 3 名，评分 4.6/5，13,616 条评价",
 time:"采集日期 2026-11-27",
 sellingPoint:"第二代 AirTag，精确定位范围提升至 1.5 倍，带声音查找，iPhone 一触配对。",
 verdict:"可以观望", verdictClass:"watch",
 sourceUrl:"https://www.amazon.com/Apple-AirTag-2nd-Generation-Precision/dp/B0GJTFXNRX/ref=zg_bs_g_electronics_d_sccl_3/131-8178280-3618421?psc=1"},
{id:9, photo:"assets/image9.jpg", name:"迷你投影仪 HY300 Topleo Mini Projector HY300", platform:"阿里国际站",
 price:"$33.91/件（1–99 件，原价 $39.90，85 折；100–999 件 $31.99；≥1000 件 $30.99），起订量 1 件", priceNote:"",
 salesData:"已售 843 件，产品评分 5.0（12 评价），供应商店铺评分 4.3/5（4349 条），准时发货率 99.5%，响应时间 ≤2 小时，线上营收 $1M–$2M；供应商 Shenzhen Topleo Technology Limited，11 年",
 time:"数据时间段 2026-11-28；采集日期 2026-11-28",
 sellingPoint:"安卓 14、720P、350 ANSI 流明，短焦 0.8:1，可投 100 英寸大屏，3 年保修。",
 verdict:"值得跟进", verdictClass:"go",
 sourceUrl:"https://www.alibaba.com/product-detail/Topleo-Mini-Projector-Hy300-Pro-Projecteur_1601072905240.html"}
  ]
};
