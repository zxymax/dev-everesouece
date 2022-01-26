// List all active player alliances
// 列出所有活跃的玩家联盟
/**
 * return [
  99000006,
  99000008,
  99000025,
  99000026,
  99000036
  ...
    ]
 */
const alliances_ids = 'https://esi.evetech.net/dev/alliances/?datasource=tranquility'
/** end */

// Public information about an alliance
// 关于联盟的公开信息
/** params { alliance_id }
 *  return {
        "creator_corporation_id": 98241771,
        "creator_id": 379226154,
        "date_founded": "2013-08-23T05:45:11Z",
        "executor_corporation_id": 98688253,
        "name": "Fraternity.",
        "ticker": "FRT"
    }
 */
const alliance_info = 'https://esi.evetech.net/dev/alliances/99003581/?datasource=tranquility'
/** end */

// List all current member corporations of an alliance
// 列出联盟的所有当前成员公司
/**
 * params { alliance_id }
 * return [
  98018841,
  98049623,
  98057377,
  98097414,
  98108175,
  98120016
    ...    
  ]
 */
const corporations_ids = 'https://esi.evetech.net/dev/alliances/99003581/corporations/?datasource=tranquility'
/** end */

// Get the icon urls for a alliance
// 获取联盟的图标地址
/**
 * params { alliance_id }
 * return 
 */
 const alliance_icon = 'https://esi.evetech.net/dev/alliances/99003581/icons/?datasource=tranquility'
 /** end */

 // Public information about a corporation
 // 有关公司的公开信息
 /**
  * params { corporation_id }
  * return {
    "alliance_id": 99003581,
    "ceo_id": 90816088,
    "creator_id": 91714289,
    "date_founded": "2012-02-25T09:29:00Z",
    "description": "<font size=\"12\" color=\"#ff999999\"></font><font size=\"24\" color=\"#ff00ffff\"><b>We are a well-established, active Indy-focused corp with growing PVP oportunities, looking for new and active pilots!</b></font><font size=\"12\" color=\"#ff00ffff\"> <br><br></font><font size=\"18\" color=\"#ffffff00\">Please join</font><font size=\"18\" color=\"#ff00ffff\"><b> </font><font size=\"18\" color=\"#ffff00ff\">DNS-R Public </b></font><font size=\"18\" color=\"#ffffff00\">to chat with someone.<br><br></font><font size=\"18\" color=\"#ff00ff00\">What we are offering:<br><br></font><font size=\"13\" color=\"#ff00ffff\"><b>*</font><font size=\"13\" color=\"#ffffffff\"> </font><font size=\"13\" color=\"#ff7f007f\">Access to 0.0 System</font><font size=\"13\" color=\"#ffffffff\">  <br></font><font size=\"13\" color=\"#ff00ffff\">*</font><font size=\"13\" color=\"#ffffffff\"> </font><font size=\"13\" color=\"#ff7f007f\">Active mostly US time zone some EU <br></font><font size=\"13\" color=\"#ff00ffff\">*</font><font size=\"13\" color=\"#ffffffff\"> </font><font size=\"13\" color=\"#ff7f007f\">Corp Shopping Service<br></font><font size=\"13\" color=\"#ff00ffff\">*</font><font size=\"13\" color=\"#ffffffff\"> </font><font size=\"13\" color=\"#ff7f007f\">Corp Mineral buyback<br></font><font size=\"13\" color=\"#ff00ffff\">*</font><font size=\"13\" color=\"#ffffffff\"> </font><font size=\"13\" color=\"#ff7f007f\">Consistent 10% corp tax<br></font><font size=\"13\" color=\"#ff00ffff\">*</font><font size=\"13\" color=\"#ffffffff\"> </font><font size=\"13\" color=\"#ff7f007f\">Good Pi planets, with low tax<br></font><font size=\"13\" color=\"#ff00ffff\">*</font><font size=\"13\" color=\"#ffffffff\"> </font><font size=\"13\" color=\"#ff7f007f\">Real-life comes first policy<br></font><font size=\"13\" color=\"#ff00ffff\">*</font><font size=\"13\" color=\"#ffffffff\"> </font><font size=\"13\" color=\"#ff7f007f\">Mature leadership/Mature corp<br></font><font size=\"13\" color=\"#ff00ffff\">*</font><font size=\"13\" color=\"#ffffffff\"> </font><font size=\"13\" color=\"#ff7f007f\">T2 access for senior members</font><font size=\"12\" color=\"#ffffffff\"> </b><br><br></font><font size=\"18\" color=\"#ff007fff\">What we are looking for:<br><br></font><font size=\"13\" color=\"#ff00ffff\"><b>*</font><font size=\"13\" color=\"#ffffffff\"> </font><font size=\"13\" color=\"#ff7f7f00\">Active team players willing to participate in Corp Ops, Home Defence and Alliance CTA's EVERY GUN COUNTS!<br></font><font size=\"13\" color=\"#ff00ffff\">*</font><font size=\"13\" color=\"#ffffffff\"> </font><font size=\"13\" color=\"#ff7f7f00\">Mining/PVE/PVP focused characters<br></font><font size=\"13\" color=\"#ff00ffff\">*</font><font size=\"13\" color=\"#ffffffff\"> </font><font size=\"13\" color=\"#ff7f7f00\">People willing to train/Fly capital Industrial ships/Carriers but not required<br></font><font size=\"13\" color=\"#ff00ffff\">*</font><font size=\"13\" color=\"#ffffffff\"> </font><font size=\"13\" color=\"#ff7f7f00\">Must have a mic/headset and use Corp Teamspeak and Alliace Mumble<br></font><font size=\"13\" color=\"#ff00ffff\">*</font><font size=\"13\" color=\"#ffffffff\"> </font><font size=\"13\" color=\"#ff7f7f00\">Min skillpoints of 6 Mill<br></font><font size=\"13\" color=\"#ff00ffff\">*</font><font size=\"13\" color=\"#ffff0000\"> </font><font size=\"13\" color=\"#ff7f7f00\">Provide full account SEAT registration for Corp recruitment that will be kept on file for duration of time in Corp</b><br><br></font><font size=\"18\" color=\"#ffb2b2b2\">Please contact one of our Recruiters</font><font size=\"18\" color=\"#ffff0000\"><b> </font><font size=\"24\" color=\"#ffff0000\"><i><u>BEFORE</b></i></u></font><font size=\"18\" color=\"#ffb2b2b2\"> applying. Random applications will be auto rejected!<br></font><font size=\"18\" color=\"#ffd98d00\"><loc><a href=\"showinfo:1373//90056315\">Dasheba</a></loc></font><font size=\"18\" color=\"#ffff00ff\">  </font><font size=\"18\" color=\"#ffd98d00\"><a href=\"showinfo:1384//96422812\">Tally Hoe</a></font><font size=\"18\" color=\"#ff999999\"> </font>",
    "home_station_id": 60001957,
    "member_count": 117,
    "name": "DNS Requiem",
    "shares": 1000,
    "tax_rate": 0.10000000149011612,
    "ticker": "DNS-R",
    "url": "http://",
    "war_eligible": true
    }
  */
 const corporation_info = 'https://esi.evetech.net/dev/corporations/98097414/?datasource=tranquility'
