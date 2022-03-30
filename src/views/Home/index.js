import React, { useEffect } from 'react';
import {
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
    GridItem,
    theme,
    Image,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    IconButton,
    AvatarBadge,
    Avatar,
    ScaleFade,
    useDisclosure,
    CircularProgress,
    Divider,
} from '@chakra-ui/react';
import '../../styles/home.css';
import { useHistory } from 'react-router-dom';

const Home = () => {
    const {isOpen, onToggle} = useDisclosure();
    const history = useHistory();
    
    useEffect(() => {
        setTimeout(() => {
            onToggle();
        }, 500)
    }, [])

    const pushToCategory = (e) => {
        history.push(`/category${e}`);
    }

    return (
        <div w={80} className="home-container page">
            {isOpen ? 
            <ScaleFade in={isOpen}>
                <Grid
                    w="80vw"
                    h="70vh"
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(5, 1fr)'
                    gap={4}
                >
                    <GridItem onClick={() => {pushToCategory('/health')}} display='flex' flexDirection='column' justifyContent='space-between' p={8} rowSpan={2} colSpan={1} bg='#89cff0' className='grid-item'>
                        <div>
                            <h1 style={{textAlign: 'left', fontSize: '2rem', fontFamily: 'sans-serif'}}>Health</h1>
                            <Divider/>
                            <p style={{lineHeight: '2rem', textAlign: 'left', fontSize: '1.2rem', fontFamily: 'sans-serif'}}>Take control of your mind, body, and soul</p>
                        </div>
                        <Button id='card-btn'>Select</Button>
                    </GridItem>
                    <GridItem onClick={() => {pushToCategory('/finance')}} display='flex' flexDirection='column' justifyContent='space-between' p={8} colSpan={2} bg='#4fc3f7' className='grid-item'>
                        <div>
                            <h1 style={{textAlign: 'left', fontSize: '2rem', fontFamily: 'sans-serif'}}>Finance</h1>
                            <Divider/>
                            <p style={{lineHeight: '2rem', textAlign: 'left', fontSize: '1.2rem', fontFamily: 'sans-serif'}}>Take control of your finances</p>
                        </div>
                        <Button id='card-btn'>Select</Button>
                    </GridItem>
                    <GridItem onClick={() => {pushToCategory('/personal')}} display='flex' flexDirection='column' justifyContent='space-between' p={8} colSpan={2} bg='#0288d1' className='grid-item'>
                        <div>
                            <h1 style={{textAlign: 'left', color: 'whitesmoke', fontSize: '2rem', fontFamily: 'sans-serif'}}>Personal</h1>
                            <Divider/>
                            <p style={{lineHeight: '2rem', textAlign: 'left', color: 'whitesmoke', fontSize: '1.2rem', fontFamily: 'sans-serif'}}>Take control of your personal relationships, hobbies, and time management</p>
                        </div>
                        <Button id='card-btn'>Select</Button>
                    </GridItem>
                    <GridItem onClick={() => {pushToCategory('/career')}} display='flex' flexDirection='column' justifyContent='space-between' p={8} colSpan={4} bg='dodgerblue' className='grid-item'>
                        <div>
                            <h1 style={{textAlign: 'left', color: 'whitesmoke', fontSize: '2rem', fontFamily: 'sans-serif'}}>Career</h1>
                            <Divider/>
                            <p style={{lineHeight: '2rem', textAlign: 'left', color: 'whitesmoke', fontSize: '1.2rem', fontFamily: 'sans-serif'}}>Take control of your career aspirations.</p>
                        </div>
                        <Button id='card-btn'>Select</Button>
                    </GridItem>
                </Grid>
            </ScaleFade>
            :
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <ScaleFade in={true}>
                        <CircularProgress value={80} isIndeterminate/>
                        <p style={{color: 'whitesmoke'}}>Welcome <span style={{color: 'navy'}}>Back!</span></p>
                    </ScaleFade>
                </div>
            }
        </div>
    )
};

export default Home;