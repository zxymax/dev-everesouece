// Return a list of wars
// 返回战争列表
/**
 * return [
    713469,
    713468,
    713467,
    ...
 * ]
 */
const wars_ids = 'https://esi.evetech.net/dev/wars/?datasource=tranquility'
/** end */

// Return details about a war
// 返回有关战争的详细信息
/**
 * params {
 *   war_id
 * }
 * return {
    "aggressor": {
        "corporation_id": 98703424,
        "isk_destroyed": 0,
        "ships_killed": 0
    },
    "allies": [],
    "declared": "2022-01-26T06:47:00Z",
    "defender": {
        "corporation_id": 98691001,
        "isk_destroyed": 0,
        "ships_killed": 0
    },
    "id": 715432,
    "mutual": false,
    "open_for_allies": false,
    "started": "2022-01-27T06:47:00Z"
}
 */
const war_id_des = 'https://esi.evetech.net/dev/wars/715432/?datasource=tranquility'
/** end */

// Return a list of kills related to a war
// 返回与战争相关的击杀名单
/**
 * params {
 *   war_id
 * }
 * return [
  {
    "killmail_hash": "c9d09d399574659a5a5e407a6072aa7239ff24d1",
    "killmail_id": 98370710
  }
  ...
]
 */
const wars_war_id_killmails = 'https://esi.evetech.net/dev/wars/715274/killmails/?datasource=tranquility&page=1'
/** end */