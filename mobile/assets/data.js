/* ============================================================
   数据层 · 爆款信号器
   ------------------------------------------------------------
   本文件是面板唯一的数据来源：社媒爆款数据爬虫每天抓取
   7 个源共 15 款（Facebook 3、TikTok 3、Instagram 2、
   Reddit 2、X 2、Amazon 2、阿里国际站 1），把结果写入
   下面的 PRODUCTS 数组，面板（index.html）只负责渲染，
   不含任何写死的产品内容。正式版由爬虫直接覆盖本文件。
   
   每款字段：
     n         序号
     platform  平台（来源）
     name      产品名
     price     价格（页面未显示就写「页面未显示」，不估算）
     priceNote 价格备注（原价 / 阶梯价 / 币种等）
     sales     销售数据（含上榜 / 投放信号）
     time      时间（数据时间段 + 采集日期）
     point     卖点（中文）
     verdict   爆款判断（值得跟进 / 可以观望 / 先别碰）
     vcls      判断样式（follow / watch / avoid）
     url       查看原品链接
     img       产品照片（assets/ 下的图片文件）
   当前内容：2026-11-28 正刊
   ============================================================ */

var DATA_DATE = "2026-11-28";
var EDITION = "正刊";
// 面板顶栏日期、统计、下载链接都从上面两个变量读，不写死在 index.html。

