// Get all character ancestries
// 获取所有角色血统
/**
 * return [
  {
    "bloodline_id": 7,
    "description": "与其他国家民众相比，盖伦特人具备更强的政治意识。他们中的许多人都参与适合他们抱负雄心的政治活动。对活动人士而言，凡事都有缺陷，但如果没有人敢挺身而出去推动变革，那这社会就会停滞不前。",
    "icon_id": 1653,
    "id": 13,
    "name": "活动人士",
    "short_description": "Making the universe a better place, one fight at a time."
  },
  ...
]
 */
const universe_ancestries = 'https://esi.evetech.net/dev/universe/ancestries/?datasource=tranquility&language=zh'
/** end */

// Get a list of bloodlines
// 获取血统列表
/**
 * return [
  {
    "bloodline_id": 5,
    "charisma": 3,
    "corporation_id": 1000066,
    "description": "正统艾玛人骄傲自大，有着强烈的传统与血统意识。多数人都认为正统艾玛人高傲且专横。与神秘朱庇特人交战失败及后续的米玛塔尔人抗争成了艾玛人心中一道抹不去的伤口。作为艾玛历史上的转折点，这两次大败对整个一代帝王领袖的政策与理念都产生了深远影响。",
    "intelligence": 7,
    "memory": 6,
    "name": "艾玛",
    "perception": 4,
    "race_id": 4,
    "ship_type_id": 0,
    "willpower": 10
  },
  ...
]
 */
const universe_bloodlines = 'https://esi.evetech.net/dev/universe/bloodlines/?datasource=tranquility&language=zh'
/** end */

// Get a list of item categories
// 获取项目类别列表
/**
 * return [
  0,
  1,
  2,
  3,
  4,
  ...
 ]
 */
const universe_categories_ids = 'https://esi.evetech.net/dev/universe/categories/?datasource=tranquility'
/** end */

// Get information of an item category
// 获取项目类别的信息
/**
 * return {
  "category_id": 7,
  "groups": [
    38,
    39,
    ...
  ],
  "name": "装备",
  "published": true
}
 */
const universe_category_id_dsc = 'https://esi.evetech.net/dev/universe/categories/7/?datasource=tranquility&language=zh'
/** end */

// Get a list of constellations
// 获取星座列表
/**
 * return [
    20000001,
    20000002,
    20000003,
  ...
 ]
 */
const universe_constellations_ids = 'https://esi.evetech.net/dev/universe/constellations/?datasource=tranquility'
/** end */

// Get information on a constellation
// 获取星座信息
/**
 * params {
 *  constellation_id
 * }
 * return{
    "constellation_id": 20000003,
    "name": "玛莫纳",
    "position": {
        "x": -66544834327682070,
        "y": 39477217750414000,
        "z": -102442842021202130
    },
    "region_id": 10000001,
    "systems": [
        30000017,
        30000018,
        30000019,
        30000020,
        30000022
    ]
}
 */
const universe_constellation_id_desc = 'https://esi.evetech.net/dev/universe/constellations/20000003/?datasource=tranquility&language=zh'
/** end */

// Get a list of factions
// 获取派系列表
/**
 * return [
    {
        "corporation_id": 1000084,
        "description": "五大帝国之一的艾玛帝国是个君主集权的封建国度，由分布广泛的自治空域组成。宗教有力影响着艾玛的政治，艾玛人认为自己是整个世界的真正主人，而基于这种信仰的外交无疑是邻国所难以接受的，艾玛人固守落后的劳工制，这又进一步加深了其余各国的反感。",
        "faction_id": 500003,
        "is_unique": true,
        "militia_corporation_id": 1000179,
        "name": "艾玛帝国",
        "size_factor": 5,
        "solar_system_id": 30002187,
        "station_count": 1031,
        "station_system_count": 508
    },
    ...
    ]
 */
const universe_factions = 'https://esi.evetech.net/dev/universe/factions/?datasource=tranquility&language=zh'
/** end */

// Get a list of item groups
// 获取项目组列表
/**
 * return [
  0,
  1,
  2,
  3,
  ...
 ]
 */
const universe_groups_ids = 'https://esi.evetech.net/dev/universe/groups/?datasource=tranquility&page=1'
/** end */

// Get information on an item group
// 获取有关项目组的信息
/**
 * params {
 *  group_id
 * }
 * return {
    "category_id": 2,
    "group_id": 3,
    "name": "星域",
    "published": false,
    "types": [
        3
    ]
    }
 */
const universe_group_id_des = 'https://esi.evetech.net/dev/universe/groups/3/?datasource=tranquility&language=zh'
/** end */

