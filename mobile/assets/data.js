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
   当前内容：2026-11-25 试刊
   ============================================================ */

var DATA_DATE = "2026-11-25";
var EDITION = "试刊";
// 面板顶栏日期、统计、下载链接都从上面两个变量读，不写死在 index.html。

var PRODUCTS = [
  { n:1, platform:"Facebook", name:"口袋多功能无线工具 Flipper Zero",
    price:"$169.00", priceNote:"官网落地页标价，USD，现货",
    sales:"页面未显示销量；投放信号：TryVolume 2026-11-23 实测在投广告 4 条，最长 16 天",
    time:"广告投放时长截至 2026-11-23；采集日期 2026-11-25",
    point:"一台口袋设备同时集成 Sub-1GHz、NFC、RFID、红外、蓝牙，可读存、模拟门禁卡 / 遥控器信号",
    verdict:"可以观望", vcls:"watch",
    url:"https://flipper.net/products/flipper-zero", img:"assets/image1.jpg" },
  { n:2, platform:"Facebook", name:"ZONE 专注翻转计时器",
    price:"$79.00", priceNote:"原价 $89",
    sales:"落地页超 1 万人已使用、评分 4.62/5.0（138 条评价）、Kickstarter 众筹 $306,380；在投广告 3 条，最长 418 天",
    time:"截至 2026-11-24；采集 2026-11-25",
    point:"无 App、无通知的翻转计时方块，翻到哪面就启动对应的 5 / 10 / 25 / 60 分钟专注倒计时",
    verdict:"值得跟进", vcls:"follow",
    url:"https://newthingslab.com/products/zone-productivity-timer", img:"assets/image2.jpg" },
  { n:3, platform:"Facebook", name:"Lomi 3 厨余回收机",
    price:"$499.00", priceNote:"免运费",
    sales:"页面未显示销量；在投广告 4 条、累计 124 条，94% 为视频广告，自 2021 年 4 月起在 Meta 投放",
    time:"截至 2026-11-24；采集 2026-11-25",
    point:"台面厨余机 3 小时把剩饭剩菜加热研磨成可施肥的营养土，无异味、无虫害，垃圾量减少 80%",
    verdict:"可以观望", vcls:"watch",
    url:"https://lomi.com/products/lomi-3-food-recycler", img:"assets/image3.jpg" },
  { n:4, platform:"TikTok", name:"哈曼卡顿 Onyx Studio 8 便携立体声蓝牙音箱",
    price:"$499.95", priceNote:"2025 年 11 月 TikTok 均价；官网现价 $99.99",
    sales:"2025 年 11 月榜：销售额 $3.48 million，售出 34,800 件，环比增长超 999.9%，创作者视频 785 条",
    time:"数据时间段 2025 年 11 月；采集 2026-11-25",
    point:"开机自动校准声场、双设备蓝牙加双机无线立体声、8 小时续航",
    verdict:"可以观望", vcls:"watch",
    url:"https://www.harmankardon.com/ONYX-STUDIO-8-.html", img:"assets/image4.jpg" },
  { n:5, platform:"TikTok", name:"PetPivot 自动铲屎猫砂盆 11 代",
    price:"$136.99", priceNote:"2025 年 11 月 TikTok 均价",
    sales:"2025 年 11 月榜：销售额 $5.32 million，售出 38,850 件，环比增长 130.9%，创作者视频 908 条",
    time:"数据时间段 2025 年 11 月；采集 2026-11-25",
    point:"敞口旋转筛分、猫走后 5 分钟自动铲屎、无 App 无 Wi-Fi 不用订阅",
    verdict:"值得跟进", vcls:"follow",
    url:"https://the-gadgeteer.com/2025/05/03/petpivot-autoscooper-11-litterbox-review/", img:"assets/image5.jpg" },
  { n:6, platform:"TikTok", name:"Hieha 4000A 便携汽车搭电启动器（带充气泵）",
    price:"$45.99", priceNote:"现价（原价 $118.00，-61%）；2025 年 11 月 TikTok 价 $49.98",
    sales:"2025 年 11 月榜：销售额 $2.49 million，售出 74,670 件，环比增长 267%；产品页实时（2026-11-24）：已售 194.7K，评分 4.6（19.6K 条评价）",
    time:"2025 年 11 月 + 实时截至 2026-11-24；采集 2026-11-25",
    point:"4000A 搭电加 150PSI 智能充气加 15000mAh 充电宝加 LED 手电四合一",
    verdict:"值得跟进", vcls:"follow",
    url:"https://shop.tiktok.com/us/pdp/portable-car-jump-starter-by-hieha-4000a-with-air-compressor-led-light/1730749598688448629", img:"assets/image6.jpg" },
  { n:7, platform:"Instagram", name:"反重力水滴加湿器 Bavziy 白色 580ml",
    price:"$35.00", priceNote:"",
    sales:"TakeToNews：4.7/5 分、8,900+ 条评价；该条 Reel 本身 0 点赞、0 评论",
    time:"Reel 2026-11-02；采集 2026-11-25",
    point:"频闪灯光让水滴看起来悬浮倒流，加湿 + 桌面喷泉 + 七彩氛围灯 + LED 时钟三合一",
    verdict:"可以观望", vcls:"watch",
    url:"https://odditymall.com/anti-gravity-raindrop-humidifier/", img:"assets/image7.jpg" },
  { n:8, platform:"Instagram", name:"Divoom Ditoo-Pro 复古像素艺术蓝牙音箱",
    price:"$96.99", priceNote:"优惠码 BF26DITOO 立减 $32，即 $64.99",
    sales:"该条 Reel：2,333 点赞、19 评论；TakeToNews：4.8/5 分、21,000+ 条评价",
    time:"Reel 2025-03-25；采集 2026-11-25",
    point:"微型复古电脑造型，16×16 像素屏可自画像素画 / 动画，带机械按键、小摇杆、15W 音箱、闹钟 / 白噪音 / 迷你游戏",
    verdict:"值得跟进", vcls:"follow",
    url:"https://divoom.com/products/divoom-pro", img:"assets/image8.jpg" },
  { n:9, platform:"Reddit", name:"便携双屏扩展器 DuoView Pro",
    price:"页面未显示", priceNote:"",
    sales:"Reddit 帖子约 1.2K 点赞、约 226 条评论；官网限量 1,000 台创始版；处于众筹上线阶段、非大规模零售现货",
    time:"采集 2026-11-25",
    point:"一根 USB-C 线带起两块 16 英寸 2.5K 屏，把笔记本一秒变三屏，iF 设计奖 2026 得主",
    verdict:"先别碰", vcls:"avoid",
    url:"https://duoviewpro.com/", img:"assets/image9.jpg" },
  { n:10, platform:"Reddit", name:"食盐灭蝇枪 Bug-A-Salt 3.0",
    price:"$49.95", priceNote:"",
    sales:"r/funny 相关帖 254 点赞、87 条评论；Sportsman's Warehouse 评分 4.5 分（8 条评价）",
    time:"采集 2026-11-25",
    point:"不用药、不用电，只用普通食盐当子弹，2–3 英尺内精准打灭苍蝇蚊虫，无化学残留",
    verdict:"可以观望", vcls:"watch",
    url:"https://www.sportsmans.com/camping-gear-supplies/safety-survival/bug-sun-protection/bug-a-salt-30-pump-salt-shotgun-classic-yellow/p/1654405", img:"assets/image10.jpg" },
  { n:11, platform:"X", name:"星链 Mini 2 便携卫星终端",
    price:"页面未显示", priceNote:"邀请预订价 $999",
    sales:"无销量数字；Gridd 追踪（2026-11-24）：32,515,793 次查看、12,292 点赞、1,557 转帖，在 3,797 个发布中排第 27 位",
    time:"首发 2026-11-10 至 2026-11-24；采集 2026-11-25",
    point:"首款自带可快换电池的星链终端，71Wh 电池可离电上网最长 4.5 小时，USB-C 供电 + 内置 Wi-Fi 6",
    verdict:"可以观望", vcls:"watch",
    url:"https://starlink.com/mini-2", img:"assets/image11.jpg" },
  { n:12, platform:"X", name:"雷朋 Meta 音频眼镜 Burbank",
    price:"$349", priceNote:"起",
    sales:"Audio 本身 X 互动数页面未显示",
    time:"开售 2026-10-13；采集 2026-11-25",
    point:"Meta 首款无摄像头 AI 眼镜，只有扬声器 + 麦克风 + Meta AI，43 克最轻机身、单次充电最长 12 小时",
    verdict:"可以观望", vcls:"watch",
    url:"https://www.meta.com/blog/ray-ban-meta-audio-our-first-audio-glasses-are-here/", img:"assets/image12.jpg" },
  { n:13, platform:"Amazon", name:"安克超薄磁吸充电宝 5000mAh Qi2 15W（型号 A1665）",
    price:"页面未显示", priceNote:"",
    sales:"Accio 汇总 Amazon 畅销前 10 榜第 4 名，月销 16,739，评分 4.4；数据时间段 2025 年 11 月，Amazon 实时榜本次打不开（403）",
    time:"采集 2026-11-25",
    point:"仅 0.3 英寸厚、Qi2 认证 15W 磁吸无线快充，iPhone 16 Pro 42 分钟充 25%",
    verdict:"可以观望", vcls:"watch",
    url:"https://www.amazon.com/dp/B0FK59HNVM", img:"assets/image13.jpg" },
  { n:14, platform:"Amazon", name:"RYR 20ms 低延迟双模游戏耳机 NEO100",
    price:"页面未显示", priceNote:"",
    sales:"页面未显示（Best Sellers Rank 栏空白，无评分、无评论数、无月销）",
    time:"采集 2026-11-25",
    point:"20ms 超低延迟加 2.4GHz 发射器与蓝牙 5.3 双模、ENC 降噪麦，专为 PS5 / Meta Quest VR 游戏做音画同步",
    verdict:"先别碰", vcls:"avoid",
    url:"https://www.amazon.com/dp/B0DGG2G4L6", img:"assets/image14.jpg" },
  { n:15, platform:"阿里国际站", name:"J9 二合一颈挂双形态 ANC 无线翻译耳机",
    price:"$22.98", priceNote:"起 · 阶梯价：1–49 件 $22.98，50–499 件 $22.39，500–1,999 件 $21.30，≥2,000 件 $20.20；1 件起订",
    sales:"主链接暂无评价，未显示交易量；店铺评分 4.8/5（1026），此为店铺评分非本品销量",
    time:"采集 2026-11-25",
    point:"一副耳机两种戴法，APP 控制支持 144 种语言实时翻译，还带 ANC 主动降噪",
    verdict:"可以观望", vcls:"watch",
    url:"http://alibaba.com/product-detail/J9-Wireless-Earbuds-Neckband-Two-Form_1600917411638.html", img:"assets/image15.jpg" }
];
