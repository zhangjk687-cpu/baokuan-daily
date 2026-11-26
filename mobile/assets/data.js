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
   当前内容：2026-11-26 正刊
   ============================================================ */

var DATA_DATE = "2026-11-26";
var EDITION = "正刊";
// 面板顶栏日期、统计、下载链接都从上面两个变量读，不写死在 index.html。

var PRODUCTS = [
  { n:1, platform:"Facebook", name:"Lilingg 儿童红外激光对战玩具枪套装（含互动投影仪）Kids Infrared Laser Battle Toy Gun Set",
    price:"$104.99", priceNote:"原价 $209.98，5 折，商品页实测，USD",
    sales:"商品页评分 4.9/5，86.7% 的顾客选择“买一送一”套装",
    time:"广告开始 2026-10-28；采集日期 2026-11-26",
    point:"两支红外激光枪＋互动投影靶，带音效灯光，支持多人对战，节日送礼的互动玩具爆款。",
    verdict:"可以观望", vcls:"watch",
    url:"https://lilingg.com/products/kids-infrared-laser-battle-toy-gun-set-with-2-mini-pistols-and-1-projector-featuring-sound-and-light", img:"assets/image1.jpg" },
  { n:2, platform:"Facebook", name:"Core Hero 3 合 1 颈部按摩枕 Core Hero® 3-in-1 Neck Massage Pillow",
    price:"$109.00", priceNote:"原价 $242，商品页实测，USD",
    sales:"商品页 4.8/5、677 条评价，24,000+ 顾客信赖",
    time:"广告开始 2026-05-28；采集日期 2026-11-26",
    point:"热敷＋EMS＋可调强度三合一，既当 U 形枕又当按摩仪，办公室、长途出行人群刚需。",
    verdict:"可以观望", vcls:"watch",
    url:"https://mycorehero.com/products/neck-massager", img:"assets/image2.jpg" },
  { n:3, platform:"Facebook", name:"Chef Preserve 紧凑型真空封口机 Chef Preserve Compact Vacuum Sealer",
    price:"$67.00", priceNote:"原价 $162，62% off，10 袋装，商品页实测，USD",
    sales:"商品页 4.8 星（12,658 条评价），93% 已售",
    time:"广告开始 2026-10-19；采集日期 2026-11-26",
    point:"手持迷你真空封口机，一键抽真空锁鲜，体积小、带袋装耗材，黑五囤货季正好切中家庭保鲜痛点。",
    verdict:"可以观望", vcls:"watch",
    url:"https://chefpreserve.com/products/cp", img:"assets/image3.jpg" },
  { n:4, platform:"TikTok", name:"SEESE 8V Lightweight Cordless Drill Set, 126-Piece",
    price:"$40.72", priceNote:"TokConnect 榜单价，TikTok Shop，USD",
    sales:"近7日营收 $117.7K，环比 +534%，7 日卖出约 2.9 千件，249 位达人带货（TokConnect 估算，非平台官方）",
    time:"数据时间段 2026-11-15 至 2026-11-21；采集日期 2026-11-26",
    point:"8V 轻量无绳电钻 126 件套，家用 DIY 一套全齐，$40 出头，黑五装修季刚需。",
    verdict:"值得跟进", vcls:"follow",
    url:"https://tokconnect.com/trends/tiktok-shop/rising-products/", img:"assets/image4.jpg" },
  { n:5, platform:"TikTok", name:"BrüMate Era Flip Covered Flip-Down Straw Tumbler, 40oz",
    price:"$37.99", priceNote:"TokConnect 榜单价，TikTok Shop，USD",
    sales:"近7日营收 $102.3K，环比 +524%，7 日卖出约 2.7 千件，597 位达人带货（TokConnect 估算，非平台官方）",
    time:"数据时间段 2026-11-15 至 2026-11-21；采集日期 2026-11-26",
    point:"40oz 翻盖吸管保温杯，防漏、带手柄，Stanley 平替，近 600 位达人同时在推。",
    verdict:"值得跟进", vcls:"follow",
    url:"https://tokconnect.com/trends/tiktok-shop/rising-products/", img:"assets/image5.jpg" },
  { n:6, platform:"TikTok", name:"Soulor 8000mAh Portable Car Jump Starter",
    price:"$29.70", priceNote:"TokConnect 榜单价，TikTok Shop，USD",
    sales:"近7日营收 $121.1K，环比 +270%，7 日卖出约 4.1 千件，294 位达人带货（TokConnect 估算，非平台官方）",
    time:"数据时间段 2026-11-15 至 2026-11-21；采集日期 2026-11-26",
    point:"8000mAh 便携汽车应急启动电源，带 LED 灯和指南针，$29.70，冬季亏电刚需，7 日卖出 4 千多件。",
    verdict:"值得跟进", vcls:"follow",
    url:"https://tokconnect.com/trends/tiktok-shop/rising-products/", img:"assets/image6.jpg" },
  { n:7, platform:"Instagram", name:"Ninja CREAMi Scoop & Swirl 软冰淇淋机（Stone & Gold，型号 NC701STGD）Ninja CREAMi Scoop & Swirl Soft Serve Ice Cream Machine in Stone & Gold",
    price:"$279.99", priceNote:"原价 $349.99，商品页实测，USD",
    sales:"SharkNinja 官网 4.2/5、244 条评价（商品页实测）",
    time:"采集日期 2026-11-26",
    point:"一键把几乎任何食材变成软冰淇淋/冰淇淋，还能自己调味，黑五专属款，是今年厨房小家电里最出圈的“网红机”。",
    verdict:"可以观望", vcls:"watch",
    url:"https://www.instagram.com/explore/search/keyword/?q=Ninja%20Creami", img:"assets/image7.jpg" },
  { n:8, platform:"Instagram", name:"Ninja CRISPi 4 合 1 便携玻璃空气炸锅（Golden Pine，型号 FN101GN2）Ninja Crispi 4-in-1 Glass Air Fryer, Golden Pine",
    price:"$149.99", priceNote:"原价 $179.99，商品页实测，USD",
    sales:"该 Reel 87 赞、53 评论、4 转发、68 分享；SharkNinja 官网该配色页 4.5/5、830 条评价；买即赠价值 29.99 美元收纳包",
    time:"Reel 发布 2026-10-01；采集日期 2026-11-26",
    point:"全尺寸空气炸锅的功率做成便携玻璃款，炸、烤、烘焙、复热四合一，玻璃内胆看得见、直接上桌，IG 烘焙博主集体带货的爆款。",
    verdict:"可以观望", vcls:"watch",
    url:"https://www.instagram.com/p/Dd873Liu-Q8/", img:"assets/image8.jpg" },
  { n:9, platform:"Reddit", name:"TALIX 便携充电宝 100W 10000mAh（自带 USB-C 线）TALIX Portable Charger 100W, 10000mAh Power Bank with Built-in USB-C Cable",
    price:"$20.00", priceNote:"Reddit 帖标题 43% off；亚马逊商品页因亚马逊拒绝 AI 访问未二次核价，USD",
    sales:"帖子 3 个赞、0 评论；链接亚马逊 ASIN B0GC3S8SMG",
    time:"帖子发布 2026-11-24；采集日期 2026-11-26",
    point:"100W 大功率＋自带 USB-C 线，10000mAh 可充笔记本/手机，出行不用再带线。",
    verdict:"可以观望", vcls:"watch",
    url:"https://www.reddit.com/r/USDealsHub/comments/1y49uk1/amazon_portable_charger_100w_10000mah_power_bank/", img:"assets/image9.jpg" },
  { n:10, platform:"Reddit", name:"戴森 Airwrap Co-anda2x 多功能造型器（卷发＋卷烫款，陶瓷粉/玫瑰金）Dyson Airwrap Co-anda2x multi-styler and dryer - Curly+Coily (Ceramic pink/Rose gold)",
    price:"$749.99", priceNote:"戴森官网在售，In stock，USD",
    sales:"戴森官网 4.8/5、12,422 条评价，87% 推荐；帖子 2 条评论",
    time:"帖子发布 2026-11-25；采集日期 2026-11-26",
    point:"新一代 Co-anda 2x 气流卷发＋直发二合一，黑五折扣叠加是全年最低入手窗口，个护类顶流单品。",
    verdict:"可以观望", vcls:"watch",
    url:"https://www.reddit.com/r/Dysonairwrap/comments/1y5g56n/buying_dyson_airwrap_coanda_2x_during_black_friday/", img:"assets/image10.jpg" },
  { n:11, platform:"阿里国际站", name:"HY300 迷你便携投影仪 Mini Portable HY300 Mini Pocket Projector（原生 1080p，50 ANSI，BT5.0）",
    price:"$11.57", priceNote:"原价 $13，-11%，起订量 1 件，商品页实测，USD",
    sales:"已售 70 件，3.1/5（15 条评价），投影机类目 #19 爆款；供应商深圳 Qingpure 评分 4.1/5（1,669 条评价）",
    time:"采集日期 2026-11-26",
    point:"掌心大小的原生 1080p 投影仪，自带蓝牙 5.0，十几美元就能搭家庭影院/户外露营放映，低价走量爆款。",
    verdict:"可以观望", vcls:"watch",
    url:"https://www.alibaba.com/product-detail/Mini-Portable-HY300-Mini-Pocket-Projector_1601598747435.html", img:"assets/image11.jpg" },
  { n:12, platform:"Walmart", name:"FOHERE 50Oz 玻璃杯台式破壁机 FOHERE 50Oz Glass Jar Countertop Blender, 1300W Peak Power, BPA-Free, 5-Speed Presets Smoothie Maker with 20Oz Tritan To-Go Cup",
    price:"$39.99", priceNote:"原价 $89.99，省 50 美元，Clearance，商品页实测，USD",
    sales:"商品页 4.0/5、213 条评分、83 条评价；由 HomeGear Pro 销售、Walmart 履行，免费配送、11 月 28 日达，支持 90 天免费退货",
    time:"上榜 2026-11-26；采集日期 2026-11-26",
    point:"1300W 峰值功率＋50Oz 玻璃杯，5 档预设一键打果昔，另配 20Oz 便携杯，40 美元价位的大功率破壁机是黑五厨房刚需。",
    verdict:"可以观望", vcls:"watch",
    url:"https://www.walmart.com/ip/FOHERE-50Oz-Glass-Jar-Countertop-Blender-1300W-Peak-Power-BPA-Free-5-Speed-Presets-Smoothie-Maker-with-20Oz-Tritan-To-Go-Cup/279576487?classType=REGULAR", img:"assets/image12.jpg" },
  { n:13, platform:"Walmart", name:"Enya XMARI S 型智能电吉他 Enya Music Electric Guitar XMARI S-Style Smart Built-In DSP Effects Carbon Fiber Body",
    price:"$187.49", priceNote:"原价 $249.99，省 62.50 美元，Black Friday Deal，商品页实测，USD",
    sales:"商品页 4.4/5、20 条评分、5 条评价；Enya Music Inc. 销售配送，仅线上售卖，12 月 4–7 日达",
    time:"上榜 2026-11-26；采集日期 2026-11-26",
    point:"碳纤维琴身＋内置 DSP 智能音效，插上耳机就能练琴不扰民，新手练琴与送礼的稀缺功能款。",
    verdict:"可以观望", vcls:"watch",
    url:"https://www.walmart.com/ip/Enya-Music-Electric-Guitar-XMARI-S-Style-Smart-Built-In-DSP-Effects-Carbon-Fiber-Body/19233369613?classType=REGULAR&athbdg=L1800", img:"assets/image13.jpg" },
  { n:14, platform:"Target", name:"苹果 AirPods Pro 3 无线降噪耳机 Apple AirPods Pro 3 Wireless Earbuds with Active Noise Cancellation",
    price:"$149.99", priceNote:"原价 $249.99，立减 100 美元，商品页实测，USD",
    sales:"耳机类 Bestseller；商品页 3.93/5、2,443 条评价、150 个问答，标注 Rarely returned（极少退货）；2 小时内可到店取货，配送 11 月 29 日达",
    time:"上榜 2026-11-26；采集日期 2026-11-26",
    point:"新一代主动降噪＋心率监测耳机，黑五直降 100 美元到 149.99 美元，是今年耳机类最值得入手的折扣。",
    verdict:"可以观望", vcls:"watch",
    url:"https://www.target.com/p/ap2022-true-wireless-bluetooth-headphones/-/A-85978609", img:"assets/image14.jpg" },
  { n:15, platform:"Target", name:"Oura Ring 5 智能戒指（黑色，6 号）Oura Ring 5 Black - Size 6",
    price:"$299.00", priceNote:"原价 $399.00，立减 100 美元，商品页实测，USD",
    sales:"智能戒指类 Highly rated；商品页 3.97/5、247 条评价、33 个问答；配送 12 月 4 日达，30 天店内免费退货",
    time:"上榜 2026-11-26；采集日期 2026-11-26",
    point:"不用戴手表就能 24 小时监测睡眠、心率与恢复状态的智能戒指，黑五立减 100 美元，可穿戴里的稀缺功能款。",
    verdict:"可以观望", vcls:"watch",
    url:"https://www.target.com/p/oura-ring-5/-/A-1011018295", img:"assets/image15.jpg" }
];