// Get a list of character races
// 获取角色种族列表
/**
 * return [
  {
    "alliance_id": 500001,
    "description": "加达里合众国建立之初的口号是爱国与奋斗。在该口号的指引下，其早期领导人在恶劣环境下进行了艰苦卓绝的奋斗。无论是在战场还是在商场，加达里人都毫不含糊，一如既往地保持高效。他们向世人诠释着力量、坚持与尊严。",
    "name": "加达里",
    "race_id": 1
  },
  {
    "alliance_id": 500002,
    "description": "由一个欣欣向荣的游牧民族发展至今，米玛塔尔人的顽强、聪明与勤奋帮助他们建立了一个真正代表其游牧文化的国家。",
    "name": "米玛塔尔",
    "race_id": 2
  },
  {
    "alliance_id": 500003,
    "description": "艾玛是四大帝国中幅员最辽阔、历史最悠久的帝国。虽然在近代历史上该帝国曾遭受到一些挫折，但它依然是新伊甸中社会秩序最稳定，军事实力最强大的国家。",
    "name": "艾玛",
    "race_id": 4
  },
  {
    "alliance_id": 500004,
    "description": "盖伦特联邦拥有多元化的人口，为人类社会贡献了一些当代最杰出的领袖、科学家与商人，并且出了名的盛产最勇敢最优秀的飞行员。",
    "name": "盖伦特",
    "race_id": 8
  }
]
 */
const universe_races = 'https://esi.evetech.net/dev/universe/races/?datasource=tranquility&language=zh'
/** end */

// Get a list of regions
// 获取地区列表
/** 
 * return [
  10000001,
  10000002,
  10000003,
  ...
 ]
 */
const universe_regions_ids = 'https://esi.evetech.net/dev/universe/regions/?datasource=tranquility'
/** end */

// Get information on a region
// 获取某个地区的信息
/**
 * params {
 *  region_id
 * }
 * return {
  "constellations": [
    20000030,
    20000031,
    20000032,
    ...
  ],
  "description": "作为一座在宇宙“北方”四散蔓延的星域，静寂谷星域是EVE中著名的最不祥的星域之一。很多人认为静寂谷星域是闹鬼的古代遗物，而那些在该区域巡游、打捞资源的古斯塔斯海盗令这种说法更加可信。还有很多谣言说，朱庇特人在这里进行秘密试验，但从没人提供过有关证据。该星域是最靠近朱庇特空间的区域之一，不过这里已经没有能通向朱庇特空间的尚能正常运作的星门了。许多其他帝国曾试图在这里建造间谍站以期探测出朱庇特的秘密，但在环境如此严酷的区域，没有空间站能维持多长时间。现在，这块区域已完全是飞行员的世界，他们证明了自己比之前的到访者要顽强勇敢得多。",
  "name": "静寂谷",
  "region_id": 10000003
}
 */
const universe_region_id_des = 'https://esi.evetech.net/dev/universe/regions/10000003/?datasource=tranquility&language=zh'
/** end */

// Get a list of solar systems
// 获取太阳能系统列表
/**
 * return [
  30000001,
  30000002,
  30000003,
  ...
 ]
 */
const universe_systems_ids = 'https://esi.evetech.net/dev/universe/systems/?datasource=tranquility'
/** end */

// Get information on a solar system.
// 获取有关太阳系的信息。
/**
 * params {
 *  system_id
 * }
 * return {
  "constellation_id": 20000002,
  "name": "苏马",
  "planets": [
    {
      "planet_id": 40000472
    },
    {
      "moons": [
        40000477
      ],
      "planet_id": 40000476
    },
    {
      "asteroid_belts": [
        40000479
      ],
      "moons": [
        40000480
      ],
      "planet_id": 40000478
    },
    {
      "asteroid_belts": [
        40000494,
        ...
      ],
      "moons": [
        40000485,
        ...
      ],
      "planet_id": 40000484
    },
    ...
  ],
  "position": {
    "x": -84094731140215220,
    "y": 69205928804160690,
    "z": -75226052138828820
  },
  "security_class": "B1",
  "security_status": 0.5778194665908813,
  "star_id": 40000471,
  "stargates": [
    50000025
  ],
  "stations": [
    60012295
  ],
  "system_id": 30000009
}
 */
const universe_system_id_des = 'https://esi.evetech.net/dev/universe/systems/30000009/?datasource=tranquility&language=zh'
/** end */

// Get information on a stargate
// 获取有关星际之门的信息
/**
 * return {
    "destination": {
        "stargate_id": 50001029,
        "system_id": 30000239
    },
    "name": "Stargate (4GYV-Q)",
    "position": {
        "x": 3525797683200,
        "y": 693336023040,
        "z": -854281297920
    },
    "stargate_id": 50001395,
    "system_id": 30000240,
    "type_id": 16
    }
 */
const universe_stargate_id_des = 'https://esi.evetech.net/dev/universe/stargates/50001395/?datasource=tranquility'
/** end */