/** end */

// Get a list of all the alliances a corporation has been a member of
// 获取公司加入的所有联盟的列表
/**
 * params { corporation_id }
 * return [
    {
        "alliance_id": 99003581,
        "record_id": 1385809,
        "start_date": "2021-09-02T16:07:00Z"
    },
    {
        "record_id": 1384980,
        "start_date": "2021-08-28T06:29:00Z"
    }
        ... 
    ]
 */
 const corporation_alliancehistory = 'https://esi.evetech.net/dev/corporations/98097414/alliancehistory/?datasource=tranquility'
 /** end */

 // Get the icon urls for a corporation
 // 获取公司的图标地址
 /**
  * params { corporation_id }
  * return {
    "px128x128": "https://images.evetech.net/corporations/98097414/logo?tenant=tranquility&size=128",
    "px256x256": "https://images.evetech.net/corporations/98097414/logo?tenant=tranquility&size=256",
    "px64x64": "https://images.evetech.net/corporations/98097414/logo?tenant=tranquility&size=64"
    }
  */
 const corporation_icon = 'https://esi.evetech.net/dev/corporations/98097414/icons/?datasource=tranquility'
/** end */

// Get a list of npc corporations
// 获取NPC公司列表
/**
 * return [
  1000042,
  1000176,
  1000043,
  1000177,
  ...
]
 */
const npccorps_ids = 'https://esi.evetech.net/dev/corporations/npccorps/?datasource=tranquility'
/** end */

