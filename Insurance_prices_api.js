// Return available insurance levels for all ship types
// 返回所有船型的可用保险等级
/**
 * return [
  {
    "levels": [
      {
        "cost": 0,
        "name": "基础",
        "payout": 0
      },
      {
        "cost": 0,
        "name": "标准",
        "payout": 0
      },
      {
        "cost": 0,
        "name": "青铜",
        "payout": 0
      },
      {
        "cost": 0,
        "name": "白银",
        "payout": 0
      },
      {
        "cost": 0,
        "name": "黄金",
        "payout": 0
      },
      {
        "cost": 0,
        "name": "铂金",
        "payout": 0
      }
    ],
    "type_id": 34475
  }
  ...
]
 */
const insurance_prices = 'https://esi.evetech.net/dev/insurance/prices/?datasource=tranquility&language=zh'