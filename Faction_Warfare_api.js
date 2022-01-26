// Top 4 leaderboard of factions for kills and victory points separated by total, last week and yesterday
// 上周和昨天的杀戮和胜利点数排名前 4 的阵营
/**
 * return {
  "kills": {
    "active_total": [
      {
        "amount": 1064642,
        "faction_id": 500004
      }
    ],
    "last_week": [
      {
        "amount": 869,
        "faction_id": 500001
      }
    ],
    "yesterday": [
      {
        "amount": 132,
        "faction_id": 500002
      }
    ]
  },
  "victory_points": {
    "active_total": [
      {
        "amount": 75475240,
        "faction_id": 500001
      }
    ],
    "last_week": [
      {
        "amount": 88400,
        "faction_id": 500001
      }
    ],
    "yesterday": [
      {
        "amount": 16320,
        "faction_id": 500002
      },  
      {
        "amount": 11680,
        "faction_id": 500001
      }
    ]
  }
}
 */
const fw_leaderboard = 'https://esi.evetech.net/dev/fw/leaderboards/?datasource=tranquility'
/** end */

// Top 100 leaderboard of pilots for kills and victory points separated by total, last week and yesterday
// 上周和昨天的前 100 名飞行员击杀和胜利积分排行榜
/**
 * return {
    "kills": {
        "active_total": [
            {
                "amount": 11444,
                "character_id": 1710501247
            },
            {
                "amount": 8729,
                "character_id": 187568404
            }
            ...
        ]
    }
}
 */
const fw_leaderboards_characters = 'https://esi.evetech.net/dev/fw/leaderboards/characters/?datasource=tranquility'
/** end */

// Top 10 leaderboard of corporations for kills and victory points separated by total, last week and yesterday
// 上周和昨天的公司杀戮和胜利积分排名前 10 名
/**
 * return 
 * {
        "kills": {
            "active_total": [
            {
                "amount": 125666,
                "corporation_id": 1000180
            },
            {
                "amount": 97017,
                "corporation_id": 100018
            }
            ]
        }
    }
 */
const fw_leaderboards_corporations = 'https://esi.evetech.net/dev/fw/leaderboards/corporations/?datasource=tranquility'
/** end */

// Statistical overviews of factions involved in faction warfare
// 参与派系战争的派系统计概览
/** 
 * return [
  {
    "faction_id": 500001,
    "kills": {
      "last_week": 869,
      "total": 898297,
      "yesterday": 105
    },
    "pilots": 44744,
    "systems_controlled": 85,
    "victory_points": {
      "last_week": 88400,
      "total": 75475240,
      "yesterday": 11680
    }
  }
]
 */
const fw_stats = 'https://esi.evetech.net/dev/fw/stats/?datasource=tranquility'
/** end */

// An overview of the current ownership of faction warfare solar systems
// 派系战太阳系当前所有权概述
/**
 * return [
  {
    "contested": "contested",
    "occupier_faction_id": 500003,
    "owner_faction_id": 500003,
    "solar_system_id": 30002957,
    "victory_points": 1440,
    "victory_points_threshold": 3000
  }
  ...
]
 */
const fw_systems = 'https://esi.evetech.net/dev/fw/systems/?datasource=tranquility'
/** end */

// Data about which NPC factions are at war
// 有关哪些 NPC 派系处于战争状态的数据
/**
 * return [
  {
    "against_id": 500002,
    "faction_id": 500001
  },
  {
    "against_id": 500004,
    "faction_id": 500001
  }
  ...
]
 */
const fw_wars = 'https://esi.evetech.net/dev/fw/wars/?datasource=tranquility'
/** end */