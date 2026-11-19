const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];

const translations = {
  en: {
    demoBanner:'INTERACTIVE PROTOTYPE · ILLUSTRATIVE CHART DATA',navTraditions:'Traditions',navMethod:'Our approach',navAnnual:'Annual analysis',navStart:'Create a chart',
    heroEyebrow:'ANCIENT SYSTEMS · PERSONAL CHARTS · CULTURAL INSIGHT',heroTitle:'A deeper way<br>to read your <em>personal pattern.</em>',heroLead:'Explore the structure of your birth chart through Chinese metaphysical traditions — with clear calculations, thoughtful interpretation and room to understand the sources.',heroCta:'Explore your chart',heroSecondary:'Explore the traditions',heroNote:'Free personal chart · No account required · Annual report available separately',motionPause:'Pause motion',motionPlay:'Resume motion',
    trustOne:'Transparent chart foundations',trustOneSub:'Birth data, time zone and calculation context',trustTwo:'Distinct traditions, not blended',trustTwoSub:'Each system keeps its own method and evidence',trustThree:'A focused annual report',trustThreeSub:'One selected year, with supported themes only',
    traditionsEyebrow:'FIVE LENSES · ONE PERSONAL CHART',traditionsTitle:'A tradition is a way<br>of <em>seeing structure.</em>',traditionsIntro:'Start with the systems that shape the chart. Explore each one independently, then see where their readings agree, differ or remain unresolved.',baziTitle:'BaZi · Four Pillars',baziDesc:'A birth-time structure expressed through the Heavenly Stems, Earthly Branches, Ten Gods and Five Elements.',ziweiTitle:'Zi Wei Dou Shu',ziweiDesc:'A twelve-palace chart of stars, transformations and their relationships across life domains.',heluoTitle:'Heluo · I Ching',heluoDesc:'Pre-Heaven, Later-Heaven and annual hexagram structures, explored through their lines and relationships.',lumingTitle:'Lu Ming · Classical Destiny',lumingDesc:'A classical lens using year-mandate, Na Yin and related traditional structures.',blindTitle:'Blind School · Cross-reference',blindDesc:'A supporting interpretive lens used to compare signals and examine timing, not as a standalone dashboard.',exploreChart:'Explore chart',reportLens:'INCLUDED IN THE ANNUAL SYNTHESIS',supportLens:'SUPPORTING ANALYSIS IN THE REPORT',
    annualEyebrow:'ONE YEAR · ONE CONSIDERED REPORT',annualTitle:'A year worth<br><em>understanding.</em>',annualLead:'Your annual report brings the traditions into conversation around five grounded life dimensions. It expands only where the verified chart contains a meaningful signal.',annualCta:'Build your free chart',methodEyebrow:'A CLEARER WAY TO EXPLORE',methodTitle:'Culture, with<br><em>its sources in view.</em>',methodLead:'LIORIN presents traditional systems as cultural frameworks with traceable calculations and clearly stated limits — not as scientific certainty or a substitute for professional advice.',methodPointOne:'Calculation before interpretation',methodPointTwo:'Each tradition speaks in its own terms',methodPointThree:'Disagreement is shown, not hidden',readMethod:'Read our methodology',
    backHome:'Back to overview',chartCreation:'CHART CREATION',birthEyebrow:'START WITH THE SOURCE DATA',birthTitle:'Your chart begins<br>with <em>birth time.</em>',birthLead:'Accurate birth details help establish the calendar, time zone and chart structure used by each tradition.',birthPrivacy:'A free chart does not require an account or email. Your details are not saved to a profile unless you explicitly choose to remember them on this device.',birthFormTitle:'BIRTH DETAILS',dateOfBirth:'Date of birth *',timeOfBirth:'Local time of birth',sexAtBirth:'Sex used for traditional chart rules *',timeAccuracy:'Birth-time accuracy *',selectOption:'Select',chooseTimeZone:'Choose time zone',timezoneHint:'Time zone and daylight-saving rules are checked against the birth location.',customTimezoneLabel:'IANA time zone *',female:'Female',male:'Male',notSpecified:'Prefer not to specify',exactTime:'Exact / documented',approxTime:'Approximate',unknownTime:'Unknown',preHeaven:'Pre-Heaven',laterHeaven:'Later-Heaven',annualHexagram:'Annual',birthLocation:'Birthplace · city and country *',timeZone:'Birth time zone *',otherZone:'Other / enter IANA zone',calendarBasis:'Calendar basis',gregorian:'Gregorian calendar',rememberTitle:'Remember these details on this device',rememberSub:'Optional. Stored locally in this browser only for this prototype.',calculateChart:'Calculate my chart',sampleWorkspace:'Open a sample chart workspace ↗',formDisclaimer:'The prototype uses illustrative chart data. A live chart will only display results returned by the validated calculation service.',
    exitChart:'Exit chart',sampleData:'ILLUSTRATIVE DATA',editBirth:'Edit birth details',chartSystems:'CHART SYSTEMS',fourPillars:'Four Pillars',twelvePalaces:'Twelve Palaces',threeHexagrams:'Three Hexagrams',workspaceNote:'This is a visual prototype. The displayed chart values are placeholders, not calculated personal results.',annualReportCta:'Explore annual report',chartEyebrow:'BAZI · FOUR PILLARS',chartTitle:'Your birth structure.',chartSubtitle:'The Four Pillars describe a traditional time structure through stems, branches and element relationships.',chartBaziEyebrow:'BAZI · FOUR PILLARS',chartBaziTitle:'Your birth structure.',chartBaziSubtitle:'The Four Pillars describe a traditional time structure through stems, branches and element relationships.',chartZiweiEyebrow:'ZI WEI DOU SHU · TWELVE PALACES',chartZiweiTitle:'A map of twelve palaces.',chartZiweiSubtitle:'Explore palace positions, stars and traditional relationships. Star placements are illustrative placeholders.',chartHeluoEyebrow:'HELUO · I CHING STRUCTURES',chartHeluoTitle:'Three ways to view the hexagrams.',chartHeluoSubtitle:'Explore Pre-Heaven, Later-Heaven and annual hexagram structures line by line.',demoNotCalculated:'DEMO · NOT CALCULATED',sourceNoteTitle:'Calculation & source status',sourceNoteBody:'In production, this panel will show the calculation version, calendar conversion, time-zone handling, source references and rule IDs returned by the engine. No inference is made in the browser.',fourPillarsStructure:'FOUR PILLARS STRUCTURE',tapColumn:'Select a pillar to inspect',yearPillar:'YEAR PILLAR',monthPillar:'MONTH PILLAR',dayPillar:'DAY PILLAR',hourPillar:'HOUR PILLAR',selectedPillar:'SELECTED PILLAR',fiveElements:'Five Elements',structureOnly:'STRUCTURE ONLY · PLACEHOLDER',majorCycles:'Major cycles · Da Yun',engineRequired:'ENGINE DATA REQUIRED',twelvePalaceChart:'TWELVE-PALACE CHART',selectPalace:'Select a palace to inspect',palaceDetail:'PALACE DETAIL',heluoChartTitle:'HELUO HEXAGRAMS',selectLine:'Select a line to inspect',hexFootnote:'Line positions and hexagram labels are illustrative placeholders, not an engine result.',lineInterpretation:'LINE EXPLORATION',evidenceStatus:'EVIDENCE STATUS',placeholderOnly:'PLACEHOLDER ONLY',viewYear:'VIEW YEAR',yearChanges:'Switching year updates annual chart requests in production.',chartAtAGlance:'AT A GLANCE',birthYear:'Birth year',dayMaster:'Day Master',yearElement:'Year element',profileBasis:'Profile basis',asideQuote:'A chart is a map of a tradition’s language — not a verdict on a life.',viewAnnualReport:'View annual report',
    backToChart:'Back to chart',annualReport:'ANNUAL REPORT',reportEyebrow:'A FOCUSED VIEW OF ONE YEAR',reportTitle:'Your year,<br><em>read in context.</em>',reportLead:'A structured annual cultural analysis across five life dimensions, informed by distinct traditional systems and the evidence they support.',selectedYearLabel:'SELECTED YEAR',oneYearPurchase:'One selected year · One-time purchase',reportScope:'What the report explores',fiveDimensions:'FIVE LIFE DIMENSIONS',workTitle:'Work & direction',workDesc:'Professional roles, development patterns, responsibilities and supported periods of change.',financeTitle:'Finance & resources',financeDesc:'Traditional symbols relating to resources, expenditure, stability and management.',relationshipTitle:'Relationships & family',relationshipDesc:'Relationship and family themes only where the relevant chart structures are active.',wellbeingTitle:'Wellbeing & balance',wellbeingDesc:'Cultural symbolism around balance and habits; never a diagnosis or medical forecast.',peopleTitle:'People & environment',peopleDesc:'Social context, collaboration, networks and environmental themes.',conditionalDepth:'CONDITIONAL DEPTH',reportPrinciple:'The report does not force equal-length sections. Stronger, evidence-supported themes receive more attention; where no distinct timing signal is supported, the report says so.',yourReport:'YOUR ANNUAL REPORT',whatIncluded:'Included in your report',includedOne:'Brief birth chart and cycle context',includedTwo:'BaZi, Blind School, Lu Ming, Zi Wei & Heluo',includedThree:'Cross-system agreements and differences',includedFour:'Evidence references and cultural notes',includedFive:'A personal PDF delivered by email',oneTimePrice:'One-time price',priceTbc:'To be confirmed',continueEmail:'Continue to email & order',notSubscription:'Not an automatic subscription. You choose each report year separately.',
    backToPreview:'Back to report preview',orderDetails:'ORDER DETAILS',deliveryEyebrow:'EMAIL DELIVERY',deliveryTitle:'Where should<br>we send your <em>report?</em>',deliveryLead:'Your report is prepared after payment and validation. We will email a secure access link when it is ready.',emailAddress:'Email address *',reportLanguage:'Report language',emailConsent:'I confirm this email address and agree to receive the transactional messages needed to deliver my report.',termsConsent:'I have read the cultural-use notice, privacy policy and refund terms.',confirmOrder:'Review order',checkoutDisclaimer:'Prototype only: no payment will be taken. Pricing, tax, payment provider and legal terms must be approved before launch.',orderSummary:'ORDER SUMMARY',annualProduct:'Personal Annual Analysis',deliveryMethod:'Delivery',emailSecureLink:'Email · Secure link',billingType:'Billing',oneTime:'One-time purchase',total:'Total',summaryNote:'Your birth data and report contents are never placed in the email subject line.',orderDemoEyebrow:'DEMO ORDER REVIEW',orderDemoTitle:'Your delivery details<br>are <em>ready to review.</em>',orderStatus:'ORDER STATUS',awaitingPayment:'AWAITING PAYMENT INTEGRATION',deliveryEmail:'DELIVERY EMAIL',reportYearLabel:'REPORT YEAR',returnReport:'Return to report preview',
    methodPageEyebrow:'CULTURAL FRAMEWORKS · TRACEABLE SOURCES',methodPageTitle:'Interpretation begins<br>with <em>what can be shown.</em>',methodPageLead:'LIORIN separates calculation, traditional interpretation and modern-language presentation. Every production statement must be traceable to an admitted rule and its evidence.',methodologyOne:'Calculation',methodologyOneText:'Birth time, calendar conversion, time zone and chart structures are calculated by the engine. The browser does not recreate or override these rules.',methodologyTwo:'Interpretation',methodologyTwoText:'BaZi, Blind School, Lu Ming, Zi Wei and Heluo are analysed independently before cross-reference. Agreement and disagreement remain visible.',methodologyThree:'Semantic mapping',methodologyThreeText:'Traditional concepts are mapped into clear contemporary language without changing the underlying rule or claiming scientific certainty.',methodologyFour:'Evidence & limits',methodologyFourText:'Unsupported or unresolved statements are not presented as findings. Cultural readings are not medical, financial, legal or relationship advice.',footerTagline:'Traditional systems, thoughtfully explored.',privacy:'Privacy',terms:'Terms',contact:'Contact',footerDisclaimer:'Traditional cultural interpretation for educational and reflective purposes. Not a substitute for professional advice.',
    errorBirth:'Please complete all required birth details. If the time zone is uncertain, select the closest known zone and confirm it before a real calculation.',errorZone:'Choose a time zone or enter a valid IANA time-zone identifier.',errorEmail:'Enter a valid email address and accept both required confirmations.',orderReady:'Demo order summary prepared for {email}. No payment has been taken.',chartCreated:'Chart workspace opened. Displayed chart values are illustrative placeholders.',yearChanged:'Selected report year: {year}.',motionPaused:'Motion paused.',motionResumed:'Motion resumed.',
    timeUnknown:'Time unknown',langEn:'English',langHans:'简体中文',langHant:'繁體中文',elementWood:'Wood',elementFire:'Fire',elementEarth:'Earth',elementMetal:'Metal',elementWater:'Water',cycleSpan:'10-year cycle',cycleIndex:'CYCLE {n}',heluoBandEyebrow:'河圖 · HETU',heluoBandTitle:'Time, pattern & correspondence.',heluoBandText:'The original map artwork remains unchanged. Motion is applied only to its outer image element.',glanceDayMasterValue:'戊 · Earth',glanceYearElementValue:'Earth',glanceProfileBasis:'Local birth time',coverTitle:'Personal<br><em>Year Analysis</em>',coverSub:'FIVE TRADITIONAL LENSES',sheetTitle:'Five dimensions.<br><em>One year in view.</em>',sheetWork:'Work & direction',sheetFinance:'Finance & resources',sheetRelationships:'Relationships & family',sheetWellbeing:'Wellbeing & balance',sheetPeople:'People & environment',
    pillarYearTitle:'Year pillar · Jia Zi',pillarYearText:'The year pillar is traditionally associated with early environment, lineage and broader social context. This is placeholder explanatory content.',pillarMonthTitle:'Month pillar · Bing Yin',pillarMonthText:'The month pillar is traditionally read in relation to seasonal context, family environment and the structure of the chart. This is placeholder explanatory content.',pillarDayTitle:'Day pillar · Wu Chen',pillarDayText:'The day pillar anchors the Day Master and the traditional reading of the self and partnership palace. This is placeholder explanatory content.',pillarHourTitle:'Hour pillar · Geng Wu',pillarHourText:'The hour pillar is traditionally associated with later development, aspirations and descendants. This is placeholder explanatory content.',
    palaceLifeTitle:'命宮 · Life Palace',palaceLifeText:'A traditional starting point for examining the chart’s central palace structure. Star placement and relationships shown here are placeholders.',palaceSiblingsTitle:'兄弟宮 · Siblings',palaceSiblingsText:'Traditionally associated with siblings, peers and close horizontal relationships. Placeholder content only.',palacePartnershipTitle:'夫妻宮 · Partnership',palacePartnershipText:'Traditionally associated with partnership and relational structures. Placeholder content only.',palaceChildrenTitle:'子女宮 · Children',palaceChildrenText:'Traditionally associated with descendants, creative output and related themes. Placeholder content only.',palaceParentsTitle:'父母宮 · Parents',palaceParentsText:'Traditionally associated with parents, elders and inherited context. Placeholder content only.',palaceWealthTitle:'財帛宮 · Wealth',palaceWealthText:'Traditionally associated with resources, earning and material management. Placeholder content only.',palaceFortuneTitle:'福德宮 · Fortune',palaceFortuneText:'Traditionally associated with inner life, enjoyment and spiritual resources. Placeholder content only.',palacePropertyTitle:'田宅宮 · Property',palacePropertyText:'Traditionally associated with home, property and living environment. Placeholder content only.',palaceCareerTitle:'官祿宮 · Career',palaceCareerText:'Traditionally associated with vocation, public role and professional direction. Placeholder content only.',palaceWellbeingTitle:'疾厄宮 · Wellbeing',palaceWellbeingText:'Traditionally associated with vitality and wellbeing symbolism. This is not medical advice.',palaceTravelTitle:'遷移宮 · Travel',palaceTravelText:'Traditionally associated with movement, external environment and life beyond home. Placeholder content only.',palaceFriendsTitle:'交友宮 · Friends',palaceFriendsText:'Traditionally associated with friends, networks and social collaboration. Placeholder content only.',palaceBodyTitle:'身宮 · Body Palace',palaceBodyText:'A supplementary palace used by some Zi Wei approaches. Placeholder content only.',
    hexPreType:'PRE-HEAVEN HEXAGRAM',hexPreName:'乾 · Qian',hexPreMeaning:'The Creative · illustrative only',hexPostType:'LATER-HEAVEN HEXAGRAM',hexPostName:'坤 · Kun',hexPostMeaning:'The Receptive · illustrative only',hexAnnualType:'ANNUAL HEXAGRAM',hexAnnualName:'水火既濟 · Ji Ji',hexAnnualMeaning:'After Completion · illustrative only',lineLabel:'Line {n}',lineUpper:'Upper position',lineBeginning:'Beginning position',linePosition:'Position {n}',lineDefaultText:'Select a line to view its place within the hexagram. In production, line state, changing-line status and source references are returned by the Heluo engine.'
  },
  'zh-Hans': {
    demoBanner:'交互原型 · 命盘数据为示意内容',navTraditions:'命理体系',navMethod:'方法与依据',navAnnual:'年度报告',navStart:'开始排盘',
    heroEyebrow:'传统体系 · 个人命盘 · 文化解读',heroTitle:'以更深入的方式<br>理解你的<em>个人命盘结构。</em>',heroLead:'通过中国传统命理体系探索出生信息所形成的命盘结构。计算依据清晰，解读保持克制，并提供可追溯的文化来源。',heroCta:'探索个人命盘',heroSecondary:'了解传统体系',heroNote:'免费个人排盘 · 无需注册 · 年度报告独立购买',motionPause:'暂停动画',motionPlay:'继续动画',
    trustOne:'透明的排盘基础',trustOneSub:'出生资料、时区与计算背景',trustTwo:'各体系独立呈现',trustTwoSub:'保留各自的方法与证据',trustThree:'聚焦年度报告',trustThreeSub:'指定年份，只呈现有依据的主题',
    traditionsEyebrow:'五种视角 · 一张个人命盘',traditionsTitle:'传统体系，是一种<br><em>观察结构的方式。</em>',traditionsIntro:'先了解构成命盘的不同体系。每个体系独立探索，再查看它们之间的共识、差异与尚未解决的问题。',baziTitle:'子平八字 · 四柱',baziDesc:'以出生时间为基础，通过天干、地支、十神与五行关系呈现传统命盘结构。',ziweiTitle:'紫微斗数',ziweiDesc:'以十二宫、星曜与四化关系构成的传统命盘体系。',heluoTitle:'河洛 · 易学',heluoDesc:'探索先天卦、后天卦与流年卦，以及卦爻之间的结构关系。',lumingTitle:'禄命法 · 古典命理',lumingDesc:'以年命、纳音及相关古典结构为基础的传统观察视角。',blindTitle:'盲派 · 互参体系',blindDesc:'作为辅助分析视角，用于比较信号与应期，不单独做成一个命盘仪表盘。',exploreChart:'探索命盘',reportLens:'纳入年度综合报告',supportLens:'作为报告辅助分析',
    annualEyebrow:'一年 · 一份有依据的报告',annualTitle:'值得认真理解的<br><em>一年。</em>',annualLead:'年度报告围绕五个生活维度，综合不同传统体系。只有在核证后的命盘中出现有意义的信号时，才会展开相应内容。',annualCta:'免费生成个人命盘',methodEyebrow:'更清晰的探索方式',methodTitle:'传统文化，<br><em>让依据清晰可见。</em>',methodLead:'LIORIN 将传统体系作为具有可追溯计算依据、并明确说明边界的文化框架呈现，不将其包装成科学确定性，也不替代专业意见。',methodPointOne:'先计算，再解读',methodPointTwo:'各个体系保留自己的语言',methodPointThree:'分歧如实呈现，不被隐藏',readMethod:'阅读方法说明',
    backHome:'返回首页',chartCreation:'创建命盘',birthEyebrow:'从基础出生资料开始',birthTitle:'你的命盘，始于<br><em>出生时间。</em>',birthLead:'准确的出生资料有助于确认历法、时区以及各传统体系使用的命盘结构。',birthPrivacy:'免费排盘无需账号或邮箱。除非你主动选择在本设备记住资料，否则不会将资料保存为个人档案。',birthFormTitle:'出生资料',dateOfBirth:'出生日期 *',timeOfBirth:'出生当地时间',sexAtBirth:'传统排盘规则使用的性别 *',timeAccuracy:'出生时间准确度 *',selectOption:'请选择',chooseTimeZone:'选择出生时区',timezoneHint:'正式计算前会根据出生地点核验时区与夏令时规则。',customTimezoneLabel:'IANA 时区 *',female:'女',male:'男',notSpecified:'不愿说明',exactTime:'准确 / 有记录',approxTime:'大约时间',unknownTime:'不清楚',preHeaven:'先天卦',laterHeaven:'后天卦',annualHexagram:'流年卦',birthLocation:'出生地点 · 城市与国家 *',timeZone:'出生时区 *',otherZone:'其他 / 输入 IANA 时区',calendarBasis:'历法基准',gregorian:'公历',rememberTitle:'在本设备记住这些资料',rememberSub:'可选。仅在本原型浏览器本地保存。',calculateChart:'生成我的命盘',sampleWorkspace:'打开示例命盘工作台 ↗',formDisclaimer:'本原型使用示意命盘数据。正式网站只会显示经过验证的计算服务返回的结果。',
    exitChart:'退出命盘',sampleData:'示意数据',editBirth:'修改出生资料',chartSystems:'命盘体系',fourPillars:'四柱',twelvePalaces:'十二宫',threeHexagrams:'三类卦象',workspaceNote:'这是视觉原型。当前显示的命盘数值为占位示意，并非真实个人计算结果。',annualReportCta:'探索年度报告',chartEyebrow:'子平八字 · 四柱',chartTitle:'你的出生结构。',chartSubtitle:'四柱通过天干、地支与五行关系呈现传统时间结构。',chartBaziEyebrow:'子平八字 · 四柱',chartBaziTitle:'你的出生结构。',chartBaziSubtitle:'四柱通过天干、地支与五行关系呈现传统时间结构。',chartZiweiEyebrow:'紫微斗数 · 十二宫',chartZiweiTitle:'十二宫位结构。',chartZiweiSubtitle:'探索宫位、星曜与传统关系。当前星曜位置仅为示意占位。',chartHeluoEyebrow:'河洛 · 易学卦象',chartHeluoTitle:'从三个层次探索卦象。',chartHeluoSubtitle:'逐爻探索先天卦、后天卦与流年卦结构。',demoNotCalculated:'演示 · 未经计算',sourceNoteTitle:'计算与来源状态',sourceNoteBody:'正式版本将在此展示计算版本、历法转换、时区处理、来源引用及引擎返回的规则 ID。浏览器不自行推断命理结果。',fourPillarsStructure:'四柱结构',tapColumn:'选择一柱查看详情',yearPillar:'年柱',monthPillar:'月柱',dayPillar:'日柱',hourPillar:'时柱',selectedPillar:'当前所选柱',fiveElements:'五行',structureOnly:'结构示意 · 占位数据',majorCycles:'大运周期',engineRequired:'需要引擎数据',twelvePalaceChart:'十二宫命盘',selectPalace:'选择宫位查看详情',palaceDetail:'宫位详情',heluoChartTitle:'河洛卦象',selectLine:'选择爻位查看详情',hexFootnote:'爻位和卦名均为示意占位，不代表引擎计算结果。',lineInterpretation:'爻位探索',evidenceStatus:'依据状态',placeholderOnly:'仅为占位内容',viewYear:'查看年份',yearChanges:'正式版本切换年份后，将重新请求对应流年命盘数据。',chartAtAGlance:'命盘摘要',birthYear:'出生年柱',dayMaster:'日主',yearElement:'年柱五行',profileBasis:'时间依据',asideQuote:'命盘是理解传统体系语言的一张地图，不是对人生的判决。',viewAnnualReport:'查看年度报告',
    backToChart:'返回命盘',annualReport:'年度报告',reportEyebrow:'聚焦一个指定年份',reportTitle:'你的这一年，<br><em>放在命盘中理解。</em>',reportLead:'围绕五个生活维度形成结构化年度文化分析，并结合不同传统体系及其能够支持的依据。',selectedYearLabel:'选择年份',oneYearPurchase:'指定一个年份 · 一次性购买',reportScope:'报告将探索什么',fiveDimensions:'五个生活维度',workTitle:'事业与发展',workDesc:'职业角色、发展模式、责任变化及有依据的阶段性变化。',financeTitle:'财务与资源',financeDesc:'传统象意中与资源、支出、稳定性和管理相关的主题。',relationshipTitle:'关系与家庭',relationshipDesc:'仅在相关命盘结构被触发时，展开关系与家庭主题。',wellbeingTitle:'身心与平衡',wellbeingDesc:'关于平衡与生活习惯的文化象意，不构成诊断或医疗预测。',peopleTitle:'人际与环境',peopleDesc:'社交背景、协作关系、人脉及环境相关主题。',conditionalDepth:'按依据决定深度',reportPrinciple:'报告不会强行平均分配篇幅。有较强依据的主题会得到更多说明；如果没有足够依据支持特别应期，也会明确说明。',yourReport:'你的年度报告',whatIncluded:'报告包含内容',includedOne:'简要原局与运限背景',includedTwo:'子平、盲派、禄命、紫微与河洛',includedThree:'跨体系共识与差异',includedFour:'依据引用与文化说明',includedFive:'个人 PDF 邮箱交付',oneTimePrice:'一次性价格',priceTbc:'待确认',continueEmail:'继续填写邮箱与订单',notSubscription:'不是自动续费订阅。每年由你自行选择是否购买报告。',
    backToPreview:'返回报告预览',orderDetails:'订单资料',deliveryEyebrow:'邮箱交付',deliveryTitle:'你希望将报告<br><em>发送到哪里？</em>',deliveryLead:'付款并完成核验后开始生成报告。报告准备完成时，我们会通过邮件发送安全访问链接。',emailAddress:'邮箱地址 *',reportLanguage:'报告语言',emailConsent:'我确认邮箱地址正确，并同意接收交付报告所需的交易通知。',termsConsent:'我已阅读文化使用说明、隐私政策与退款条款。',confirmOrder:'检查订单',checkoutDisclaimer:'仅为原型：不会实际扣款。正式上线前必须确认价格、税费、支付服务商及法律条款。',orderSummary:'订单摘要',annualProduct:'个人年度综合报告',deliveryMethod:'交付方式',emailSecureLink:'邮件 · 安全链接',billingType:'付款方式',oneTime:'一次性购买',total:'合计',summaryNote:'出生资料与报告内容不会出现在邮件主题中。',orderDemoEyebrow:'订单预览演示',orderDemoTitle:'你的交付资料<br><em>已准备好检查。</em>',orderStatus:'订单状态',awaitingPayment:'等待接入支付',deliveryEmail:'交付邮箱',reportYearLabel:'报告年份',returnReport:'返回年度报告预览',
    methodPageEyebrow:'传统文化框架 · 可追溯来源',methodPageTitle:'解读从<br><em>能够展示的依据开始。</em>',methodPageLead:'LIORIN 将计算、传统解读与现代语义表达分开。正式呈现的每一项判断，都必须能够追溯到已准入的规则与证据。',methodologyOne:'计算',methodologyOneText:'出生时间、历法转换、时区与命盘结构由引擎计算。浏览器不会重新实现或覆盖这些规则。',methodologyTwo:'解读',methodologyTwoText:'子平、盲派、禄命、紫微与河洛分别分析后再进行互参，共识与分歧均保留。',methodologyThree:'语义映射',methodologyThreeText:'将传统概念映射为清晰的现代语言，不改变底层规则，也不宣称具有科学确定性。',methodologyFour:'证据与边界',methodologyFourText:'缺乏依据或尚未解决的判断不会作为结论呈现。文化解读不构成医疗、财务、法律或关系建议。',footerTagline:'以审慎的方式探索传统体系。',privacy:'隐私',terms:'条款',contact:'联系',footerDisclaimer:'传统文化解读仅供教育与自我反思，不替代专业意见。',
    errorBirth:'请填写所有必填出生资料。如果时区不确定，请选择最接近的已知时区，并在正式计算前确认。',errorZone:'请选择出生时区，或填写有效的 IANA 时区标识。',errorEmail:'请输入有效邮箱，并勾选两项必要确认。',orderReady:'已为 {email} 准备订单摘要。没有发生扣款。',chartCreated:'已打开命盘工作台。当前命盘数值为示意占位数据。',yearChanged:'当前选择的报告年份：{year}。',motionPaused:'已暂停动画。',motionResumed:'已恢复动画。',
    timeUnknown:'时间不详',langEn:'English',langHans:'简体中文',langHant:'繁體中文',elementWood:'木',elementFire:'火',elementEarth:'土',elementMetal:'金',elementWater:'水',cycleSpan:'十年大运',cycleIndex:'大运 {n}',heluoBandEyebrow:'河圖 · HETU',heluoBandTitle:'时间、结构与对应关系。',heluoBandText:'原始河图图像保持不变，动效仅作用于外层图像元素。',glanceDayMasterValue:'戊 · 土',glanceYearElementValue:'土',glanceProfileBasis:'出生当地时间',coverTitle:'个人<br><em>年度综合分析</em>',coverSub:'五种传统视角',sheetTitle:'五个维度，<br><em>聚焦一年。</em>',sheetWork:'事业与发展',sheetFinance:'财务与资源',sheetRelationships:'关系与家庭',sheetWellbeing:'身心与平衡',sheetPeople:'人际与环境',
    pillarYearTitle:'年柱 · 甲子',pillarYearText:'年柱在传统上与早年环境、家族背景及更广阔的社会背景相关。此处为占位示意内容。',pillarMonthTitle:'月柱 · 丙寅',pillarMonthText:'月柱通常结合季节背景、家庭环境与命盘结构来解读。此处为占位示意内容。',pillarDayTitle:'日柱 · 戊辰',pillarDayText:'日柱确立日主，是解读自身与夫妻宫的传统基础。此处为占位示意内容。',pillarHourTitle:'时柱 · 庚午',pillarHourText:'时柱在传统上与晚年发展、志向及子息相关。此处为占位示意内容。',
    palaceLifeTitle:'命宫',palaceLifeText:'命宫是观察整张命盘核心结构的传统起点。此处星曜与关系均为占位示意。',palaceSiblingsTitle:'兄弟宫',palaceSiblingsText:'传统上与兄弟姐妹、同辈及亲近的横向关系相关。仅为占位内容。',palacePartnershipTitle:'夫妻宫',palacePartnershipText:'传统上与伴侣及关系结构相关。仅为占位内容。',palaceChildrenTitle:'子女宫',palaceChildrenText:'传统上与子息、创作输出及相关主题有关。仅为占位内容。',palaceParentsTitle:'父母宫',palaceParentsText:'传统上与父母、长辈及承继背景相关。仅为占位内容。',palaceWealthTitle:'财帛宫',palaceWealthText:'传统上与资源、收入及财务管理相关。仅为占位内容。',palaceFortuneTitle:'福德宫',palaceFortuneText:'传统上与内在生活、享受及精神资源相关。仅为占位内容。',palacePropertyTitle:'田宅宫',palacePropertyText:'传统上与家宅、不动产及居住环境相关。仅为占位内容。',palaceCareerTitle:'官禄宫',palaceCareerText:'传统上与事业、社会角色及职业方向相关。仅为占位内容。',palaceWellbeingTitle:'疾厄宫',palaceWellbeingText:'传统上与活力及身心象征相关。不构成医疗建议。',palaceTravelTitle:'迁移宫',palaceTravelText:'传统上与出行、外部环境及离家发展相关。仅为占位内容。',palaceFriendsTitle:'交友宫',palaceFriendsText:'传统上与朋友、人脉及社会协作相关。仅为占位内容。',palaceBodyTitle:'身宫',palaceBodyText:'部分紫微流派使用的辅助宫位。仅为占位内容。',
    hexPreType:'先天卦',hexPreName:'乾 · Qian',hexPreMeaning:'乾卦 · 示意内容',hexPostType:'后天卦',hexPostName:'坤 · Kun',hexPostMeaning:'坤卦 · 示意内容',hexAnnualType:'流年卦',hexAnnualName:'水火既济 · Ji Ji',hexAnnualMeaning:'既济卦 · 示意内容',lineLabel:'第 {n} 爻',lineUpper:'上位',lineBeginning:'初位',linePosition:'第 {n} 位',lineDefaultText:'选择爻位后查看其在卦象中的位置。正式版本的爻位、动爻状态与来源依据均由河洛引擎返回。'
  },
  'zh-Hant': {
    demoBanner:'互動原型 · 命盤資料為示意內容',navTraditions:'命理體系',navMethod:'方法與依據',navAnnual:'年度報告',navStart:'開始排盤',
    heroEyebrow:'傳統體系 · 個人命盤 · 文化解讀',heroTitle:'以更深入的方式<br>理解你的<em>個人命盤結構。</em>',heroLead:'透過中國傳統命理體系探索出生資訊所形成的命盤結構。計算依據清晰，解讀保持克制，並提供可追溯的文化來源。',heroCta:'探索個人命盤',heroSecondary:'了解傳統體系',heroNote:'免費個人排盤 · 無需註冊 · 年度報告獨立購買',motionPause:'暫停動畫',motionPlay:'繼續動畫',
    trustOne:'透明的排盤基礎',trustOneSub:'出生資料、時區與計算背景',trustTwo:'各體系獨立呈現',trustTwoSub:'保留各自的方法與證據',trustThree:'聚焦年度報告',trustThreeSub:'指定年份，只呈現有依據的主題',
    traditionsEyebrow:'五種視角 · 一張個人命盤',traditionsTitle:'傳統體系，是一種<br><em>觀察結構的方式。</em>',traditionsIntro:'先了解構成命盤的不同體系。每個體系獨立探索，再查看它們之間的共識、差異與尚未解決的問題。',baziTitle:'子平八字 · 四柱',baziDesc:'以出生時間為基礎，透過天干、地支、十神與五行關係呈現傳統命盤結構。',ziweiTitle:'紫微斗數',ziweiDesc:'以十二宮、星曜與四化關係構成的傳統命盤體系。',heluoTitle:'河洛 · 易學',heluoDesc:'探索先天卦、後天卦與流年卦，以及卦爻之間的結構關係。',lumingTitle:'祿命法 · 古典命理',lumingDesc:'以年命、納音及相關古典結構為基礎的傳統觀察視角。',blindTitle:'盲派 · 互參體系',blindDesc:'作為輔助分析視角，用於比較訊號與應期，不單獨做成一個命盤儀表盤。',exploreChart:'探索命盤',reportLens:'納入年度綜合報告',supportLens:'作為報告輔助分析',
    annualEyebrow:'一年 · 一份有依據的報告',annualTitle:'值得認真理解的<br><em>一年。</em>',annualLead:'年度報告圍繞五個生活維度，綜合不同傳統體系。只有在核證後的命盤中出現有意義的訊號時，才會展開相應內容。',annualCta:'免費生成個人命盤',methodEyebrow:'更清晰的探索方式',methodTitle:'傳統文化，<br><em>讓依據清晰可見。</em>',methodLead:'LIORIN 將傳統體系作為具有可追溯計算依據、並明確說明邊界的文化框架呈現，不將其包裝成科學確定性，也不替代專業意見。',methodPointOne:'先計算，再解讀',methodPointTwo:'各個體系保留自己的語言',methodPointThree:'分歧如實呈現，不被隱藏',readMethod:'閱讀方法說明',
    backHome:'返回首頁',chartCreation:'建立命盤',birthEyebrow:'從基礎出生資料開始',birthTitle:'你的命盤，始於<br><em>出生時間。</em>',birthLead:'準確的出生資料有助於確認曆法、時區以及各傳統體系使用的命盤結構。',birthPrivacy:'免費排盤無需帳號或電子郵件。除非你主動選擇在本裝置記住資料，否則不會將資料儲存為個人檔案。',birthFormTitle:'出生資料',dateOfBirth:'出生日期 *',timeOfBirth:'出生當地時間',sexAtBirth:'傳統排盤規則使用的性別 *',timeAccuracy:'出生時間準確度 *',selectOption:'請選擇',chooseTimeZone:'選擇出生時區',timezoneHint:'正式計算前會根據出生地點核驗時區與夏令時間規則。',customTimezoneLabel:'IANA 時區 *',female:'女',male:'男',notSpecified:'不願說明',exactTime:'準確 / 有紀錄',approxTime:'大約時間',unknownTime:'不清楚',preHeaven:'先天卦',laterHeaven:'後天卦',annualHexagram:'流年卦',birthLocation:'出生地點 · 城市與國家 *',timeZone:'出生時區 *',otherZone:'其他 / 輸入 IANA 時區',calendarBasis:'曆法基準',gregorian:'公曆',rememberTitle:'在本裝置記住這些資料',rememberSub:'可選。僅在本原型瀏覽器本機儲存。',calculateChart:'生成我的命盤',sampleWorkspace:'開啟示例命盤工作台 ↗',formDisclaimer:'本原型使用示意命盤資料。正式網站只會顯示經過驗證的計算服務返回的結果。',
    exitChart:'退出命盤',sampleData:'示意資料',editBirth:'修改出生資料',chartSystems:'命盤體系',fourPillars:'四柱',twelvePalaces:'十二宮',threeHexagrams:'三類卦象',workspaceNote:'這是視覺原型。當前顯示的命盤數值為佔位示意，並非真實個人計算結果。',annualReportCta:'探索年度報告',chartEyebrow:'子平八字 · 四柱',chartTitle:'你的出生結構。',chartSubtitle:'四柱透過天干、地支與五行關係呈現傳統時間結構。',chartBaziEyebrow:'子平八字 · 四柱',chartBaziTitle:'你的出生結構。',chartBaziSubtitle:'四柱透過天干、地支與五行關係呈現傳統時間結構。',chartZiweiEyebrow:'紫微斗數 · 十二宮',chartZiweiTitle:'十二宮位結構。',chartZiweiSubtitle:'探索宮位、星曜與傳統關係。當前星曜位置僅為示意佔位。',chartHeluoEyebrow:'河洛 · 易學卦象',chartHeluoTitle:'從三個層次探索卦象。',chartHeluoSubtitle:'逐爻探索先天卦、後天卦與流年卦結構。',demoNotCalculated:'演示 · 未經計算',sourceNoteTitle:'計算與來源狀態',sourceNoteBody:'正式版本將在此展示計算版本、曆法轉換、時區處理、來源引用及引擎返回的規則 ID。瀏覽器不自行推斷命理結果。',fourPillarsStructure:'四柱結構',tapColumn:'選擇一柱查看詳情',yearPillar:'年柱',monthPillar:'月柱',dayPillar:'日柱',hourPillar:'時柱',selectedPillar:'當前所選柱',fiveElements:'五行',structureOnly:'結構示意 · 佔位資料',majorCycles:'大運週期',engineRequired:'需要引擎資料',twelvePalaceChart:'十二宮命盤',selectPalace:'選擇宮位查看詳情',palaceDetail:'宮位詳情',heluoChartTitle:'河洛卦象',selectLine:'選擇爻位查看詳情',hexFootnote:'爻位和卦名均為示意佔位，不代表引擎計算結果。',lineInterpretation:'爻位探索',evidenceStatus:'依據狀態',placeholderOnly:'僅為佔位內容',viewYear:'查看年份',yearChanges:'正式版本切換年份後，將重新請求對應流年命盤資料。',chartAtAGlance:'命盤摘要',birthYear:'出生年柱',dayMaster:'日主',yearElement:'年柱五行',profileBasis:'時間依據',asideQuote:'命盤是理解傳統體系語言的一張地圖，不是對人生的判決。',viewAnnualReport:'查看年度報告',
    backToChart:'返回命盤',annualReport:'年度報告',reportEyebrow:'聚焦一個指定年份',reportTitle:'你的這一年，<br><em>放在命盤中理解。</em>',reportLead:'圍繞五個生活維度形成結構化年度文化分析，並結合不同傳統體系及其能夠支持的依據。',selectedYearLabel:'選擇年份',oneYearPurchase:'指定一個年份 · 一次性購買',reportScope:'報告將探索什麼',fiveDimensions:'五個生活維度',workTitle:'事業與發展',workDesc:'職業角色、發展模式、責任變化及有依據的階段性變化。',financeTitle:'財務與資源',financeDesc:'傳統象意中與資源、支出、穩定性和管理相關的主題。',relationshipTitle:'關係與家庭',relationshipDesc:'僅在相關命盤結構被觸發時，展開關係與家庭主題。',wellbeingTitle:'身心與平衡',wellbeingDesc:'關於平衡與生活習慣的文化象意，不構成診斷或醫療預測。',peopleTitle:'人際與環境',peopleDesc:'社交背景、協作關係、人脈及環境相關主題。',conditionalDepth:'按依據決定深度',reportPrinciple:'報告不會強行平均分配篇幅。有較強依據的主題會得到更多說明；如果沒有足夠依據支持特別應期，也會明確說明。',yourReport:'你的年度報告',whatIncluded:'報告包含內容',includedOne:'簡要原局與運限背景',includedTwo:'子平、盲派、祿命、紫微與河洛',includedThree:'跨體系共識與差異',includedFour:'依據引用與文化說明',includedFive:'個人 PDF 電子郵件交付',oneTimePrice:'一次性價格',priceTbc:'待確認',continueEmail:'繼續填寫郵箱與訂單',notSubscription:'不是自動續費訂閱。每年由你自行選擇是否購買報告。',
    backToPreview:'返回報告預覽',orderDetails:'訂單資料',deliveryEyebrow:'電子郵件交付',deliveryTitle:'你希望將報告<br><em>寄送到哪裡？</em>',deliveryLead:'付款並完成核驗後開始生成報告。報告準備完成時，我們會透過電子郵件傳送安全存取連結。',emailAddress:'電子郵件地址 *',reportLanguage:'報告語言',emailConsent:'我確認電子郵件地址正確，並同意接收交付報告所需的交易通知。',termsConsent:'我已閱讀文化使用說明、隱私政策與退款條款。',confirmOrder:'檢查訂單',checkoutDisclaimer:'僅為原型：不會實際扣款。正式上線前必須確認價格、稅費、支付服務商及法律條款。',orderSummary:'訂單摘要',annualProduct:'個人年度綜合報告',deliveryMethod:'交付方式',emailSecureLink:'郵件 · 安全連結',billingType:'付款方式',oneTime:'一次性購買',total:'合計',summaryNote:'出生資料與報告內容不會出現在電子郵件主旨中。',orderDemoEyebrow:'訂單預覽演示',orderDemoTitle:'你的交付資料<br><em>已準備好檢查。</em>',orderStatus:'訂單狀態',awaitingPayment:'等待接入支付',deliveryEmail:'交付郵箱',reportYearLabel:'報告年份',returnReport:'返回年度報告預覽',
    methodPageEyebrow:'傳統文化框架 · 可追溯來源',methodPageTitle:'解讀從<br><em>能夠展示的依據開始。</em>',methodPageLead:'LIORIN 將計算、傳統解讀與現代語義表達分開。正式呈現的每一項判斷，都必須能夠追溯到已准入的規則與證據。',methodologyOne:'計算',methodologyOneText:'出生時間、曆法轉換、時區與命盤結構由引擎計算。瀏覽器不會重新實作或覆蓋這些規則。',methodologyTwo:'解讀',methodologyTwoText:'子平、盲派、祿命、紫微與河洛分別分析後再進行互參，共識與分歧均保留。',methodologyThree:'語義映射',methodologyThreeText:'將傳統概念映射為清晰的現代語言，不改變底層規則，也不宣稱具有科學確定性。',methodologyFour:'證據與邊界',methodologyFourText:'缺乏依據或尚未解決的判斷不會作為結論呈現。文化解讀不構成醫療、財務、法律或關係建議。',footerTagline:'以審慎的方式探索傳統體系。',privacy:'隱私',terms:'條款',contact:'聯絡',footerDisclaimer:'傳統文化解讀僅供教育與自我反思，不取代專業意見。',
    errorBirth:'請填寫所有必填出生資料。如果時區不確定，請選擇最接近的已知時區，並在正式計算前確認。',errorZone:'請選擇出生時區，或填寫有效的 IANA 時區識別碼。',errorEmail:'請輸入有效電子郵件，並勾選兩項必要確認。',orderReady:'已為 {email} 準備訂單摘要。沒有發生扣款。',chartCreated:'已開啟命盤工作台。當前命盤數值為示意佔位資料。',yearChanged:'當前選擇的報告年份：{year}。',motionPaused:'已暫停動畫。',motionResumed:'已恢復動畫。',
    timeUnknown:'時間不詳',langEn:'English',langHans:'简体中文',langHant:'繁體中文',elementWood:'木',elementFire:'火',elementEarth:'土',elementMetal:'金',elementWater:'水',cycleSpan:'十年大運',cycleIndex:'大運 {n}',heluoBandEyebrow:'河圖 · HETU',heluoBandTitle:'時間、結構與對應關係。',heluoBandText:'原始河圖圖像保持不變，動效僅作用於外層圖像元素。',glanceDayMasterValue:'戊 · 土',glanceYearElementValue:'土',glanceProfileBasis:'出生當地時間',coverTitle:'個人<br><em>年度綜合分析</em>',coverSub:'五種傳統視角',sheetTitle:'五個維度，<br><em>聚焦一年。</em>',sheetWork:'事業與發展',sheetFinance:'財務與資源',sheetRelationships:'關係與家庭',sheetWellbeing:'身心與平衡',sheetPeople:'人際與環境',
    pillarYearTitle:'年柱 · 甲子',pillarYearText:'年柱在傳統上與早年環境、家族背景及更廣闊的社會背景相關。此處為佔位示意內容。',pillarMonthTitle:'月柱 · 丙寅',pillarMonthText:'月柱通常結合季節背景、家庭環境與命盤結構來解讀。此處為佔位示意內容。',pillarDayTitle:'日柱 · 戊辰',pillarDayText:'日柱確立日主，是解讀自身與夫妻宮的傳統基礎。此處為佔位示意內容。',pillarHourTitle:'時柱 · 庚午',pillarHourText:'時柱在傳統上與晚年發展、志向及子息相關。此處為佔位示意內容。',
    palaceLifeTitle:'命宮',palaceLifeText:'命宮是觀察整張命盤核心結構的傳統起點。此處星曜與關係均為佔位示意。',palaceSiblingsTitle:'兄弟宮',palaceSiblingsText:'傳統上與兄弟姐妹、同輩及親近的橫向關係相關。僅為佔位內容。',palacePartnershipTitle:'夫妻宮',palacePartnershipText:'傳統上與伴侶及關係結構相關。僅為佔位內容。',palaceChildrenTitle:'子女宮',palaceChildrenText:'傳統上與子息、創作輸出及相關主題有關。僅為佔位內容。',palaceParentsTitle:'父母宮',palaceParentsText:'傳統上與父母、長輩及承繼背景相關。僅為佔位內容。',palaceWealthTitle:'財帛宮',palaceWealthText:'傳統上與資源、收入及財務管理相關。僅為佔位內容。',palaceFortuneTitle:'福德宮',palaceFortuneText:'傳統上與內在生活、享受及精神資源相關。僅為佔位內容。',palacePropertyTitle:'田宅宮',palacePropertyText:'傳統上與家宅、不動產及居住環境相關。僅為佔位內容。',palaceCareerTitle:'官祿宮',palaceCareerText:'傳統上與事業、社會角色及職業方向相關。僅為佔位內容。',palaceWellbeingTitle:'疾厄宮',palaceWellbeingText:'傳統上與活力及身心象徵相關。不構成醫療建議。',palaceTravelTitle:'遷移宮',palaceTravelText:'傳統上與出行、外部環境及離家發展相關。僅為佔位內容。',palaceFriendsTitle:'交友宮',palaceFriendsText:'傳統上與朋友、人脈及社會協作相關。僅為佔位內容。',palaceBodyTitle:'身宮',palaceBodyText:'部分紫微流派使用的輔助宮位。僅為佔位內容。',
    hexPreType:'先天卦',hexPreName:'乾 · Qian',hexPreMeaning:'乾卦 · 示意內容',hexPostType:'後天卦',hexPostName:'坤 · Kun',hexPostMeaning:'坤卦 · 示意內容',hexAnnualType:'流年卦',hexAnnualName:'水火既濟 · Ji Ji',hexAnnualMeaning:'既濟卦 · 示意內容',lineLabel:'第 {n} 爻',lineUpper:'上位',lineBeginning:'初位',linePosition:'第 {n} 位',lineDefaultText:'選擇爻位後查看其在卦象中的位置。正式版本的爻位、動爻狀態與來源依據均由河洛引擎返回。'
  }
};

