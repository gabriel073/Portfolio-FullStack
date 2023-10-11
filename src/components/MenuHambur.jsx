import { IconButton, Link, Menu, MenuButton, MenuList } from '@chakra-ui/react'
import React from 'react';
import { HamburgerIcon } from '@chakra-ui/icons'

function MenuHambur() {
    return (
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='outline'
            />
            <MenuList>
                <Link p={6} _hover={{ textDecoration: 'none', color: 'blue' }} href='#skills'  >Skills</Link>
                <Link p={6} _hover={{ textDecoration: 'none', color: 'blue' }} href='#proyectos'>Proyectos</Link>
                <Link p={6} _hover={{ textDecoration: 'none', color: 'blue' }} href='#contacto'>Contacto</Link>
            </MenuList>
        </Menu>
    )
}

export default MenuHambur;