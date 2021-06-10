import { createMuiTheme } from "@material-ui/core"

//  defining theme
const themeColors = {
    primary: '#2A78FF',
    secondary: '#2E3647',
    tertiary: '#F8FAFB',
}

// const colors = {
//     primary: {
//         main: themeColors.primary
//     },
//     secondary: {
//         main: themeColors.secondary
//     },
//     // tertiary: {
//     //     main: themeColors.tertiary
//     // }
// }

export const PaarthTheme = createMuiTheme({
    colors: {
        primary: {
            main: themeColors.primary
        },
        secondary: {
            main: themeColors.secondary
        },
    }
})