let locale = 'en';
let profile = null;
let selectedYear = new Date().getFullYear();
let selectedReportYear = selectedYear;
let activeChart = 'bazi';
let activeHex = 'pre';
let activeLine = 6;
let activePillar = 'year';
let activePalace = '命宮';

const VIEWS = ['home','birth','workspace','report','checkout','order','methodology'];
const KNOWN_ZONES = ['Europe/London','America/New_York','America/Los_Angeles','Asia/Shanghai','Asia/Hong_Kong','Europe/Paris','Australia/Sydney'];
const PILLAR_KEYS = {year:'Year',month:'Month',day:'Day',hour:'Hour'};
const PALACE_KEYS = {'命宮':'Life','兄弟':'Siblings','夫妻':'Partnership','子女':'Children','父母':'Parents','財帛':'Wealth','福德':'Fortune','田宅':'Property','官祿':'Career','疾厄':'Wellbeing','遷移':'Travel','交友':'Friends','身宮':'Body'};
// Line arrays run bottom (line 1) to top (line 6). Ji Ji: water above fire = yang, yin, yang, yin, yang, yin from the bottom.
const hexData = {
  pre:{symbol:'☰',lines:[1,1,1,1,1,1]},
  post:{symbol:'☷',lines:[0,0,0,0,0,0]},
  annual:{symbol:'䷾',lines:[1,0,1,0,1,0]}
};

