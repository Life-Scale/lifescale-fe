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
    Stack,
    CircularProgress,
    Divider,
    Checkbox,
} from '@chakra-ui/react';
import '../../styles/category.css';
import { useHistory, useParams } from 'react-router-dom';
import categoryTemp from '../../assets/category-temp.jpg';

const Finance = ({category}) => {
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
        <Stack spacing={5} borderRadius=".5rem" paddingTop="2rem" paddingBottom="2rem" width="40vw" direction='column' bgColor='whitesmoke'>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <Text style={{marginLeft: '1rem'}}>Employed?</Text>
                <Checkbox width="100%" colorScheme='blue' padding={'1rem'}>
                    Yes
                </Checkbox>
                <Checkbox width="100%" colorScheme='blue' padding={'1rem'}>
                    No
                </Checkbox>
            </div>
            <Divider color='blue' colorScheme='blue' width='2px' />
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <Text style={{marginLeft: '1rem'}}>Salary Range:</Text>
                <Checkbox width="50%" colorScheme='blue' padding={'1rem'}>
                    $0-$10,000
                </Checkbox>
                <Checkbox width="50%" colorScheme='blue' padding={'1rem'}>
                    $10,000-30,000
                </Checkbox>
                <Checkbox width="50%" colorScheme='blue' padding={'1rem'}>
                    $30,000-$50,000
                </Checkbox>
                <Checkbox width="50%" colorScheme='blue' padding={'1rem'}>
                    $50,000+
                </Checkbox>
            </div>
                
        </Stack>
    )
}

export default Finance;