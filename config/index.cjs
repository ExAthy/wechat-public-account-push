/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxb886308087a99480',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '4a8f5fcd67ef298f07a08f5d9758b84a',

  PROVINCE: '湖北',
  CITY: '武汉',

  USERS: [
    {
      // 想要发送的人的名字
      name: '李梦尧',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'owfvt6XrlGjHnAuNNh5s_q5wFODE',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'Bo__Ndmm0jly346Y2WOigUX4gdc_DWaf4cdgSgB_FxU',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '李梦尧', year: '1997', date: '09-16',
        },
        {
          type: '生日', name: '李梦尧', year: '1997', date: '09-16',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '张恒', year: '2000', date: '06-19',
        }
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2024-03-15' }
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'm1-prh1DGitKwafLYvnpuW2aBwDBhQYhsEyIWbJPmEY',

  CALLBACK_USERS: [
    {
      name: '张恒',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'owfvt6XrlGjHnAuNNh5s_q5wFODE',
    }
  ],

}

module.exports = USER_CONFIG