function t(key){return (translations[locale]&&translations[locale][key])||translations.en[key]||key;}
function localeTag(){return locale==='zh-Hans'?'zh-CN':locale==='zh-Hant'?'zh-TW':'en-US';}
function reportLanguageName(lang){return lang==='zh-Hans'?t('langHans'):lang==='zh-Hant'?t('langHant'):t('langEn');}
function isValidZone(zone){if(!zone||/\s/.test(zone))return false;try{new Intl.DateTimeFormat('en-US',{timeZone:zone});return true;}catch(_){return false;}}

function applyLanguage(next){
  locale=translations[next]?next:'en';
  document.documentElement.lang=locale==='zh-Hans'?'zh-CN':locale==='zh-Hant'?'zh-TW':'en';
  $$('[data-i18n]').forEach(el=>{el.innerHTML=t(el.dataset.i18n);});
  $('#languageSelect').value=locale;
  $('#reportLocale').value=locale;
  renderProfileSummary();
  renderYearDisplays();
  setChart(activeChart);
  renderPillar(activePillar);
  renderPalace(activePalace);
  renderHex();
  updateMotionControl();
}
function updateMotionControl(){
  const paused=document.body.classList.contains('motion-paused');
  const label=t(paused?'motionPlay':'motionPause');
  $('.motion-toggle [data-i18n]').textContent=label;
  $('#motionToggle').setAttribute('aria-label',label);
  $('#motionToggle').setAttribute('aria-pressed',String(!paused));
}

