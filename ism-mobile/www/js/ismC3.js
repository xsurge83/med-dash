(function (angular) {

  "use strict";

  angular.module('ism-c3', [])
    .factory('C3', GaugeFactory);

  function GaugeFactory() {

    return {
      createGauge : createGauge,
      createBarChart : createBarChart
    };

    /**
     *
     * @param {string} options.element
     * @param {string|int} options.value
     * @param {int} options.max
     * @param {int} [options.min]
     * @returns {*}
     */
    function createGauge(options) {

      options.min = options.min | 0;

      return c3.generate({
        bindto: options.element,

        data: {
          columns: [
            ['data', options.value]
          ],
          type: 'gauge',
          onclick: function (d, i) {
            console.log("onclick", d, i);
          },
          onmouseover: function (d, i) {
            console.log("onmouseover", d, i);
          },
          onmouseout: function (d, i) {
            console.log("onmouseout", d, i);
          }
        },
        gauge: {
          label: {
            format: function (value, ratio) {
              return value;
            }
          },
          min: options.min,
          max: options.max,
          units: '',
          width: 3 // for adjusting arc thicknesscs
        },
        color: {
          pattern: ['#60B044']
        }
      });
    }

    function createBarChart(options){
      return c3.generate({
        bindto : options.element,
        data: {
          columns: options.columns,
          type: 'bar'
        },
        bar: {
          width: 10
        }
      });
    }
  }

})(angular);