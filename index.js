const plugin = require("tailwindcss/plugin");
const { fromPairs, concat, map } = require("lodash");
module.exports = {
  plugins: [
    plugin(function ({ theme, variants, addUtilities, e }) {
      const guttersTheme = theme("gap");
      const guttersVariants = variants("gap");

      addUtilities({
        [`.${e("gutters-wrapper")}`]: {
          display: "flow-root",
        },
        [`.${e("gutters-wrapper")}::before, .${e("gutters-wrapper")}::after`]: {
          content: "''",
          display: "table",
        },
        [`.${e("gutters")}, .${e("gutters-padding")}`]: {
          "--gutters-x": "0px",
          "--gutters-y": "0px",
          "--gutters-x-h": "calc(var(--gutters-x) / 2)",
          "--gutters-x-h-n": "calc(var(--gutters-x-h) * -1)",
          "--gutters-y-h": "calc(var(--gutters-y) / 2)",
          "--gutters-y-h-n": "calc(var(--gutters-y-h) * -1)",
          margin: "var(--gutters-y-h-n) var(--gutters-x-h-n)",
        },
        [`.${e("gutters")} > *`]: {
          margin: "var(--gutters-y-h) var(--gutters-x-h)",
        },
        [`.${e("gutters-padding")} > *`]: {
          padding: "var(--gutters-y-h) var(--gutters-x-h)",
        },
      });

      const combined = fromPairs(
        concat(
          ...map(guttersTheme, (val, mod) => {
            return [
              [
                `.${e(`gutters-${mod}`)}`,
                {
                  "--gutters-x": String(val) === "0" ? "0px" : val,
                  "--gutters-y": String(val) === "0" ? "0px" : val,
                },
              ],
            ];
          })
        )
      );

      const split = fromPairs(
        concat(
          ...map(guttersTheme, (v, m) => {
            return [
              [
                `.${e(`gutters-x-${m}`)}`,
                {
                  "--gutters-x": String(v) === "0" ? "0px" : v,
                },
              ],
              [
                `.${e(`gutters-y-${m}`)}`,
                {
                  "--gutters-y": String(v) === "0" ? "0px" : v,
                },
              ],
            ];
          })
        )
      );

      addUtilities({...combined, ...split}, guttersVariants);
    })
  ]
};