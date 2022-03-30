import React from 'react';
import { 
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
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
} from '@chakra-ui/react';
import Logo from '../assets/logo-blue.png';
import '../styles/header.css'
import { AddIcon, ChevronDownIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon } from '@chakra-ui/icons';

const Header = () => {
    return (
        <Box>
            <div className="header-grid">
                <Image className="logo" src={Logo}/>
                <Menu variant>
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon />}
                        variant='outline'
                        className='menu-btn'
                    />
                    <MenuList>
                        <MenuDivider/>
                        <Text className='menu-section-header'>Quick Links</Text>
                        <MenuDivider/>
                        <MenuItem icon={<AddIcon style={{width: '1.6rem'}} />}>
                        New goal
                        </MenuItem>
                        <MenuItem icon={<RepeatIcon style={{width: '1.6rem'}} />}>
                        Rewards
                        </MenuItem>
                        <MenuDivider/>
                        <Text className='menu-section-header'>Account</Text>
                        <MenuDivider/>
                        <MenuItem icon={<Avatar style={{width: '1.6rem', height: '1.6rem'}} />}>
                        You
                        </MenuItem>
                        <MenuItem icon={<EditIcon style={{width: '1.6rem'}} />}>
                        Logout
                        </MenuItem>
                        <MenuDivider/>
                    </MenuList>
                </Menu>
            </div>
        </Box>
    )
};

export default Header;
