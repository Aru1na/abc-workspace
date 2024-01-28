// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract no_name is ERC20{
    constructor(uint256 initialSupply) ERC20("no_name", "nn") {
        _mint(msg.sender, initialSupply);
    }
}