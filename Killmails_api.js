// Return a single killmail from its ID and hash
// 从其 ID 和哈希返回单个 killmail
/**
 * params {
 *   killmail_id,
 *   killmail_hash
 * }
 * return {
    "attackers": [
        {
        "alliance_id": 99010320,
        "character_id": 94089878,
        "corporation_id": 98695585,
        "damage_done": 2363490,
        "final_blow": true,
        "security_status": -0.2,
        "ship_type_id": 4302,
        "weapon_type_id": 7087
        },
        {
        "alliance_id": 99011318,
        "character_id": 97203987,
        "corporation_id": 98703389,
        "damage_done": 156228,
        "final_blow": false,
        "security_status": -1.6,
        "ship_type_id": 670,
        "weapon_type_id": 31880
        }
    ],
    "killmail_id": 98370710,
    "killmail_time": "2022-01-24T09:33:44Z",
    "solar_system_id": 30002520,
    "victim": {
        "corporation_id": 98623995,
        "damage_taken": 2519718,
        "items": [
        {
            "flag": 180,
            "item_type_id": 56202,
            "quantity_dropped": 1,
            "singleton": 0
        },
        {
            "flag": 92,
            "item_type_id": 46633,
            "quantity_destroyed": 1,
            "singleton": 0
        }
        ],
        "position": {
        "x": 1261292954849,
        "y": -149841745913,
        "z": -348288270009
        },
        "ship_type_id": 35835
    },
  "war_id": 715274
}
 */
const killmail_id_killmail_hash_des = 'https://esi.evetech.net/dev/killmails/98370710/c9d09d399574659a5a5e407a6072aa7239ff24d1/?datasource=tranquility'