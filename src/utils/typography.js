import Typography from "typography"
const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Slack-Larsseit",
    "Helvetica Neue",
    "Helvetica",
    "Segoe UI",
    "Tahoma",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: [
    "Slack-Circular-Pro",
    "Helvetica Neue",
    "Helvetica",
    "Segoe UI",
    "Tahoma",
    "Arial",
    "sans-serif"
  ],
  overrideStyles: () => ({
    button: {
      fontSize: `0.75rem`,
      fontWeight: `bold`,
      backgroundColor: `#611f69`,
      padding: `10px`,
      color: `#fff`,
      border: `none`,
      borderRadius: `3px`
    },
    img: {
      margin: `0`,
    }
  })
})
export default typography
