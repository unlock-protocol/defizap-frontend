const LLP_DAI_ABI = [
  {
    "payable": true,
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "Invest2FulcrumAddress",
    "outputs": [
      {
        "internalType": "contract Invest2Fulcrum",
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_towhomtoIssueAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_2XLongETHAllocation",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_InvesteeTokenAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_slippage",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "_residualInToken",
        "type": "bool"
      }
    ],
    "name": "LetsInvest",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "UniSwapAddLiquityV2_GeneralAddress",
    "outputs": [
      {
        "internalType": "contract UniSwapAddLiquityV2_General",
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "destruct",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "contract IERC20",
        "name": "_TokenAddress",
        "type": "address"
      }
    ],
    "name": "inCaseTokengetsStuck",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "_Invest2FulcrumAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_UniSwapAddLiquityV2_GeneralAddress",
        "type": "address"
      }
    ],
    "name": "initialize",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "isOwner",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "contract Invest2Fulcrum",
        "name": "_Invest2FulcrumAddress",
        "type": "address"
      }
    ],
    "name": "set_Invest2FulcrumAddress",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "_new_UniSwapAddLiquityV2_GeneralAddress",
        "type": "address"
      }
    ],
    "name": "set_UniSwapAddLiquityV2_GeneralAddress",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "toggleContractActive",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address payable",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "withdraw",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

export default LLP_DAI_ABI;
