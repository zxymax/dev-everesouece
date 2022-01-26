// Get a list of dogma attribute ids
// 获取教条属性 IDS 列表
/**
 * return [
  982,
  983,
  2,
  984,
  1966,
  3,
  985,
  ...
 ]
 */
const dogma_ids = 'https://esi.evetech.net/dev/dogma/attributes/?datasource=tranquility'
/** end */

// Get information on a dogma attribute
// 获取有关教条属性的信息
/** 
 * params { attribute_id }
    * return {
    "attribute_id": 984,
    "default_value": 0,
    "description": "",
    "display_name": "EM Damage Resistance Bonus",
    "icon_id": 1396,
    "name": "emDamageResistanceBonus",
    "published": true,
    "unit_id": 124
    }
 */
const dogma_info = 'https://esi.evetech.net/dev/dogma/attributes/984/?datasource=tranquility'
/** end */

// Get a list of dogma effect ids
// 获取教条效果 ID 列表
/**
 * return [
  4512,
  6768,
  4513,
  6769,
  ...
]
 */
const dogma_effect_ids = 'https://esi.evetech.net/dev/dogma/effects/?datasource=tranquility'
/** end */

// Get information on a dogma effect
// 获取有关教条效应的信息
/**
 * params { effect_id }
* return {
  "description": "",
  "display_name": "",
  "effect_category": 4,
  "effect_id": 4527,
  "icon_id": 0,
  "modifiers": [
    {
      "domain": "shipID",
      "func": "LocationRequiredSkillModifier",
      "modified_attribute_id": 158,
      "modifying_attribute_id": 349,
      "operator": 6
    }
  ],
  "name": "gunneryFalloffBonusOnline"
}
 */
const dogma_effect_info = 'https://esi.evetech.net/dev/dogma/effects/4527/?datasource=tranquility'