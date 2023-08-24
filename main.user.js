// ==UserScript==
// @name        DTF WidgetPanel
// @namespace   https://github.com/TentacleTenticals/
// @match       https://dtf.ru/*
// @grant       Tentacle Tenticals
// @version     1.0.4
// @author      Tentacle Tenticals
// @description Скрипт для появления панели виджетов
// @homepage    https://github.com/TentacleTenticals/DTF-Widget-Panel
// @updateURL   https://github.com/TentacleTenticals/DTF-Widget-Panel/raw/main/main.user.js
// @downloadURL https://github.com/TentacleTenticals/DTF-Widget-Panel/raw/main/main.user.js
//
// @require     https://github.com/TentacleTenticals/dtf-libs-2.0/raw/main/libs/splitCls/classes.js
// @require     https://github.com/TentacleTenticals/dtf-libs-2.0/raw/main/libs/settings/css/dtfCore.js
//
// @require     https://github.com/TentacleTenticals/DTF-Libs1/raw/main/classes/widget/panel/js/main.js
// @require     https://github.com/TentacleTenticals/DTF-Libs1/raw/main/classes/widget/panel/css/main.js
// @license MIT
// ==/UserScript==
/* jshint esversion:8 */

(() => {
  const cfg = {
    changeStyle: true,
    widget: {
      'side': {
        'btn': {
          'padding': '10px 10px 10px 10px !important'
        }
      },
      'main': {
        'btn': {
          'height': '20px !important'
        }
      }
    }
  };


const css = (cfg) => `
.sidePanel>.header {
 padding: ${cfg.widget.side.btn.padding};
}
.mainPanel>.header {
 height: ${cfg.widget.main.btn.height};
}`;


  // new El().Css('DTF-core', dtfCoreCSS, true);
  if(cfg.changeStyle) new El().Css('DTF-Widget-upd', css(cfg));
  new El().Css('DTF-widgets', widgetCss(), true);
  new WidgetPanel();

})();
