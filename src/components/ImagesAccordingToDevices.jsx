import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import { DesktopWindows, PhoneAndroid } from '@mui/icons-material';
import { Image } from 'react-bootstrap';

const ImagesAccordingToDevices = ({mobileImage,desktopImage,desktop_height = "400px"}) => {

    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleChangeTab = (event, newValue) => {
        setSelectedTab(newValue);
    };
    
  return (
    <>
        <Tabs
            variant = "plain"
            aria-label='tabs'
            value={selectedTab}
            onChange={handleChangeTab}
        >
            <TabList>
                <Tab  variant="plain" color="primary"><DesktopWindows  value = {0}/></Tab>
                <Tab  variant="plain" color="primary"><PhoneAndroid value = {1} /></Tab>
            </TabList>

            <TabPanel value = {1}>
                <Image src={mobileImage} style = {{height:"400px"}} />
            </TabPanel>

            <TabPanel value = {0}>
                <Image src={desktopImage} style = {{height:desktop_height}} />
            </TabPanel>
        </Tabs>
    </>
  )
}

export default ImagesAccordingToDevices