function showView(id,push=true){
  if(!VIEWS.includes(id))id='home';
  $$('.view').forEach(v=>v.classList.toggle('view-active',v.id===id));
  window.scrollTo({top:0,behavior:'auto'});
  const heading=$(`#${id} h1`)||$(`#${id} h2`);
  if(heading){heading.setAttribute('tabindex','-1');heading.focus({preventScroll:true});}
  if(id==='report')renderReportYear();
  if(id==='checkout')updateOrderSummary();
  if(push){const hash=`#${id}`;if(location.hash!==hash)history.pushState({view:id},'',hash);}
}
window.addEventListener('popstate',()=>{const id=location.hash.slice(1);showView(VIEWS.includes(id)?id:'home',false);});
window.addEventListener('hashchange',()=>{const id=location.hash.slice(1);if(VIEWS.includes(id)&&!$(`#${id}`).classList.contains('view-active'))showView(id,false);});

function showToast(message){const el=$('#toast');el.textContent=message;el.classList.add('show');clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>el.classList.remove('show'),2600);}
function pulse(el){if(!el||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;el.classList.remove('refresh');void el.offsetWidth;el.classList.add('refresh');}

function renderProfileSummary(){
  if(!profile)return;
  const date=new Date(`${profile.date}T12:00:00`);
  const dateText=new Intl.DateTimeFormat(localeTag(),{day:'numeric',month:'long',year:'numeric'}).format(date);
  $('#workspaceBirth').textContent=`${dateText} · ${profile.time||t('timeUnknown')}`;
  $('#workspacePlace').textContent=profile.place;
}
function renderYearDisplays(){
  $('#selectedYear').textContent=selectedYear;
  $('#reportYear').textContent=selectedReportYear;
  $('#summaryYear').textContent=`${selectedReportYear} · ${reportLanguageName($('#reportLocale').value)}`;
  $('#orderYearText').textContent=selectedReportYear;
}
function renderReportYear(){renderYearDisplays();}
function updateOrderSummary(){renderYearDisplays();updateOrderEmail();}
function changeYear(delta){selectedYear=Math.max(1900,Math.min(2100,selectedYear+delta));selectedReportYear=selectedYear;renderYearDisplays();showToast(t('yearChanged').replace('{year}',selectedYear));}
function changeReportYear(delta){selectedReportYear=Math.max(1900,Math.min(2100,selectedReportYear+delta));selectedYear=selectedReportYear;renderYearDisplays();showToast(t('yearChanged').replace('{year}',selectedReportYear));}

function setChart(name){
  activeChart=name;
  $$('.system-nav').forEach(b=>{const on=b.dataset.chart===name;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on));});
  $$('.chart-panel').forEach(p=>{p.classList.toggle('active-chart',p.id===`chart-${name}`);p.hidden=p.id!==`chart-${name}`;});
  const labels={bazi:['chartBaziEyebrow','chartBaziTitle','chartBaziSubtitle'],ziwei:['chartZiweiEyebrow','chartZiweiTitle','chartZiweiSubtitle'],heluo:['chartHeluoEyebrow','chartHeluoTitle','chartHeluoSubtitle']};
  $('#chartEyebrow').textContent=t(labels[name][0]);
  $('#chartTitle').textContent=t(labels[name][1]);
  $('#chartSubtitle').textContent=t(labels[name][2]);
}
function renderPillar(key){
  activePillar=key;
  const name=PILLAR_KEYS[key]||'Year';
  $('#pillarDetailTitle').textContent=t(`pillar${name}Title`);
  $('#pillarDetailText').textContent=t(`pillar${name}Text`);
  const order=['year','month','day','hour'].indexOf(key)+1;
  $('.detail-card-label span+span').textContent=`0${order} / 04`;
  $$('.pillar-card').forEach(b=>{const on=b.dataset.pillar===key;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on));});
  if(!window.__booting)pulse($('#pillarDetail'));
}
function renderPalace(key){
  activePalace=key;
  const name=PALACE_KEYS[key]||'Life';
  $('#palaceTitle').textContent=t(`palace${name}Title`);
  $('#palaceText').textContent=t(`palace${name}Text`);
  $$('.palace-cell').forEach(b=>{const on=b.dataset.palace===key;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on));});
  if(!window.__booting)pulse($('.palace-detail'));
}
function renderHex(){
  const data=hexData[activeHex];
  const name=activeHex==='pre'?'Pre':activeHex==='post'?'Post':'Annual';
  $('#hexType').textContent=t(`hex${name}Type`);
  $('#hexCode').textContent=activeHex==='annual'?`DEMO / ${selectedYear}`:(activeHex==='pre'?'01 / 64':'02 / 64');
  $('#hexName').textContent=t(`hex${name}Name`);
  $('#hexMeaning').textContent=t(`hex${name}Meaning`);
  $('.hex-symbol').textContent=data.symbol;
  $$('.hex-line').forEach(button=>{
    const num=Number(button.dataset.line);
    const line=data.lines[num-1];
    $('i',button).className=line?'yang':'yin';
    const on=num===activeLine;
    button.classList.toggle('active',on);
    button.setAttribute('aria-pressed',String(on));
  });
  renderLine();
}
function renderLine(){
  const lineName=activeLine===6?t('lineUpper'):activeLine===1?t('lineBeginning'):t('linePosition').replace('{n}',activeLine);
  $('#lineTitle').textContent=`${t('lineLabel').replace('{n}',activeLine)} · ${lineName}`;
  $('#lineText').textContent=t('lineDefaultText');
  $$('.hex-line').forEach(b=>{const on=Number(b.dataset.line)===activeLine;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on));});
  if(!window.__booting)pulse($('.hex-detail'));
}
function updateOrderEmail(){const email=$('#reportEmail').value.trim();$('#orderEmailText').textContent=email||'—';}

