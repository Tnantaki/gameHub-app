import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useGameQueryStore from '../store';

const SortSelector = () => {
  const sortOrders = [
    {value: "", label: "Relevance"},
    {value: "-added", label: "Date added"},
    {value: "name", label: "Name"},
    {value: "-released", label: "Release date"},
    {value: "-metacritic", label: "Popularity"},
    {value: "-rating", label: "Average rating"},
  ]

  const sortOrder = useGameQueryStore(s => s.gameQuery.sortOrder)
  const setSortOrder = useGameQueryStore(s => s.setSortOrder)
  const currentOrder = sortOrders.find(order => order.value === sortOrder)

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {currentOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortOrder) => (
          <MenuItem
            onClick={() => setSortOrder(sortOrder.value)}
            key={sortOrder.value}
            value={sortOrder.value}
          >
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector