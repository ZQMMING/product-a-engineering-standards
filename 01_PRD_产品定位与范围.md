# A 产品需求规范 PRD
状态：DRAFT

## 用户与价值
目标：对 Chinese metaphysics / Chinese cultural traditions / Bazi / Zi Wei Dou Shu / I Ching 感兴趣的欧美用户，包括初学者与专业研究者。文化学习与可探索的盘面优先，拒绝“AI 算命速成”定位。
承诺：用户能够免费得到透明、可解释的排盘；付费获得指定年度、可追溯依据的结构化文化分析。
不承诺：未来必然事件、疾病诊断、投资收益、关系结局、科学预测准确率。

## 核心旅程
Landing -> Birth details -> Validation & calculation -> Interactive chart workspace -> Select report year -> Preview actual report scope -> Email + checkout -> Paid order verified -> Report generation -> QA gate -> Email delivery -> Status/retry/support.
免费排盘无需账号；出生信息必须输入且经后端校验。已登录但无出生信息不得生成个人盘；已付款但无有效出生信息不得生成报告。
访客关闭页面后，未经明确同意不得持久保存个人出生信息用于营销。

## 免费能力
八字四柱、大运基础结构、紫微盘、河洛先天/后天/流年卦等：只展示已获得 PRODUCTION_ADMITTED 的能力。互动探索十神/藏干/宫位/星曜/四化/卦爻、时间选择与证据说明。免费功能不以强制注册为条件；未准入模块明确标注不可用，不伪造演示结果。

## 付费年度报告
一个出生档案 × 一个指定流年 × 一个报告版本。稳定维度：职业/发展、财务/资源、关系/家庭、健康文化象意与生活习惯、人际/环境。每年篇幅不平均分配，按 ACTIVE 规则触发强弱组织。原局/运限简要说明；重点是该年的流年结构、体系内证据、跨体系互参及无法裁决的分歧。没有特殊应期就不制造重大转折。
用户确认出生资料、年份、价格、语言、邮箱和交付规则后付款；支付成功且能力可用才进入生成队列。可查看状态；邮件失败可安全重发。

## 关键非功能目标（首版建议验收门槛，需压测确认）
移动端核心任务可完成；WCAG 2.2 AA；主要交互不依赖动画；Core Web Vitals 75th percentile LCP<=2.5s, INP<=200ms, CLS<=0.1（生产真实用户监测）；不以这些性能目标压缩正确性或证据。
所有价格、报告样本、报告交付时间均真实标注；不使用伪造用户评价和倒计时。
