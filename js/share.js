/**
 * Shareable result card for Pregnancy Piercing Safety Checker (PoliShare).
 * Auto-updates on select change — no calc button.
 */
'use strict';

(function () {
  function val(id) {
    var el = document.getElementById(id);
    return el ? el.value : '';
  }

  function selText(id) {
    var el = document.getElementById(id);
    return el && el.selectedIndex >= 0 ? el.options[el.selectedIndex].text : '';
  }

  PoliShare.init({
    tool: 'pregnancy-piercing-safety',
    mount: '#result',

    getState: function () {
      var proc = val('procedure');
      if (!proc) return null;
      return { procedure: proc, stage: val('stage') };
    },

    applyState: function (s) {
      var ids = ['procedure', 'stage'];
      ids.forEach(function (id) {
        var el = document.getElementById(id);
        if (el && s[id] !== undefined) {
          el.value = s[id];
          el.dispatchEvent(new Event('change', { bubbles: true }));
        }
      });
    },

    getCard: function () {
      var el = document.getElementById('result');
      if (!el || !el.textContent.trim()) return null;
      return {
        t: selText('procedure') + ' during ' + selText('stage') + ': Safety Assessment',
        d: [
          ['Procedure', selText('procedure')],
          ['Stage', selText('stage')],
          ['Assessment', el.textContent.trim().substring(0, 250)],
        ],
      };
    },
  });
})();
