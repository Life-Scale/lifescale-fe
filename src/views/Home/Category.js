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
import '../../styles/category.css';
import { useHistory, useParams } from 'react-router-dom';
import categoryTemp from '../../assets/category-temp.jpg';
import Finance from './Finance';

const Category = ({category}) => {
    const {isOpen, onToggle} = useDisclosure();
    const history = useHistory();
    const params = useParams();
    console.log(params.category)
    
    useEffect(() => {
        setTimeout(() => {
            onToggle();
        }, 500)
    }, [])

    const pushToHome = () => {
        history.push('/');
    }

    function toTitleCase(str) {
        return str.replace(
          /\w\S*/g,
          function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          }
        );
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
                    <GridItem height='70vh' width='80vw' display='flex' flexDirection='column' justifyContent='center' p={8} bg='dodgerblue' className='grid-item'>
                        <div style={{display: 'flex', width: '49%', justifyContent: 'space-between', alignItems: 'center'}}>
                            <Button onClick={pushToHome} id='card-btn'>Back</Button>
                            {params.category === 'finance' ? 
                            <Text style={{color: 'white', fontSize: '3rem'}}>{toTitleCase(params.category)}</Text> : null}
                        </div>
                        <div style={{display: 'flex', width: "90%", justifyContent: 'space-between'}}>
                            <img src={categoryTemp} style={{width: '20vw', borderRadius: '.5rem', objectFit: 'cover'}} />
                            <Finance/>
                        </div>
                        <div>
                            <h1 style={{textAlign: 'left', color: 'whitesmoke', fontSize: '2rem', fontFamily: 'sans-serif'}}>{toTitleCase(params.category)}</h1>
                            <Divider/>
                            <p style={{lineHeight: '2rem', textAlign: 'left', color: 'whitesmoke', fontSize: '1.2rem', fontFamily: 'sans-serif'}}>Take control of your career aspirations.</p>
                        </div>
                    </GridItem>
                </Grid>
            </ScaleFade>
            :
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <ScaleFade in={true}>
                        <CircularProgress value={80} isIndeterminate/>
                        <p style={{color: 'whitesmoke'}}>Loading<span style={{color: 'navy'}}>Category...</span></p>
                    </ScaleFade>
                </div>
            }
        </div>
    )
}

export default Category;