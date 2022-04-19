import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { TabsProps } from '@mui/material';
import NavTabs from '../NavTabs/NavTabs';
import RenderCards from '../RenderCards';



interface LibTabProps extends TabsProps{

}
 const CurrentlyReadingTab=({...props}:LibTabProps)=> {
  
  const tabValues=[
    {
      'value':'0',
      'label':'Currently reading',
      'panelData':<RenderCards tab='currentlyReading'/>
    },
    {
      'value':'1',
      'label':'Finished',
      'panelData':<RenderCards tab='finished'/>
        }
    
  ]

  return (
    <NavTabs child1={tabValues.map((tabValue)=>(
      <Tab value={tabValue.value} label={tabValue.label}/>
      )
      
      )} child2={tabValues.map((tabValue)=>(
        <TabPanel value={tabValue.value}>{tabValue.panelData}</TabPanel>
      ))}> 
     </NavTabs>
  );
}
export default CurrentlyReadingTab