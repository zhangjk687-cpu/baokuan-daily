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
   当前内容：2026-11-27 正刊
   ============================================================ */

var DATA_DATE = "2026-11-27";
var EDITION = "正刊";
// 面板顶栏日期、统计、下载链接都从上面两个变量读，不写死在 index.html。

var PRODUCTS = [
  { n:1, platform:"Facebook", name:"Kitty Kurlz 猫咪互动玩具 Kitty Kurlz™",
    price:"$29.99", priceNote:"原价 $59.99，落地页实测，USD",
    sales:"评分 4.7/5，2,859 条评价，已售 7,500+ 件（落地页实测）",
    time:"采集日期 2026-11-27",
    point:"可折叠的猫抓板造型互动玩具，内置铃铛球，满足猫咪抓挠天性并提供身心运动。",
    verdict:"可以观望", vcls:"watch",
    url:"https://marlenespetshop.com/products/kitty-kurlz-the-interactive-mental-physical-exercise-for-cats", img:"assets/image1.jpg" },
  { n:2, platform:"Facebook", name:"GreenPan Spin & Go 便携榨汁机（奶油白）GreenPan Spin & Go Portable Blender | Cream",
    price:"$99.99", priceNote:"建议零售价 $149.99，落地页实测，USD",
    sales:"页面未显示评分、评价总数和已售数；评价区仅 3 条五星评价摘录，无汇总数字",
    time:"采集日期 2026-11-27",
    point:"12 盎司可充电便携榨汁机，6 片刀片、2 档功率，可直接用杯身饮用，支持自清洁，随时随地打果昔。",
    verdict:"可以观望", vcls:"watch",
    url:"https://www.greenpan.us/products/spin-go-portable-blender-cream", img:"assets/image2.jpg" },
  { n:3, platform:"Facebook", name:"Theo Grace 心形垂坠名字项链（925 纯银款）Heart Drop Vertical Name Pendant Necklace in Sterling Silver",
    price:"$63", priceNote:"原价 $70，立省 10%，落地页实测，USD",
    sales:"评分 4.9/5，25 条评价；已售数页面未显示（品牌整体 Trustpilot 71K+ 评价，非本款）",
    time:"采集日期 2026-11-27",
    point:"925 纯银个性化名字项链，可定制 1 至 5 个名字，按订单手工制作。",
    verdict:"可以观望", vcls:"watch",
    url:"https://www.theograce.com/products/heart-drop-vertical-name-necklace-in-sterling-silver", img:"assets/image3.jpg" },
  { n:4, platform:"TikTok", name:"DIGWAC 106\" L-shaped modular sectional sofa with a 49\"",
    price:"$349.00", priceNote:"TokConnect 榜单价，TikTok Shop，USD",
    sales:"近7日营收 $86,550，环比 +587%，7 日卖出 约 248 件，141 位达人带货（TokConnect 估算，非平台官方）",
    time:"数据时间段 2026-11-15 至 2026-11-21；采集日期 2026-11-26",
    point:"106英寸L形模块化组合沙发，带49英寸贵妃位，可自由拼接；7日营收$86,550、环比+587%，本周 TikTok 涨幅榜第1名，大件家具黑五季爆款。",
    verdict:"值得跟进", vcls:"follow",
    url:"https://tokconnect.com/trends/tiktok-shop/rising-products/", img:"assets/image4.jpg" },
  { n:5, platform:"Instagram", name:"窄玄关鞋柜 Narrow Hallway Shoe Cabinet",
    price:"$249.99", priceNote:"原价 $329.99，-24%，店铺商品页实测，USD；White / 3 Flip Drawers 款",
    sales:"店铺评分 4.27/5，基于 11 条评价；已售数页面未显示",
    time:"采集日期 2026-11-27",
    point:"窄身翻斗设计适合狭窄玄关，节省空间收纳鞋子，外观简约现代。",
    verdict:"可以观望", vcls:"watch",
    url:"https://homeyhues.shop/products/narrow-hallway-shoe-cabinet", img:"assets/image5.jpg" },
  { n:6, platform:"Instagram", name:"SitKick 可穿戴场边座椅 SitKick Wearable Sideline Seat",
    price:"$84.99", priceNote:"原价 $169.98，黑五价 5 折，店铺商品页实测，USD；2 件 $149.99、3 件 $209.99",
    sales:"店铺评分 4.8/5（商品页实测）；评价总数与已售数页面未显示，商品页有 5 条 2026 年 11 月已验证购买 5 星评价",
    time:"采集日期 2026-11-27",
    point:"绑在腿上的可穿戴座椅，带软垫座面、快拆绑带和防滑脚，随膝盖折叠，行走如常，随时随地可坐下。",
    verdict:"可以观望", vcls:"watch",
    url:"https://sitkick.store/products/sitkick-wearable-sideline-seat", img:"assets/image6.jpg" },
  { n:7, platform:"Reddit", name:"福禄克 77 IV 数字万用表 Fluke 77 IV Digital Multimeter",
    price:"$479.99", priceNote:"福禄克官网实测，现货，USD；帖子标题里的 $225 是发帖人自述入手价，未采用",
    sales:"福禄克官网 4.8/5 分、23 条评价，现货在售；已售数页面未显示",
    time:"采集日期 2026-11-27",
    point:"大显示屏带背光，可记录信号波动的最小/最大值，配人体工学外壳与集成表笔架，方便在昏暗环境中测量。",
    verdict:"可以观望", vcls:"watch",
    url:"https://www.fluke.com/en-us/product/electrical-testing/digital-multimeters/fluke-77-iv", img:"assets/image7.jpg" },
  { n:8, platform:"Reddit", name:"Apple TV 4K 第 4 代 Apple TV 4K (4th gen)",
    price:"$299.00", priceNote:"苹果官网购买页实测，USD；可分 6 期，每期 $49.83",
    sales:"苹果官网购买页未显示评分、评价数、已售数，页面未显示",
    time:"采集日期 2026-11-27",
    point:"搭载 A19 Pro 芯片，支持 4K HDR 与杜比视界、杜比全景声，可用 Siri 语音控制，并能接通 FaceTime、健身与游戏内容。",
    verdict:"可以观望", vcls:"watch",
    url:"https://www.apple.com/shop/buy-tv/apple-tv-4k", img:"assets/image8.jpg" },
  { n:9, platform:"Amazon", name:"Apple AirTag (2nd Generation): Tracker for Keychain, Wallet, and More; Locator with Sound; Simple One-Tap Setup with iPhone or iPad; Key Finder with up to 1.5X Precision Finding Range",
    price:"$18.00", priceNote:"apiguru Best Sellers 接口，USD",
    sales:"Best Sellers 第 3 名，评分 4.6/5，13,582 条评价",
    time:"采集日期 2026-11-26",
    point:"第二代 AirTag，精确定位范围提升至1.5倍，带声音查找，iPhone一触配对；Amazon电子榜第3名，4.6分、13,582条评价，钥匙钱包防丢刚需。",
    verdict:"可以观望", vcls:"watch",
    url:"https://www.amazon.com/Apple-AirTag-2nd-Generation-Precision/dp/B0GJTFXNRX/ref=zg_bs_g_electronics_d_sccl_3/143-2757842-0560622?psc=1", img:"assets/image9.jpg" },
  { n:10, platform:"阿里国际站", name:"LOVFE 大型 1.5L 碗手压切碎机 Large 1.5L Bowl Effortless Vegetable Chopper Meat Grinder Fruit and Herb Chopper",
    price:"$1.28", priceNote:"1 set 起订；灰/绿/粉 1.5L 均为 $1.28，商品页未显示阶梯价",
    sales:"4.5/5（97 条评价），已售 1246 件；供应商台州 Hongmei Home（3 年，实力工厂 Verified），店铺评分 4.3/5（934），准时发货率 99.5%",
    time:"采集日期 2026-11-27",
    point:"1.5L 大碗手压切碎机，不锈钢刀片，可切蔬菜、肉类、水果和香草，手动按压即可切碎大蒜洋葱。",
    verdict:"可以观望", vcls:"watch",
    url:"https://www.alibaba.com/product-detail/Large-1-5L-Bowl-Effortless-Vegetable_1601381334594.html", img:"assets/image10.jpg" },
  { n:11, platform:"Amazon", name:"Beats Solo 4 On-Ear Headphones, 50 Hours Battery Life - Metallic Pink | Rich, Bass-Forward Sound Quality, Spatial Audio, USB-C Fast Fuel Charging, Compatible with Apple & Android Devices",
    price:"$79.99", priceNote:"apiguru Best Sellers 接口，USD",
    sales:"Best Sellers 第 4 名，评分 4.6/5，30,681 条评价",
    time:"采集日期 2026-11-27",
    point:"头戴式耳机，50 小时续航，空间音频，USB-C 快充，兼容苹果和安卓设备，金属粉色。",
    verdict:"可以观望", vcls:"watch",
    url:"https://www.amazon.com/Beats-Solo-Ear-Headphones-Ultra-Lightweight/dp/B0FHLPS8ZF/ref=zg_bs_g_electronics_d_sccl_4/141-3151391-8330728?psc=1", img:"assets/image11.jpg" }
];