// Get information on a star
// 获取有关恒星的信息
/**
 * params {
 *  star_id
 * }
 * return {
    "age": 19846250470,
    "luminosity": 0.01479,
    "name": "Sooma - Star",
    "radius": 280000000,
    "solar_system_id": 30000009,
    "spectral_class": "M2 V",
    "temperature": 3024,
    "type_id": 45039
    }
 */
const universe_star_id = 'https://esi.evetech.net/dev/universe/stars/40000471/?datasource=tranquility'
/** end */

// Get information on a station
// 获取空间站信息
/**
 * params {
 *   station_id
 * }
 * return {
  "max_dockable_ship_volume": 50000000,
  "name": "Sooma X - CONCORD Academy",
  "office_rental_cost": 12154,
  "owner": 1000125,
  "position": {
    "x": 789656248320,
    "y": 6576168960,
    "z": -3083485224960
  },
  "race_id": 1,
  "reprocessing_efficiency": 0.5,
  "reprocessing_stations_take": 0.05,
  "services": [
    "bounty-missions",
   ...
  ],
  "station_id": 60012295,
  "system_id": 30000009,
  "type_id": 1529
}
 */
const universe_station_id_des = 'https://esi.evetech.net/dev/universe/stations/60012295/?datasource=tranquility'
/** end */

// Get information on a planet
// 获取有关行星的信息
/**
 * params {
 *  planet_id
 * }
 * return {
    "name": "Sooma I",
    "planet_id": 40000472,
    "position": {
        "x": 13422832520,
        "y": 111754666,
        "z": 39538526819
    },
    "system_id": 30000009,
    "type_id": 2016
    }
 */
const universe_planet_id_des = 'https://esi.evetech.net/dev/universe/planets/40000472/?datasource=tranquility'

// Get information on a moon
// 获取有关月球的信息
/**
 * params {
 *  moon_id
 * }
 * return {
    "moon_id": 40000477,
    "name": "Sooma IV - Moon 1",
    "position": {
        "x": -106653521553,
        "y": -887966729,
        "z": -198690326154
    },
    "system_id": 30000009
    }
 */
const universe_moon_id_des = 'https://esi.evetech.net/dev/universe/moons/40000477/?datasource=tranquility'
/** end */

// Get the number of jumps in solar systems within the last hour ending at the timestamp of the Last-Modified header, excluding wormhole space. Only systems with jumps will be listed
// 获取以 Last-Modified 标头的时间戳结束的最后一小时内太阳系中的跳跃次数，不包括虫洞空间。 只会列出带有跳跃的系统
/** 
 * return [
    {
        "ship_jumps": 8,
        "system_id": 30000764
    },
    {
        "ship_jumps": 51,
        "system_id": 30002736
    },
    ...
]
 */
const universe_system_jumps = 'https://esi.evetech.net/dev/universe/system_jumps/?datasource=tranquility'
/** end */

// Get the number of ship, pod and NPC kills per solar system within the last hour ending at the timestamp of the Last-Modified header, excluding wormhole space. Only systems with kills will be listed
// 获取在 Last-Modified 标头的时间戳结束的最后一小时内每个太阳系的飞船、吊舱和 NPC 击杀数，不包括虫洞空间。 只会列出具有杀伤力的系统
/**
 * return [
  {
    "npc_kills": 138,
    "pod_kills": 0,
    "ship_kills": 1,
    "system_id": 30002469
  },
  {
    "npc_kills": 488,
    "pod_kills": 0,
    "ship_kills": 0,
    "system_id": 30002657
  },
  ...
]
 */
const universe_system_kills = 'https://esi.evetech.net/dev/universe/system_kills/?datasource=tranquility'
/** end */

// Get a list of type ids
// 获取类型 ID 列表
/**
 * return [
    0,
    2,
    3,
    ...
 ]
 */
const universe_types_ids = 'https://esi.evetech.net/dev/universe/types/?datasource=tranquility&page=1'
/** end */

// Get information on a type
// 获取有关类型的信息
/**
 * return {
  "capacity": 0,
  "description": "艾克诺岩是已知世界中最稀有、最令人向往的矿石之一。一大块这种矿石足以让任何人瞬间从乞丐变成富翁。它含有大量<a href=showinfo:40>超噬矿</a>，以及一些<a href=showinfo:36>类银超金属</a>和<a href=showinfo:35>类晶体胶矿</a>。\n\n\n\n大多数情况下，你可以在零安全等级星系和虫洞中找到它。",
  "dogma_attributes": [
    {
      "attribute_id": 161,
      "value": 16
    },
    ...
  ],
  "group_id": 450,
  "icon_id": 1277,
  "market_group_id": 512,
  "mass": 1e+35,
  "name": "艾克诺岩",
  "packaged_volume": 16,
  "portion_size": 100,
  "published": true,
  "radius": 1,
  "type_id": 22,
  "volume": 16
}
 */
const universe_type_id_des = 'https://esi.evetech.net/dev/universe/types/22/?datasource=tranquility&language=zh'
/** end */

