import React from 'react'
import { MuiThemeProvider } from '@material-ui/core'
import {PaarthTheme} from './Theme'

export default function ThemeProvider({children}) {
    return (
        <MuiThemeProvider theme={PaarthTheme }>
            {children}
        </MuiThemeProvider>
    )
}