function fillBirthForm(p){
  $('#birthDate').value=p.date;
  $('#birthTime').value=p.time||'';
  $('#birthTime').required=p.accuracy!=='unknown';
  $('#birthPlace').value=p.place;
  if(KNOWN_ZONES.includes(p.zone)){
    $('#birthTimezone').value=p.zone;
    $('#customTimezoneField').classList.add('hidden');
    $('#customTimezone').required=false;
  }else{
    $('#birthTimezone').value='other';
    $('#customTimezoneField').classList.remove('hidden');
    $('#customTimezone').value=p.zone;
    $('#customTimezone').required=true;
  }
  $('#birthSex').value=p.sex;
  $('#timeAccuracy').value=p.accuracy;
}

// Navigation actions
$$('[data-action]').forEach(button=>button.addEventListener('click',()=>{
  const action=button.dataset.action;
  if(action==='start-chart'){showView('birth');}
  else if(action==='home'){showView('home');}
  else if(action==='workspace'){showView('workspace');}
  else if(action==='edit-birth'){if(profile)fillBirthForm(profile);showView('birth');}
  else if(action==='report-preview'){selectedReportYear=selectedYear;showView('report');}
  else if(action==='checkout'){showView('checkout');}
}));
$('#languageSelect').addEventListener('change',e=>applyLanguage(e.target.value));
$$('a.brand[href="#home"]').forEach(link=>link.addEventListener('click',e=>{e.preventDefault();showView('home');}));
$$('a[href="#methodology"]').forEach(link=>link.addEventListener('click',e=>{e.preventDefault();showView('methodology');}));
$$('a[href="#traditions"],a[href="#method"],a[href="#annual"]').forEach(link=>link.addEventListener('click',e=>{if(!$('#home').classList.contains('view-active')){e.preventDefault();const target=link.getAttribute('href').slice(1);showView('home');setTimeout(()=>document.getElementById(target)?.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'}),40);}}));
$('#motionToggle').addEventListener('click',()=>{const paused=document.body.classList.toggle('motion-paused');updateMotionControl();showToast(t(paused?'motionPaused':'motionResumed'));});
$('#birthTimezone').addEventListener('change',()=>{const custom=$('#birthTimezone').value==='other';$('#customTimezoneField').classList.toggle('hidden',!custom);$('#customTimezone').required=custom;});
$('#timeAccuracy').addEventListener('change',()=>{const unknown=$('#timeAccuracy').value==='unknown';$('#birthTime').required=!unknown;if(unknown)$('#birthTime').value='';});
$('#birthForm').addEventListener('submit',e=>{
  e.preventDefault();
  const error=$('#birthError');error.hidden=true;
  const selectedZone=$('#birthTimezone').value;
  const zone=selectedZone==='other'?$('#customTimezone').value.trim():selectedZone;
  if(!isValidZone(zone)){error.textContent=t('errorZone');error.hidden=false;return;}
  const data={date:$('#birthDate').value,time:$('#birthTime').value,place:$('#birthPlace').value.trim(),zone,sex:$('#birthSex').value,accuracy:$('#timeAccuracy').value};
  if(!data.date||(!data.time&&data.accuracy!=='unknown')||!data.place||!data.sex){error.textContent=t('errorBirth');error.hidden=false;return;}
  profile=data;
  if($('#rememberProfile').checked){localStorage.setItem('liorin-a-demo-profile',JSON.stringify(data));}else{localStorage.removeItem('liorin-a-demo-profile');}
  renderProfileSummary();showView('workspace');showToast(t('chartCreated'));
});
$('#sampleChart').addEventListener('click',()=>{profile={date:'1988-06-15',time:'08:30',place:'London, United Kingdom',zone:'Europe/London',sex:'unspecified',accuracy:'exact',sample:true};renderProfileSummary();showView('workspace');showToast(t('chartCreated'));});
$('#sourceToggle').addEventListener('click',()=>{const note=$('#sourceNote');note.hidden=!note.hidden;$('#sourceToggle').setAttribute('aria-expanded',String(!note.hidden));});
$$('.system-nav').forEach(button=>button.addEventListener('click',()=>setChart(button.dataset.chart)));
$$('.pillar-card').forEach(button=>button.addEventListener('click',()=>renderPillar(button.dataset.pillar)));
$$('.palace-cell').forEach(button=>button.addEventListener('click',()=>renderPalace(button.dataset.palace)));
$$('.heluo-switcher button').forEach(button=>button.addEventListener('click',()=>{activeHex=button.dataset.hex;$$('.heluo-switcher button').forEach(b=>{const on=b===button;b.classList.toggle('active',on);b.setAttribute('aria-selected',String(on));});activeLine=6;renderHex();}));
$$('.hex-line').forEach(button=>button.addEventListener('click',()=>{activeLine=Number(button.dataset.line);renderLine();}));
$$('.cycle-item').forEach((button,i)=>{button.setAttribute('aria-label',t('cycleIndex').replace('{n}',i+1));button.addEventListener('click',()=>{$$('.cycle-item').forEach(b=>{const on=b===button;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on));});});});
$('#yearPrev').addEventListener('click',()=>changeYear(-1));$('#yearNext').addEventListener('click',()=>changeYear(1));$('#reportYearPrev').addEventListener('click',()=>changeReportYear(-1));$('#reportYearNext').addEventListener('click',()=>changeReportYear(1));
$('#checkoutForm').addEventListener('submit',e=>{
  e.preventDefault();
  const email=$('#reportEmail').value.trim();
  const valid=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if(!valid||!$('#emailConsent').checked||!$('#termsConsent').checked){$('#checkoutError').textContent=t('errorEmail');$('#checkoutError').hidden=false;return;}
  $('#checkoutError').hidden=true;
  updateOrderEmail();
  $('#orderSummaryText').textContent=t('orderReady').replace('{email}',email);
  showView('order');
  showToast(t('orderReady').replace('{email}',email));
});
$('#reportEmail').addEventListener('input',updateOrderEmail);
$('#reportLocale').addEventListener('change',renderYearDisplays);

// A saved profile is opt-in and remains local to this prototype only.
try{
  const saved=localStorage.getItem('liorin-a-demo-profile');
  if(saved){
    const p=JSON.parse(saved);
    if(p&&p.date&&p.place){profile=p;fillBirthForm(p);$('#rememberProfile').checked=true;}
  }
}catch(_){localStorage.removeItem('liorin-a-demo-profile');}

if($('#timeAccuracy').value==='unknown')$('#birthTime').required=false;
window.__booting=true;
renderProfileSummary();renderYearDisplays();renderPillar('year');renderPalace('命宮');renderHex();setChart('bazi');applyLanguage('en');
window.__booting=false;

// Gentle scroll-in reveal for landing sections; content stays visible without JS or with reduced motion.
if('IntersectionObserver' in window&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  const revealTargets=['.trust-strip','.section-heading','.tradition-card','.annual-copy','.annual-preview','.method-left','.method-right'].flatMap(sel=>$$(sel,$('#home')));
  const io=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('revealed');io.unobserve(entry.target);}});},{threshold:.12});
  revealTargets.forEach((el,i)=>{el.classList.add('reveal');el.style.transitionDelay=`${Math.min(i%5,4)*60}ms`;io.observe(el);});
}
const initialView=location.hash.slice(1);
if(VIEWS.includes(initialView)&&initialView!=='home')showView(initialView,false);