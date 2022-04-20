import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TabContext, TabList } from '@mui/lab';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from "@mui/material";
import { green } from '@mui/material/colors';
interface ITabProps {
  child1?: React.ReactNode
  child2?: React.ReactNode
  children?: React.ReactNode
  margin?: number
}
const theme = createTheme({
  palette: {
    primary: {
      main: "#2CE080",
    },
    secondary: green
  },
});


const NavTabs = ({ ...props }: ITabProps) => {

  const [value, setValue] = React.useState('0');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);

  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>

      <TabContext value={value} {...props}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <ThemeProvider theme={theme}>
            <TabList sx={{ marginLeft: props.margin }}
              onChange={handleChange}
              aria-label="lab API tabs example"
              indicatorColor='secondary'
              textColor='secondary'>{props.child1}</TabList>
          </ThemeProvider>
        </Box>
        {props.child2}
      </TabContext>
    </Box>
  );
}
export default NavTabs