var PRODUCTS = [
  { n:1, platform:"Facebook", name:"真空封口机 Chef Preserve Vacuum Sealer",
    price:"$59.00", priceNote:"原价 $154，黑五 62% OFF，官网实测",
    sales:"投放时长 9 天（2026-11-19 至 2026-11-28），同一素材 5 条广告在投，官网评分 4.8 分（10,000+ 评价），官网称 1M+ 顾客",
    time:"数据时间段 2026-11-19 至 2026-11-28；采集日期 2026-11-28",
    point:"一键抽真空封口，锁住食物新鲜、延长保鲜期。",
    verdict:"可以观望", vcls:"watch",
    url:"https://chefpreserve.com/", img:"assets/image1.jpg" },
  { n:2, platform:"Facebook", name:"每日组合：便携意式浓缩咖啡机 + 榨汁机 The Daily Duo: Espresso Maker + Blender（Sipwell）",
    price:"$75.59", priceNote:"原价 $94.49，落地页实测黑五价",
    sales:"投放时长 19 天（2026-11-09 至 2026-11-28），页面黑五倒计时剩余约 3 天，页面未显示评价数",
    time:"数据时间段 2026-11-09 至 2026-11-28；采集日期 2026-11-28",
    point:"意式浓缩咖啡机加便携榨汁机二合一，居家通勤一机两用。",
    verdict:"可以观望", vcls:"watch",
    url:"https://sipwell.net/products/the-daily-duo", img:"assets/image2.jpg" },
  { n:3, platform:"Facebook", name:"儿童红外激光对战枪套装（含靶标射击投影仪） Children Laser Battle Gun Set with Target Shooting Projector（Munichsunny）",
    price:"$99.99", priceNote:"原价 $199.98，5 折，落地页实测",
    sales:"投放时长 15 天（2026-11-13 至 2026-11-28），同款另有 Lilingg、Kariney 多广告主在投，评分 4.9/5",
    time:"数据时间段 2026-11-13 至 2026-11-28；采集日期 2026-11-28",
    point:"红外激光对战枪加投影靶标，支持多人对战，圣诞送礼佳品。",
    verdict:"可以观望", vcls:"watch",
    url:"https://munichsunny.com/products/children-laser-battle-gun-set-with-target-shooting-projector", img:"assets/image3.jpg" },
  { n:4, platform:"TikTok", name:"HydroJug Traveler",
    price:"$25.49", priceNote:"TokConnect 榜单价，TikTok Shop，USD",
    sales:"近7日营收 $118,990，环比 +876%，7 日卖出 约 4.7 千件，4174 位达人带货（TokConnect 估算，非平台官方）",
    time:"数据时间段 2026-11-19 至 2026-11-25；采集日期 2026-11-27",
    point:"32/40oz 大容量保温旅行水杯，带手柄与翻盖吸管，防漏、可进杯架，冷饮保冷 24 小时。",
    verdict:"值得跟进", vcls:"follow",
    url:"https://tokconnect.com/trends/tiktok-shop/rising-products/", img:"assets/image4.jpg" },
  { n:5, platform:"TikTok", name:"Shark Air Purifier with True HEPA",
    price:"$199.99", priceNote:"TokConnect 榜单价，TikTok Shop，USD",
    sales:"近7日营收 $125,990，环比 +629%，7 日卖出 约 630 件，79 位达人带货（TokConnect 估算，非平台官方）",
    time:"数据时间段 2026-11-19 至 2026-11-25；采集日期 2026-11-27",
    point:"True HEPA 多层过滤空气净化器，带 Clean Sense IQ 实时空气质量显示，可捕捉 99.98% 细微颗粒物。",
    verdict:"值得跟进", vcls:"follow",
    url:"https://tokconnect.com/trends/tiktok-shop/rising-products/", img:"assets/image5.jpg" },
  { n:6, platform:"TikTok", name:"Amp Kit Holiday Edition by Point of View Beauty",
    price:"$35.00", priceNote:"TokConnect 榜单价，TikTok Shop，USD",
    sales:"近7日营收 $81,240，环比 +575%，7 日卖出 约 2.3 千件，400 位达人带货（TokConnect 估算，非平台官方）",
    time:"数据时间段 2026-11-19 至 2026-11-25；采集日期 2026-11-27",
    point:"节日限定美妆套装：滋养精华 + 釉面妆前乳 + 保湿绵密面霜三件套，配金属银色收纳包。",
    verdict:"值得跟进", vcls:"follow",
    url:"https://tokconnect.com/trends/tiktok-shop/rising-products/", img:"assets/image6.jpg" },
  { n:7, platform:"Amazon", name:"Apple AirPods Pro 3 Wireless Earbuds with Active Noise Cancellation | Live Translation, Heart Rate Sensing, Hearing Aid Feature, Bluetooth Headphones, Spatial Audio, USB-C Charging",
    price:"$149.00", priceNote:"apiguru Best Sellers 接口，USD",
    sales:"Best Sellers 第 1 名，评分 4.4/5，18,427 条评价",
    time:"采集日期 2026-11-27",
    point:"主动降噪真无线耳机，支持实时翻译、心率监测与助听功能，空间音频，USB-C 充电。",
    verdict:"可以观望", vcls:"watch",
    url:"https://www.amazon.com/Apple-Cancellation-Translation-Headphones-High-Fidelity/dp/B0FQFB8FMG/ref=zg_bs_g_electronics_d_sccl_1/131-8178280-3618421?psc=1", img:"assets/image7.jpg" },
  { n:8, platform:"Amazon", name:"Apple AirTag (2nd Generation): Tracker for Keychain, Wallet, and More; Locator with Sound; Simple One-Tap Setup with iPhone or iPad; Key Finder with up to 1.5X Precision Finding Range",
    price:"$18.00", priceNote:"apiguru Best Sellers 接口，USD",
    sales:"Best Sellers 第 3 名，评分 4.6/5，13,616 条评价",
    time:"采集日期 2026-11-27",
    point:"第二代 AirTag，精确定位范围提升至 1.5 倍，带声音查找，iPhone 一触配对。",
    verdict:"可以观望", vcls:"watch",
    url:"https://www.amazon.com/Apple-AirTag-2nd-Generation-Precision/dp/B0GJTFXNRX/ref=zg_bs_g_electronics_d_sccl_3/131-8178280-3618421?psc=1", img:"assets/image8.jpg" },
  { n:9, platform:"阿里国际站", name:"迷你投影仪 HY300 Topleo Mini Projector HY300",
    price:"$33.91/件（1–99 件，原价 $39.90，85 折；100–999 件 $31.99；≥1000 件 $30.99），起订量 1 件", priceNote:"",
    sales:"已售 843 件，产品评分 5.0（12 评价），供应商店铺评分 4.3/5（4349 条），准时发货率 99.5%，响应时间 ≤2 小时，线上营收 $1M–$2M；供应商 Shenzhen Topleo Technology Limited，11 年",
    time:"数据时间段 2026-11-28；采集日期 2026-11-28",
    point:"安卓 14、720P、350 ANSI 流明，短焦 0.8:1，可投 100 英寸大屏，3 年保修。",
    verdict:"值得跟进", vcls:"follow",
    url:"https://www.alibaba.com/product-detail/Topleo-Mini-Projector-Hy300-Pro-Projecteur_1601072905240.html", img:"assets/image9.jpg" }
];
