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
import Logo from '../assets/logo_transparent_background.png';
import '../styles/header.css'
import { AddIcon, ChevronDownIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon } from '@chakra-ui/icons';

const Header = () => {
    return (
        <Box>
            <div className="header-grid">
                <Image className="logo" src={Logo}/>
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon />}
                        variant='outline'
                        className='menu-btn'
                    />
                    <MenuList>
                        <MenuItem icon={<AddIcon style={{width: '1.6rem'}} />}>
                        New Goal
                        </MenuItem>
                        <MenuItem icon={<Avatar style={{width: '1.6rem', height: '1.6rem'}} />}>
                        You
                        </MenuItem>
                        <MenuItem icon={<RepeatIcon style={{width: '1.6rem'}} />}>
                        Rewards
                        </MenuItem>
                        <MenuItem icon={<EditIcon style={{width: '1.6rem'}} />}>
                        Login
                        </MenuItem>
                    </MenuList>
                </Menu>
            </div>
        </Box>
    )
};

export default Header;
