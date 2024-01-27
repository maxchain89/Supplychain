// SPDX-License-Identifier: MIT
pragma solidity ^0.5.0;

//import "truffle/console.sol";

contract SupplyChain {
    struct Item {
        string name;
        //uint256 itemId;
        uint256 price;
        address owner;
        bool isSold;
        bool isActive;
    }

    Item[] public items;

    event ItemUpdated(
        uint256 indexed itemId,
        string name,
        uint256 price,
        bool isSold
    );
    event ItemDeleted(uint256 indexed itemId);

    //lets make a way to dynamically create an Id
    function addItem(string memory _name, uint256 _price) public {
        items.push(Item(_name, _price, msg.sender, false, true));
    }

    function getNumberOfItems() public view returns (uint) {
        return items.length;
    }

    function updateItem(
        uint256 _itemId,
        string memory _name,
        uint256 _price,
        bool _isSold
    ) public {
        require(_itemId < items.length, "Item does not exist");
        Item storage item = items[_itemId];
        require(
            msg.sender == item.owner,
            "Only the item owner can update the item."
        );
        item.name = _name;
        item.price = _price;
        item.isSold = _isSold;
        emit ItemUpdated(_itemId, _name, _price, _isSold);
    }

    function deleteItem(uint256 _itemId) public {
        require(_itemId < items.length, "Item does not exist");
        Item storage item = items[_itemId];
        require(
            msg.sender == item.owner,
            "Only the item owner can delete the item."
        );
        item.isActive = false;
        emit ItemDeleted(_itemId);
    }

    function readItem(
        uint256 _itemId
    )
        public
        view
        returns (
            string memory name,
            uint256 price,
            address owner,
            bool isSold,
            bool isActive
        )
    {
        require(_itemId < items.length, "Item does not exist.");
        Item memory item = items[_itemId];
        // require(item.isActive, "Item has been deleted and is now inactive");
        return (item.name, item.price, item.owner, item.isSold, item.isActive);
    }
}
