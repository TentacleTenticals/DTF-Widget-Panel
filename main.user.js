// ==UserScript==
// @name        DTF WidgetPanel
// @namespace   https://github.com/TentacleTenticals/
// @match       https://dtf.ru/*
// @grant       Tentacle Tenticals
// @version     1.0.9
// @author      Tentacle Tenticals
// @description Скрипт для появления панели виджетов
// @homepage    https://github.com/TentacleTenticals/DTF-Widget-Panel
// @updateURL   https://github.com/TentacleTenticals/DTF-Widget-Panel/raw/main/main.user.js
// @downloadURL https://github.com/TentacleTenticals/DTF-Widget-Panel/raw/main/main.user.js
//
// @require     https://github.com/TentacleTenticals/dtf-libs-2.0/raw/main/libs/splitCls/classes.js
//
// @require     https://github.com/TentacleTenticals/dtf-libs-2.0/raw/main/interface/widget/js/panel.js
// @require     https://github.com/TentacleTenticals/dtf-libs-2.0/raw/main/interface/widget/css/panel.js
// @license MIT
// ==/UserScript==
/* jshint esversion:8 */

(() => {
  const cfg = {
    changeStyle: false,
    widget: {
      'side': {
        'btn': {
          'min-width': '15'
        }
      },
      'main': {
        'btn': {
          'height': '15'
        }
      }
    }
  };


const css = (cfg) => `
.sidePanel>.header {
  min-width: ${cfg.widget.side.btn['min-width']||10}px;
  aspect-ratio: 1/0.85;
}
.mainPanel>.header {
 height: ${cfg.widget.main.btn.height||8}px;
}`;


  // new El().Css('DTF-core', dtfCoreCSS, true);
  if(cfg.changeStyle) new El().Css('DTF-Widget-upd', css(cfg));
  new El().Css('DTF-widgets', widgetCss(), true);
  new WidgetPanel();

})();
