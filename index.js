const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ theme, variants, addUtilities, e }) {
  Object.entries(theme("gap")).forEach(([key,value]) => addUtilities({
    [`.gutters-${e(key)}`]: {
      margin: `calc(${value} / 2 * -1)`,
      "& > *": {
        margin: `calc(${value} / 2)`
      }
    },
    [`.gutters-x-${e(key)}`]: {
      marginRight: `calc(${value} / 2 * -1)`,
      marginLeft: `calc(${value} / 2 * -1)`,
      "& > *": {
        marginRight: `calc(${value} / 2)`,
        marginLeft: `calc(${value} / 2)`
      }
    },
    [`.gutters-y-${e(key)}`]: {
      marginTop: `calc(${value} / 2 * -1)`,
      marginBottom: `calc(${value} / 2 * -1)`,
      "& > *": {
        marginTop: `calc(${value} / 2)`,
        marginBottom: `calc(${value} / 2)`
      }
    }
  }, variants("gap")));
}
);