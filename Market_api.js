// Return a list of historical market statistics for the specified type in a region
// 返回区域中指定类型的历史市场统计数据列表
/**
 * params {
 *  region_id,
 *  type_id
 * }
 * return [
  {
    "average": 800000,
    "date": "2020-12-01",
    "highest": 800000,
    "lowest": 800000,
    "order_count": 1,
    "volume": 1
  }
  ...
]
 */
const markets_region_id_history = 'https://esi.evetech.net/dev/markets/10000012/history/?datasource=tranquility&type_id=608'
/** end */

// Return a list of orders in a region
// 返回一个地区的订单列表
/**
 * params {
 *  region_id,
 *  order_type
 * }
 * return [
  {
    "duration": 7,
    "is_buy_order": true,
    "issued": "2022-01-25T00:56:22Z",
    "location_id": 60003760,
    "min_volume": 1,
    "order_id": 6183452679,
    "price": 131300000,
    "range": "station",
    "system_id": 30000142,
    "type_id": 19687,
    "volume_remain": 1,
    "volume_total": 1
  }
  ...
]
 */
const markets_region_id_orders_ids = 'https://esi.evetech.net/dev/markets/10000002/orders/?datasource=tranquility&order_type=buy&page=1'
/** end */

// Return a list of type IDs that have active orders in the region, for efficient market indexing.
// 返回该区域中具有活动订单的类型 ID 列表，以进行有效的市场索引。
/**
 * param {
 *  region_id
 * }
 * return [
  43691,
  32772,
  32774,
  32780,
  32782,
  60077
  ...
]
 */
const markets_region_id_types_ids = 'https://esi.evetech.net/dev/markets/10000002/types/?datasource=tranquility&page=1'
/** end */

// Get a list of item groups
// 获取项目组列表
/**
 * return [
  2,
  4,
  5,
  6,
  7,
  ...
]
 */
const markets_groups_ids = 'https://esi.evetech.net/dev/markets/groups/?datasource=tranquility'
/** end */

// Get information on an item group
// 获取有关项目组的信息
/**
 * params {
 *  market_group_id
 * }
 * return {
    "description": "护卫舰能满足多种需求和目的。",
    "market_group_id": 5,
    "name": "标准护卫舰",
    "parent_group_id": 1361,
    "types": []
    }
 * 
 */
const market_group_id_des = 'https://esi.evetech.net/dev/markets/groups/5/?datasource=tranquility&language=zh'
/** end */

// Return a list of prices
// 返回价格列表
/**
 * return [
  {
    "adjusted_price": 0,
    "average_price": 23693218.39,
    "type_id": 43691
  },
  {
    "adjusted_price": 882838.6410891424,
    "average_price": 880199.97,
    "type_id": 32772
  }
  ...
]
 */
const markets_prices = 'https://esi.evetech.net/dev/markets/prices/?datasource=tranquility'