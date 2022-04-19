import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Grid, Typography, Link, GridProps } from '@mui/material';
import { Rocket, Science } from '@mui/icons-material';
import NavTabs from '../../organisms/NavTabs/NavTabs';

interface ExploreDataDetails {
  image: string;
  link: string;
}
interface IGridProps extends GridProps {

}
const ExploreTabs = ({ ...props }: IGridProps) => {

  const [exploreData, setExploreData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3005/exploreIcons')
      .then(res => res.json())
      .then(data => {
        setExploreData(data)
      })
  }, [])
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const CategoryGrid = ({ ...props }: IGridProps) => {
    return (
      <Grid container spacing={1} {...props}>
        {exploreData.map((edata: ExploreDataDetails) => (
          <Grid item xs={12} md={8} lg={4} >
            <Grid container >
              <Grid item>
                <img src={edata.image} alt='' />
              </Grid>
              <Grid item>
                <Link sx={{ marginLeft: 1 }}
                  underline='none'
                  color='#6D787E'
                  href='http://localhost:3000/Entrepreneurship'>{edata.link}</Link>

              </Grid>
            </Grid>
          </Grid>
        )
        )}
      </Grid>
    )
  }
  const tabValues = [
    {
      'value': '0',
      'label': 'Explore by category',
      'panelData': <CategoryGrid />
    },
    {
      'value': '1',
      'label': 'See recently added titles',
      'panelData': ''
    },
    {
      'value': '2',
      'label': 'See popular titles',
      'panelData': ''
    }
  ]
  return (
    <NavTabs child1={tabValues.map((tabValue) => (
      <Tab sx={{ width: 350 }} value={tabValue.value} label={tabValue.label} />
    )

    )} child2={tabValues.map((tabValue) => (
      <TabPanel sx={{ "marginLeft": 15 }} value={tabValue.value}>{tabValue.panelData}</TabPanel>
    ))} margin={15}>
    </NavTabs>
  );
}

export default ExploreTabs;