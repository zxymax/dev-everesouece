// Shows sovereignty data for campaigns.
// 显示活动的主权数据。
/**
 * return [
  {
    "attackers_score": 0.4,
    "campaign_id": 96154,
    "constellation_id": 20000100,
    "defender_id": 99009168,
    "defender_score": 0.6,
    "event_type": "ihub_defense",
    "solar_system_id": 30000687,
    "start_time": "2022-01-26T17:28:43Z",
    "structure_id": 1038200442452
  },
  ...
]
 */
const sovereignty_campaigns ='https://esi.evetech.net/dev/sovereignty/campaigns/?datasource=tranquility'
/** end */

// Shows sovereignty information for solar systems
// 显示太阳系的主权信息
/**
 * return [
  {
    "system_id": 31000001
  },
  {
    "system_id": 31000002
  },
  ...
]
 */
const sovereignty_map ='https://esi.evetech.net/dev/sovereignty/map/?datasource=tranquility'
/** end */

