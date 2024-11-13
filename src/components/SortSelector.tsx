import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
    setSelectSortOrder: (sortOrder: string) => void;
    sortOrder: string;
}

const SortSelector = ({ setSelectSortOrder, sortOrder }: Props) => {
    const sortOrders = [
        { label: 'Relevance', value: '' },
        { label: 'Date added', value: '-added' },
        { label: 'Name', value: 'name' },
        { label: 'Release date', value: '-released' },
        { label: 'Popularity', value: '-metacritic' },
        { label: 'Avergae rating', value: '-rating' },
    ];

    const currentSortOrder = sortOrders.find(order => order.value === sortOrder)

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>OrderBy: {currentSortOrder?.label || 'Relevance'}</MenuButton>
            <MenuList>
                {sortOrders.map((order) =>
                    <MenuItem onClick={() => setSelectSortOrder(order.value)} key={order.value} value={order.value}>
                        {order.label}
                    </MenuItem>
                )}
            </MenuList>
        </Menu>
    );
}

export default SortSelector