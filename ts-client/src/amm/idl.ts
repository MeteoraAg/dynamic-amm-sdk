export type Amm = {
  "version": "0.5.3",
  "name": "amm",
  "docs": [
    "Program for AMM"
  ],
  "instructions": [
    {
      "name": "initializePermissionedPool",
      "docs": [
        "Initialize a new permissioned pool."
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "Pool account (arbitrary address)"
          ]
        },
        {
          "name": "lpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of the pool"
          ]
        },
        {
          "name": "tokenAMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token A mint of the pool. Eg: USDT"
          ]
        },
        {
          "name": "tokenBMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token B mint of the pool. Eg: USDC"
          ]
        },
        {
          "name": "aVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token A. Token A of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "bVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token B. Token B of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "aVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of vault A"
          ]
        },
        {
          "name": "bVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of vault B"
          ]
        },
        {
          "name": "aVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "bVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault B. Used to receive/burn vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "adminTokenA",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Admin token account for pool token A mint. Used to bootstrap the pool with initial liquidity."
          ]
        },
        {
          "name": "adminTokenB",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Admin token account for pool token B mint. Used to bootstrap the pool with initial liquidity."
          ]
        },
        {
          "name": "adminPoolLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Admin pool LP token account. Used to receive LP during first deposit (initialize pool)",
            "Admin pool LP token account. Used to receive LP during first deposit (initialize pool)"
          ]
        },
        {
          "name": "protocolTokenAFee",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Protocol fee token account for token A. Used to receive trading fee."
          ]
        },
        {
          "name": "protocolTokenBFee",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Protocol fee token account for token B. Used to receive trading fee."
          ]
        },
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "Admin account. This account will be the admin of the pool, and the payer for PDA during initialize pool."
          ]
        },
        {
          "name": "feeOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Rent account."
          ]
        },
        {
          "name": "mintMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vaultProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Vault program. The pool will deposit/withdraw liquidity from the vault."
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token program."
          ]
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Associated token program."
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "System program."
          ]
        }
      ],
      "args": [
        {
          "name": "curveType",
          "type": {
            "defined": "CurveType"
          }
        }
      ]
    },
    {
      "name": "initializePermissionlessPool",
      "docs": [
        "Initialize a new permissionless pool."
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Pool account (PDA address)"
          ]
        },
        {
          "name": "lpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of the pool"
          ]
        },
        {
          "name": "tokenAMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token A mint of the pool. Eg: USDT"
          ]
        },
        {
          "name": "tokenBMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token B mint of the pool. Eg: USDC"
          ]
        },
        {
          "name": "aVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token A. Token A of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "bVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token B. Token B of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "aTokenVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token vault account of vault A"
          ]
        },
        {
          "name": "bTokenVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token vault account of vault B"
          ]
        },
        {
          "name": "aVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of vault A"
          ]
        },
        {
          "name": "bVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of vault B"
          ]
        },
        {
          "name": "aVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "bVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault B. Used to receive/burn vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "payerTokenA",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Payer token account for pool token A mint. Used to bootstrap the pool with initial liquidity."
          ]
        },
        {
          "name": "payerTokenB",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Admin token account for pool token B mint. Used to bootstrap the pool with initial liquidity."
          ]
        },
        {
          "name": "payerPoolLp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "protocolTokenAFee",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Protocol fee token account for token A. Used to receive trading fee."
          ]
        },
        {
          "name": "protocolTokenBFee",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Protocol fee token account for token B. Used to receive trading fee."
          ]
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "Admin account. This account will be the admin of the pool, and the payer for PDA during initialize pool."
          ]
        },
        {
          "name": "feeOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Rent account."
          ]
        },
        {
          "name": "mintMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vaultProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Vault program. The pool will deposit/withdraw liquidity from the vault."
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token program."
          ]
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Associated token program."
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "System program."
          ]
        }
      ],
      "args": [
        {
          "name": "curveType",
          "type": {
            "defined": "CurveType"
          }
        },
        {
          "name": "tokenAAmount",
          "type": "u64"
        },
        {
          "name": "tokenBAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initializePermissionlessPoolWithFeeTier",
      "docs": [
        "Initialize a new permissionless pool with customized fee tier"
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Pool account (PDA address)"
          ]
        },
        {
          "name": "lpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of the pool"
          ]
        },
        {
          "name": "tokenAMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token A mint of the pool. Eg: USDT"
          ]
        },
        {
          "name": "tokenBMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token B mint of the pool. Eg: USDC"
          ]
        },
        {
          "name": "aVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token A. Token A of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "bVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token B. Token B of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "aTokenVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token vault account of vault A"
          ]
        },
        {
          "name": "bTokenVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token vault account of vault B"
          ]
        },
        {
          "name": "aVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of vault A"
          ]
        },
        {
          "name": "bVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of vault B"
          ]
        },
        {
          "name": "aVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "bVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault B. Used to receive/burn vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "payerTokenA",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Payer token account for pool token A mint. Used to bootstrap the pool with initial liquidity."
          ]
        },
        {
          "name": "payerTokenB",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Admin token account for pool token B mint. Used to bootstrap the pool with initial liquidity."
          ]
        },
        {
          "name": "payerPoolLp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "protocolTokenAFee",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Protocol fee token account for token A. Used to receive trading fee."
          ]
        },
        {
          "name": "protocolTokenBFee",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Protocol fee token account for token B. Used to receive trading fee."
          ]
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "Admin account. This account will be the admin of the pool, and the payer for PDA during initialize pool."
          ]
        },
        {
          "name": "feeOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Rent account."
          ]
        },
        {
          "name": "mintMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vaultProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Vault program. The pool will deposit/withdraw liquidity from the vault."
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token program."
          ]
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Associated token program."
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "System program."
          ]
        }
      ],
      "args": [
        {
          "name": "curveType",
          "type": {
            "defined": "CurveType"
          }
        },
        {
          "name": "tradeFeeBps",
          "type": "u64"
        },
        {
          "name": "tokenAAmount",
          "type": "u64"
        },
        {
          "name": "tokenBAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "enableOrDisablePool",
      "docs": [
        "Enable or disable a pool. A disabled pool allow only remove balanced liquidity operation."
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Pool account (PDA)"
          ]
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Admin account. Must be owner of the pool."
          ]
        }
      ],
      "args": [
        {
          "name": "enable",
          "type": "bool"
        }
      ]
    },
    {
      "name": "swap",
      "docs": [
        "Swap token A to B, or vice versa. An amount of trading fee will be charged for liquidity provider, and the admin of the pool."
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Pool account (PDA)"
          ]
        },
        {
          "name": "userSourceToken",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "User token account. Token from this account will be transfer into the vault by the pool in exchange for another token of the pool."
          ]
        },
        {
          "name": "userDestinationToken",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "User token account. The exchanged token will be transfer into this account from the pool."
          ]
        },
        {
          "name": "aVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token a. token a of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "bVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token b. token b of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "aTokenVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token vault account of vault A"
          ]
        },
        {
          "name": "bTokenVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token vault account of vault B"
          ]
        },
        {
          "name": "aVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Lp token mint of vault a"
          ]
        },
        {
          "name": "bVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Lp token mint of vault b"
          ]
        },
        {
          "name": "aVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "bVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault B. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "protocolTokenFee",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Protocol fee token account. Used to receive trading fee. It's mint field must matched with user_source_token mint field."
          ]
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "User account. Must be owner of user_source_token."
          ]
        },
        {
          "name": "vaultProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Vault program. the pool will deposit/withdraw liquidity from the vault."
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token program."
          ]
        }
      ],
      "args": [
        {
          "name": "inAmount",
          "type": "u64"
        },
        {
          "name": "minimumOutAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "removeLiquiditySingleSide",
      "docs": [
        "Withdraw only single token from the pool. Only supported by pool with stable swap curve."
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Pool account (PDA)"
          ]
        },
        {
          "name": "lpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of the pool"
          ]
        },
        {
          "name": "userPoolLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "User pool lp token account. LP will be burned from this account upon success liquidity removal."
          ]
        },
        {
          "name": "aVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "bVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault B. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "aVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token A. Token A of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "bVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token B. Token B of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "aVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of vault A"
          ]
        },
        {
          "name": "bVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of vault B"
          ]
        },
        {
          "name": "aTokenVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token vault account of vault A"
          ]
        },
        {
          "name": "bTokenVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token vault account of vault B"
          ]
        },
        {
          "name": "userDestinationToken",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "User token account to receive token upon success liquidity removal."
          ]
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "User account. Must be owner of the user_pool_lp account."
          ]
        },
        {
          "name": "vaultProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Vault program. The pool will deposit/withdraw liquidity from the vault."
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token program."
          ]
        }
      ],
      "args": [
        {
          "name": "poolTokenAmount",
          "type": "u64"
        },
        {
          "name": "minimumOutAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "addImbalanceLiquidity",
      "docs": [
        "Deposit tokens to the pool in an imbalance ratio. Only supported by pool with stable swap curve."
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Pool account (PDA)"
          ]
        },
        {
          "name": "lpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of the pool"
          ]
        },
        {
          "name": "userPoolLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "user pool lp token account. lp will be burned from this account upon success liquidity removal."
          ]
        },
        {
          "name": "aVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "bVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault B. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "aVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token a. token a of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "bVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token b. token b of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "aVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of vault a"
          ]
        },
        {
          "name": "bVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of vault b"
          ]
        },
        {
          "name": "aTokenVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token vault account of vault A"
          ]
        },
        {
          "name": "bTokenVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token vault account of vault B"
          ]
        },
        {
          "name": "userAToken",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "User token A account. Token will be transfer from this account if it is add liquidity operation. Else, token will be transfer into this account."
          ]
        },
        {
          "name": "userBToken",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "User token B account. Token will be transfer from this account if it is add liquidity operation. Else, token will be transfer into this account."
          ]
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "User account. Must be owner of user_a_token, and user_b_token."
          ]
        },
        {
          "name": "vaultProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Vault program. the pool will deposit/withdraw liquidity from the vault."
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token program."
          ]
        }
      ],
      "args": [
        {
          "name": "minimumPoolTokenAmount",
          "type": "u64"
        },
        {
          "name": "tokenAAmount",
          "type": "u64"
        },
        {
          "name": "tokenBAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "removeBalanceLiquidity",
      "docs": [
        "Withdraw tokens from the pool in a balanced ratio. User will still able to withdraw from pool even the pool is disabled. This allow user to exit their liquidity when there's some unforeseen event happen."
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Pool account (PDA)"
          ]
        },
        {
          "name": "lpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of the pool"
          ]
        },
        {
          "name": "userPoolLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "user pool lp token account. lp will be burned from this account upon success liquidity removal."
          ]
        },
        {
          "name": "aVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "bVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault B. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "aVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token a. token a of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "bVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token b. token b of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "aVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of vault a"
          ]
        },
        {
          "name": "bVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of vault b"
          ]
        },
        {
          "name": "aTokenVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token vault account of vault A"
          ]
        },
        {
          "name": "bTokenVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token vault account of vault B"
          ]
        },
        {
          "name": "userAToken",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "User token A account. Token will be transfer from this account if it is add liquidity operation. Else, token will be transfer into this account."
          ]
        },
        {
          "name": "userBToken",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "User token B account. Token will be transfer from this account if it is add liquidity operation. Else, token will be transfer into this account."
          ]
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "User account. Must be owner of user_a_token, and user_b_token."
          ]
        },
        {
          "name": "vaultProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Vault program. the pool will deposit/withdraw liquidity from the vault."
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token program."
          ]
        }
      ],
      "args": [
        {
          "name": "poolTokenAmount",
          "type": "u64"
        },
        {
          "name": "minimumATokenOut",
          "type": "u64"
        },
        {
          "name": "minimumBTokenOut",
          "type": "u64"
        }
      ]
    },
    {
      "name": "addBalanceLiquidity",
      "docs": [
        "Deposit tokens to the pool in a balanced ratio."
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Pool account (PDA)"
          ]
        },
        {
          "name": "lpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of the pool"
          ]
        },
        {
          "name": "userPoolLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "user pool lp token account. lp will be burned from this account upon success liquidity removal."
          ]
        },
        {
          "name": "aVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "bVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault B. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "aVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token a. token a of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "bVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token b. token b of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "aVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of vault a"
          ]
        },
        {
          "name": "bVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of vault b"
          ]
        },
        {
          "name": "aTokenVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token vault account of vault A"
          ]
        },
        {
          "name": "bTokenVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token vault account of vault B"
          ]
        },
        {
          "name": "userAToken",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "User token A account. Token will be transfer from this account if it is add liquidity operation. Else, token will be transfer into this account."
          ]
        },
        {
          "name": "userBToken",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "User token B account. Token will be transfer from this account if it is add liquidity operation. Else, token will be transfer into this account."
          ]
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "User account. Must be owner of user_a_token, and user_b_token."
          ]
        },
        {
          "name": "vaultProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Vault program. the pool will deposit/withdraw liquidity from the vault."
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token program."
          ]
        }
      ],
      "args": [
        {
          "name": "poolTokenAmount",
          "type": "u64"
        },
        {
          "name": "maximumTokenAAmount",
          "type": "u64"
        },
        {
          "name": "maximumTokenBAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "setPoolFees",
      "docs": [
        "Update trading fee charged for liquidity provider, and admin."
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Pool account (PDA)"
          ]
        },
        {
          "name": "feeOperator",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Fee operator account"
          ]
        }
      ],
      "args": [
        {
          "name": "fees",
          "type": {
            "defined": "PoolFees"
          }
        },
        {
          "name": "newPartnerFeeNumerator",
          "type": "u64"
        }
      ]
    },
    {
      "name": "overrideCurveParam",
      "docs": [
        "Update swap curve parameters. This function do not allow update of curve type. For example: stable swap curve to constant product curve. Only supported by pool with stable swap curve.",
        "Only amp is allowed to be override. The other attributes of stable swap curve will be ignored."
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Pool account (PDA)"
          ]
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Admin account."
          ]
        }
      ],
      "args": [
        {
          "name": "curveType",
          "type": {
            "defined": "CurveType"
          }
        }
      ]
    },
    {
      "name": "getPoolInfo",
      "docs": [
        "Get the general information of the pool."
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Pool account (PDA)"
          ]
        },
        {
          "name": "lpMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "LP token mint of the pool"
          ]
        },
        {
          "name": "aVaultLp",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "bVaultLp",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "LP token account of vault B. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "aVault",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Vault account for token a. token a of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "bVault",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Vault account for token b. token b of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "aVaultLpMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "LP token mint of vault a"
          ]
        },
        {
          "name": "bVaultLpMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "LP token mint of vault b"
          ]
        }
      ],
      "args": []
    },
    {
      "name": "bootstrapLiquidity",
      "docs": [
        "Bootstrap the pool when liquidity is depleted."
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Pool account (PDA)"
          ]
        },
        {
          "name": "lpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of the pool"
          ]
        },
        {
          "name": "userPoolLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "user pool lp token account. lp will be burned from this account upon success liquidity removal."
          ]
        },
        {
          "name": "aVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "bVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault B. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "aVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token a. token a of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "bVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token b. token b of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "aVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of vault a"
          ]
        },
        {
          "name": "bVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of vault b"
          ]
        },
        {
          "name": "aTokenVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token vault account of vault A"
          ]
        },
        {
          "name": "bTokenVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token vault account of vault B"
          ]
        },
        {
          "name": "userAToken",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "User token A account. Token will be transfer from this account if it is add liquidity operation. Else, token will be transfer into this account."
          ]
        },
        {
          "name": "userBToken",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "User token B account. Token will be transfer from this account if it is add liquidity operation. Else, token will be transfer into this account."
          ]
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "User account. Must be owner of user_a_token, and user_b_token."
          ]
        },
        {
          "name": "vaultProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Vault program. the pool will deposit/withdraw liquidity from the vault."
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token program."
          ]
        }
      ],
      "args": [
        {
          "name": "tokenAAmount",
          "type": "u64"
        },
        {
          "name": "tokenBAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "createMintMetadata",
      "docs": [
        "Create mint metadata account for old pools"
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Pool account"
          ]
        },
        {
          "name": "lpMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "LP mint account of the pool"
          ]
        },
        {
          "name": "aVaultLp",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Vault A LP account of the pool"
          ]
        },
        {
          "name": "mintMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "System program."
          ]
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "Payer"
          ]
        }
      ],
      "args": []
    },
    {
      "name": "createLockEscrow",
      "docs": [
        "Create lock account"
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Pool account"
          ]
        },
        {
          "name": "lockEscrow",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Lock account"
          ]
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lpMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "LP token mint of the pool"
          ]
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "Payer account"
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "System program."
          ]
        }
      ],
      "args": []
    },
    {
      "name": "lock",
      "docs": [
        "Lock Lp token"
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Pool account"
          ]
        },
        {
          "name": "lpMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "LP token mint of the pool"
          ]
        },
        {
          "name": "lockEscrow",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Lock account"
          ]
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "Can be anyone"
          ]
        },
        {
          "name": "sourceTokens",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "owner lp token account"
          ]
        },
        {
          "name": "escrowVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Escrow vault"
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token program."
          ]
        },
        {
          "name": "aVault",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Vault account for token a. token a of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "bVault",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Vault account for token b. token b of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "aVaultLp",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "bVaultLp",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "LP token account of vault B. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "aVaultLpMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "LP token mint of vault a"
          ]
        },
        {
          "name": "bVaultLpMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "LP token mint of vault b"
          ]
        }
      ],
      "args": [
        {
          "name": "maxAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "claimFee",
      "docs": [
        "Claim fee"
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Pool account"
          ]
        },
        {
          "name": "lpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of the pool"
          ]
        },
        {
          "name": "lockEscrow",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Lock account"
          ]
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "Owner of lock account"
          ]
        },
        {
          "name": "sourceTokens",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "owner lp token account"
          ]
        },
        {
          "name": "escrowVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Escrow vault"
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token program."
          ]
        },
        {
          "name": "aTokenVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token vault account of vault A"
          ]
        },
        {
          "name": "bTokenVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token vault account of vault B"
          ]
        },
        {
          "name": "aVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token a. token a of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "bVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token b. token b of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "aVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "bVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault B. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "aVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of vault a"
          ]
        },
        {
          "name": "bVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of vault b"
          ]
        },
        {
          "name": "userAToken",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "User token A account. Token will be transfer from this account if it is add liquidity operation. Else, token will be transfer into this account."
          ]
        },
        {
          "name": "userBToken",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "User token B account. Token will be transfer from this account if it is add liquidity operation. Else, token will be transfer into this account."
          ]
        },
        {
          "name": "vaultProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Vault program. the pool will deposit/withdraw liquidity from the vault."
          ]
        }
      ],
      "args": [
        {
          "name": "maxAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "createConfig",
      "docs": [
        "Create config"
      ],
      "accounts": [
        {
          "name": "config",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "configParameters",
          "type": {
            "defined": "ConfigParameters"
          }
        }
      ]
    },
    {
      "name": "closeConfig",
      "docs": [
        "Close config"
      ],
      "accounts": [
        {
          "name": "config",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rentReceiver",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "initializePermissionlessConstantProductPoolWithConfig",
      "docs": [
        "Initialize permissionless pool with config"
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Pool account (PDA address)"
          ]
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of the pool"
          ]
        },
        {
          "name": "tokenAMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token A mint of the pool. Eg: USDT"
          ]
        },
        {
          "name": "tokenBMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token B mint of the pool. Eg: USDC"
          ]
        },
        {
          "name": "aVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token A. Token A of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "bVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token B. Token B of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "aTokenVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token vault account of vault A"
          ]
        },
        {
          "name": "bTokenVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token vault account of vault B"
          ]
        },
        {
          "name": "aVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of vault A"
          ]
        },
        {
          "name": "bVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of vault B"
          ]
        },
        {
          "name": "aVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "bVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault B. Used to receive/burn vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "payerTokenA",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Payer token account for pool token A mint. Used to bootstrap the pool with initial liquidity."
          ]
        },
        {
          "name": "payerTokenB",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Admin token account for pool token B mint. Used to bootstrap the pool with initial liquidity."
          ]
        },
        {
          "name": "payerPoolLp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "protocolTokenAFee",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Protocol fee token account for token A. Used to receive trading fee."
          ]
        },
        {
          "name": "protocolTokenBFee",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Protocol fee token account for token B. Used to receive trading fee."
          ]
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "Admin account. This account will be the admin of the pool, and the payer for PDA during initialize pool."
          ]
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Rent account."
          ]
        },
        {
          "name": "mintMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vaultProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Vault program. The pool will deposit/withdraw liquidity from the vault."
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token program."
          ]
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Associated token program."
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "System program."
          ]
        }
      ],
      "args": [
        {
          "name": "tokenAAmount",
          "type": "u64"
        },
        {
          "name": "tokenBAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initializePermissionlessConstantProductPoolWithConfig2",
      "docs": [
        "Initialize permissionless pool with config 2"
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Pool account (PDA address)"
          ]
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of the pool"
          ]
        },
        {
          "name": "tokenAMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token A mint of the pool. Eg: USDT"
          ]
        },
        {
          "name": "tokenBMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token B mint of the pool. Eg: USDC"
          ]
        },
        {
          "name": "aVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token A. Token A of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "bVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token B. Token B of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "aTokenVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token vault account of vault A"
          ]
        },
        {
          "name": "bTokenVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token vault account of vault B"
          ]
        },
        {
          "name": "aVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of vault A"
          ]
        },
        {
          "name": "bVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of vault B"
          ]
        },
        {
          "name": "aVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "bVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault B. Used to receive/burn vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "payerTokenA",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Payer token account for pool token A mint. Used to bootstrap the pool with initial liquidity."
          ]
        },
        {
          "name": "payerTokenB",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Admin token account for pool token B mint. Used to bootstrap the pool with initial liquidity."
          ]
        },
        {
          "name": "payerPoolLp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "protocolTokenAFee",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Protocol fee token account for token A. Used to receive trading fee."
          ]
        },
        {
          "name": "protocolTokenBFee",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Protocol fee token account for token B. Used to receive trading fee."
          ]
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "Admin account. This account will be the admin of the pool, and the payer for PDA during initialize pool."
          ]
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Rent account."
          ]
        },
        {
          "name": "mintMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vaultProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Vault program. The pool will deposit/withdraw liquidity from the vault."
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token program."
          ]
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Associated token program."
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "System program."
          ]
        }
      ],
      "args": [
        {
          "name": "tokenAAmount",
          "type": "u64"
        },
        {
          "name": "tokenBAmount",
          "type": "u64"
        },
        {
          "name": "activationPoint",
          "type": {
            "option": "u64"
          }
        }
      ]
    },
    {
      "name": "initializeCustomizablePermissionlessConstantProductPool",
      "docs": [
        "Initialize permissionless pool with customizable params"
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Pool account (PDA address)"
          ]
        },
        {
          "name": "lpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of the pool"
          ]
        },
        {
          "name": "tokenAMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token A mint of the pool. Eg: USDT"
          ]
        },
        {
          "name": "tokenBMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token B mint of the pool. Eg: USDC"
          ]
        },
        {
          "name": "aVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token A. Token A of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "bVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token B. Token B of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "aTokenVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token vault account of vault A"
          ]
        },
        {
          "name": "bTokenVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token vault account of vault B"
          ]
        },
        {
          "name": "aVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of vault A"
          ]
        },
        {
          "name": "bVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of vault B"
          ]
        },
        {
          "name": "aVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "bVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault B. Used to receive/burn vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "payerTokenA",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Payer token account for pool token A mint. Used to bootstrap the pool with initial liquidity."
          ]
        },
        {
          "name": "payerTokenB",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Admin token account for pool token B mint. Used to bootstrap the pool with initial liquidity."
          ]
        },
        {
          "name": "payerPoolLp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "protocolTokenAFee",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Protocol fee token account for token A. Used to receive trading fee."
          ]
        },
        {
          "name": "protocolTokenBFee",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Protocol fee token account for token B. Used to receive trading fee."
          ]
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "Admin account. This account will be the admin of the pool, and the payer for PDA during initialize pool."
          ]
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Rent account."
          ]
        },
        {
          "name": "mintMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vaultProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Vault program. The pool will deposit/withdraw liquidity from the vault."
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token program."
          ]
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Associated token program."
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "System program."
          ]
        }
      ],
      "args": [
        {
          "name": "tokenAAmount",
          "type": "u64"
        },
        {
          "name": "tokenBAmount",
          "type": "u64"
        },
        {
          "name": "params",
          "type": {
            "defined": "CustomizableParams"
          }
        }
      ]
    },
    {
      "name": "updateActivationPoint",
      "docs": [
        "Update activation slot"
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Pool account (PDA)"
          ]
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Admin account."
          ]
        }
      ],
      "args": [
        {
          "name": "newActivationPoint",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdrawProtocolFees",
      "docs": [
        "Withdraw protocol fee"
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Pool account (PDA)"
          ]
        },
        {
          "name": "aVaultLp",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "protocolTokenAFee",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "protocolTokenBFee",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasuryTokenA",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasuryTokenB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "setWhitelistedVault",
      "docs": [
        "Set whitelisted vault"
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "whitelistedVault",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "partnerClaimFee",
      "docs": [
        "Partner claim fee"
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Pool account (PDA)"
          ]
        },
        {
          "name": "aVaultLp",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "protocolTokenAFee",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "protocolTokenBFee",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "partnerTokenA",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "partnerTokenB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "partnerAuthority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "maxAmountA",
          "type": "u64"
        },
        {
          "name": "maxAmountB",
          "type": "u64"
        }
      ]
    },
    {
      "name": "updateConfig",
      "docs": [
        "Parner update config"
      ],
      "accounts": [
        {
          "name": "config",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolCreatorAuthority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "UpdateConfigParams"
          }
        }
      ]
    },
    {
      "name": "moveLockedLp",
      "docs": [
        "Move locked lp"
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Pool account"
          ]
        },
        {
          "name": "lpMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "LP token mint of the pool"
          ]
        },
        {
          "name": "fromLockEscrow",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "From lock account"
          ]
        },
        {
          "name": "toLockEscrow",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "To lock account"
          ]
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Owner of lock account"
          ]
        },
        {
          "name": "fromEscrowVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "From escrow vault"
          ]
        },
        {
          "name": "toEscrowVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "To escrow vault"
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token program."
          ]
        },
        {
          "name": "aVault",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bVault",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "aVaultLp",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bVaultLp",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "aVaultLpMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bVaultLpMint",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "maxAmount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "config",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "poolFees",
            "docs": [
              "Pool fee"
            ],
            "type": {
              "defined": "PoolFees"
            }
          },
          {
            "name": "activationDuration",
            "docs": [
              "Activation duration"
            ],
            "type": "u64"
          },
          {
            "name": "vaultConfigKey",
            "docs": [
              "Vault config key"
            ],
            "type": "publicKey"
          },
          {
            "name": "poolCreatorAuthority",
            "docs": [
              "Only pool_creator_authority can use the current config to initialize new pool. When it's Pubkey::default, it's a public config."
            ],
            "type": "publicKey"
          },
          {
            "name": "activationType",
            "docs": [
              "Activation type"
            ],
            "type": "u8"
          },
          {
            "name": "partnerFeeNumerator",
            "docs": [
              "partner fee numerator"
            ],
            "type": "u64"
          },
          {
            "name": "feeCurve",
            "docs": [
              "Fee curve"
            ],
            "type": {
              "defined": "FeeCurveInfoFromDuration"
            }
          },
          {
            "name": "padding",
            "docs": [
              "Padding for further use"
            ],
            "type": {
              "array": [
                "u8",
                182
              ]
            }
          }
        ]
      }
    },
    {
      "name": "lockEscrow",
      "docs": [
        "State of lock escrow account"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pool",
            "docs": [
              "Pool address"
            ],
            "type": "publicKey"
          },
          {
            "name": "owner",
            "docs": [
              "Owner address"
            ],
            "type": "publicKey"
          },
          {
            "name": "escrowVault",
            "docs": [
              "Vault address, store the lock user lock"
            ],
            "type": "publicKey"
          },
          {
            "name": "bump",
            "docs": [
              "bump, used to sign"
            ],
            "type": "u8"
          },
          {
            "name": "totalLockedAmount",
            "docs": [
              "Total locked amount"
            ],
            "type": "u64"
          },
          {
            "name": "lpPerToken",
            "docs": [
              "Lp per token, virtual price of lp token"
            ],
            "type": "u128"
          },
          {
            "name": "unclaimedFeePending",
            "docs": [
              "Unclaimed fee pending"
            ],
            "type": "u64"
          },
          {
            "name": "aFee",
            "docs": [
              "Total a fee claimed so far"
            ],
            "type": "u64"
          },
          {
            "name": "bFee",
            "docs": [
              "Total b fee claimed so far"
            ],
            "type": "u64"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                7
              ]
            }
          }
        ]
      }
    },
    {
      "name": "pool",
      "docs": [
        "State of pool account"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lpMint",
            "docs": [
              "LP token mint of the pool"
            ],
            "type": "publicKey"
          },
          {
            "name": "tokenAMint",
            "docs": [
              "Token A mint of the pool. Eg: USDT"
            ],
            "type": "publicKey"
          },
          {
            "name": "tokenBMint",
            "docs": [
              "Token B mint of the pool. Eg: USDC"
            ],
            "type": "publicKey"
          },
          {
            "name": "aVault",
            "docs": [
              "Vault account for token A. Token A of the pool will be deposit / withdraw from this vault account."
            ],
            "type": "publicKey"
          },
          {
            "name": "bVault",
            "docs": [
              "Vault account for token B. Token B of the pool will be deposit / withdraw from this vault account."
            ],
            "type": "publicKey"
          },
          {
            "name": "aVaultLp",
            "docs": [
              "LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
            ],
            "type": "publicKey"
          },
          {
            "name": "bVaultLp",
            "docs": [
              "LP token account of vault B. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
            ],
            "type": "publicKey"
          },
          {
            "name": "aVaultLpBump",
            "docs": [
              "\"A\" vault lp bump. Used to create signer seeds."
            ],
            "type": "u8"
          },
          {
            "name": "enabled",
            "docs": [
              "Flag to determine whether the pool is enabled, or disabled."
            ],
            "type": "bool"
          },
          {
            "name": "protocolTokenAFee",
            "docs": [
              "Protocol fee token account for token A. Used to receive trading fee."
            ],
            "type": "publicKey"
          },
          {
            "name": "protocolTokenBFee",
            "docs": [
              "Protocol fee token account for token B. Used to receive trading fee."
            ],
            "type": "publicKey"
          },
          {
            "name": "feeLastUpdatedAt",
            "docs": [
              "Fee last updated timestamp"
            ],
            "type": "u64"
          },
          {
            "name": "padding0",
            "type": {
              "array": [
                "u8",
                24
              ]
            }
          },
          {
            "name": "fees",
            "docs": [
              "Store the fee charges setting."
            ],
            "type": {
              "defined": "PoolFees"
            }
          },
          {
            "name": "poolType",
            "docs": [
              "Pool type"
            ],
            "type": {
              "defined": "PoolType"
            }
          },
          {
            "name": "stake",
            "docs": [
              "Stake pubkey of SPL stake pool"
            ],
            "type": "publicKey"
          },
          {
            "name": "totalLockedLp",
            "docs": [
              "Total locked lp token"
            ],
            "type": "u64"
          },
          {
            "name": "bootstrapping",
            "docs": [
              "bootstrapping config"
            ],
            "type": {
              "defined": "Bootstrapping"
            }
          },
          {
            "name": "partnerInfo",
            "docs": [
              "partner info"
            ],
            "type": {
              "defined": "PartnerInfo"
            }
          },
          {
            "name": "feeCurve",
            "docs": [
              "fee curve"
            ],
            "type": {
              "defined": "FeeCurveInfo"
            }
          },
          {
            "name": "isUpdateFeeCompleted",
            "docs": [
              "Flag to indicate that fee update onchain is completed"
            ],
            "type": "bool"
          },
          {
            "name": "padding",
            "docs": [
              "Padding for future pool field"
            ],
            "type": {
              "defined": "Padding"
            }
          },
          {
            "name": "curveType",
            "docs": [
              "The type of the swap curve supported by the pool."
            ],
            "type": {
              "defined": "CurveType"
            }
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u8",
                19
              ]
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "TokenMultiplier",
      "docs": [
        "Multiplier for the pool token. Used to normalized token with different decimal into the same precision."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tokenAMultiplier",
            "docs": [
              "Multiplier for token A of the pool."
            ],
            "type": "u64"
          },
          {
            "name": "tokenBMultiplier",
            "docs": [
              "Multiplier for token B of the pool."
            ],
            "type": "u64"
          },
          {
            "name": "precisionFactor",
            "docs": [
              "Record the highest token decimal in the pool. For example, Token A is 6 decimal, token B is 9 decimal. This will save value of 9."
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "PoolFees",
      "docs": [
        "Information regarding fee charges"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tradeFeeNumerator",
            "docs": [
              "Trade fees are extra token amounts that are held inside the token",
              "accounts during a trade, making the value of liquidity tokens rise.",
              "Trade fee numerator"
            ],
            "type": "u64"
          },
          {
            "name": "tradeFeeDenominator",
            "docs": [
              "Trade fee denominator"
            ],
            "type": "u64"
          },
          {
            "name": "protocolTradeFeeNumerator",
            "docs": [
              "Protocol trading fees are extra token amounts that are held inside the token",
              "accounts during a trade, with the equivalent in pool tokens minted to",
              "the protocol of the program.",
              "Protocol trade fee numerator"
            ],
            "type": "u64"
          },
          {
            "name": "protocolTradeFeeDenominator",
            "docs": [
              "Protocol trade fee denominator"
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "Depeg",
      "docs": [
        "Contains information for depeg pool"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "baseVirtualPrice",
            "docs": [
              "The virtual price of staking / interest bearing token"
            ],
            "type": "u64"
          },
          {
            "name": "baseCacheUpdated",
            "docs": [
              "The last time base_virtual_price is updated"
            ],
            "type": "u64"
          },
          {
            "name": "depegType",
            "docs": [
              "Type of the depeg pool"
            ],
            "type": {
              "defined": "DepegType"
            }
          }
        ]
      }
    },
    {
      "name": "ConfigParameters",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tradeFeeNumerator",
            "type": "u64"
          },
          {
            "name": "protocolTradeFeeNumerator",
            "type": "u64"
          },
          {
            "name": "activationDuration",
            "type": "u64"
          },
          {
            "name": "vaultConfigKey",
            "type": "publicKey"
          },
          {
            "name": "poolCreatorAuthority",
            "type": "publicKey"
          },
          {
            "name": "activationType",
            "type": "u8"
          },
          {
            "name": "index",
            "type": "u64"
          },
          {
            "name": "partnerFeeNumerator",
            "type": "u64"
          },
          {
            "name": "feeCurve",
            "type": {
              "defined": "FeeCurveInfoFromDuration"
            }
          }
        ]
      }
    },
    {
      "name": "CustomizableParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tradeFeeNumerator",
            "docs": [
              "Trading fee."
            ],
            "type": "u32"
          },
          {
            "name": "activationPoint",
            "docs": [
              "The pool start trading."
            ],
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "hasAlphaVault",
            "docs": [
              "Whether the pool support alpha vault"
            ],
            "type": "bool"
          },
          {
            "name": "activationType",
            "docs": [
              "Activation type"
            ],
            "type": "u8"
          },
          {
            "name": "feeCurve",
            "docs": [
              "Fee curve info"
            ],
            "type": {
              "defined": "FeeCurveInfoFromDuration"
            }
          },
          {
            "name": "padding",
            "docs": [
              "Padding"
            ],
            "type": {
              "array": [
                "u8",
                53
              ]
            }
          }
        ]
      }
    },
    {
      "name": "UpdateConfigParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tradeFeeNumerator",
            "type": "u64"
          },
          {
            "name": "feeCurve",
            "type": {
              "defined": "FeeCurveInfoFromDuration"
            }
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                50
              ]
            }
          }
        ]
      }
    },
    {
      "name": "FeeCurveInfoFromDuration",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "feeCurveType",
            "docs": [
              "Fee curve type, could be flat or linear"
            ],
            "type": {
              "defined": "FeeCurveType"
            }
          },
          {
            "name": "points",
            "docs": [
              "Fee curve point"
            ],
            "type": {
              "array": [
                {
                  "defined": "FeeBpsFromDuration"
                },
                6
              ]
            }
          }
        ]
      }
    },
    {
      "name": "FeeBpsFromDuration",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "feeBps",
            "type": "u16"
          },
          {
            "name": "activatedDuration",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "Padding",
      "docs": [
        "Padding for future pool fields"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "padding0",
            "docs": [
              "Padding 0"
            ],
            "type": {
              "array": [
                "u8",
                6
              ]
            }
          },
          {
            "name": "padding1",
            "docs": [
              "Padding 1"
            ],
            "type": {
              "array": [
                "u64",
                12
              ]
            }
          },
          {
            "name": "padding2",
            "docs": [
              "Padding 2"
            ],
            "type": {
              "array": [
                "u64",
                21
              ]
            }
          }
        ]
      }
    },
    {
      "name": "PartnerInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "feeNumerator",
            "type": "u64"
          },
          {
            "name": "partnerAuthority",
            "type": "publicKey"
          },
          {
            "name": "pendingFeeA",
            "type": "u64"
          },
          {
            "name": "pendingFeeB",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "FeeCurveInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "feeCurveType",
            "docs": [
              "Fee curve type, could be flat or linear"
            ],
            "type": {
              "defined": "FeeCurveType"
            }
          },
          {
            "name": "points",
            "docs": [
              "Fee curve point"
            ],
            "type": {
              "array": [
                {
                  "defined": "FeeBpsFromActivatedPoint"
                },
                7
              ]
            }
          }
        ]
      }
    },
    {
      "name": "FeeBpsFromActivatedPoint",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "feeBps",
            "type": "u16"
          },
          {
            "name": "activatedPoint",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "Bootstrapping",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "activationPoint",
            "docs": [
              "Activation point, can be slot or timestamp"
            ],
            "type": "u64"
          },
          {
            "name": "whitelistedVault",
            "docs": [
              "Whitelisted vault to be able to buy pool before activation_point"
            ],
            "type": "publicKey"
          },
          {
            "name": "poolCreator",
            "docs": [
              "Need to store pool creator in lauch pool, so they can modify liquidity before activation_point"
            ],
            "type": "publicKey"
          },
          {
            "name": "activationType",
            "docs": [
              "Activation type, 0 means by slot, 1 means by timestamp"
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "ActivationType",
      "docs": [
        "Type of the activation"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Slot"
          },
          {
            "name": "Timestamp"
          }
        ]
      }
    },
    {
      "name": "RoundDirection",
      "docs": [
        "Rounding direction"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Floor"
          },
          {
            "name": "Ceiling"
          }
        ]
      }
    },
    {
      "name": "TradeDirection",
      "docs": [
        "Trade (swap) direction"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "AtoB"
          },
          {
            "name": "BtoA"
          }
        ]
      }
    },
    {
      "name": "NewCurveType",
      "docs": [
        "Type of the swap curve"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "ConstantProduct"
          },
          {
            "name": "Stable",
            "fields": [
              {
                "name": "amp",
                "docs": [
                  "Amplification coefficient"
                ],
                "type": "u64"
              },
              {
                "name": "token_multiplier",
                "docs": [
                  "Multiplier for the pool token. Used to normalized token with different decimal into the same precision."
                ],
                "type": {
                  "defined": "TokenMultiplier"
                }
              },
              {
                "name": "depeg",
                "docs": [
                  "Depeg pool information. Contains functions to allow token amount to be repeg using stake / interest bearing token virtual price"
                ],
                "type": {
                  "defined": "Depeg"
                }
              },
              {
                "name": "last_amp_updated_timestamp",
                "docs": [
                  "The last amp updated timestamp. Used to prevent update_curve_info called infinitely many times within a short period"
                ],
                "type": "u64"
              }
            ]
          },
          {
            "name": "NewCurve",
            "fields": [
              {
                "name": "field_one",
                "type": "u64"
              },
              {
                "name": "field_two",
                "type": "u64"
              }
            ]
          }
        ]
      }
    },
    {
      "name": "CurveType",
      "docs": [
        "Type of the swap curve"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "ConstantProduct"
          },
          {
            "name": "Stable",
            "fields": [
              {
                "name": "amp",
                "docs": [
                  "Amplification coefficient"
                ],
                "type": "u64"
              },
              {
                "name": "token_multiplier",
                "docs": [
                  "Multiplier for the pool token. Used to normalized token with different decimal into the same precision."
                ],
                "type": {
                  "defined": "TokenMultiplier"
                }
              },
              {
                "name": "depeg",
                "docs": [
                  "Depeg pool information. Contains functions to allow token amount to be repeg using stake / interest bearing token virtual price"
                ],
                "type": {
                  "defined": "Depeg"
                }
              },
              {
                "name": "last_amp_updated_timestamp",
                "docs": [
                  "The last amp updated timestamp. Used to prevent update_curve_info called infinitely many times within a short period"
                ],
                "type": "u64"
              }
            ]
          }
        ]
      }
    },
    {
      "name": "DepegType",
      "docs": [
        "Type of depeg pool"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "None"
          },
          {
            "name": "Marinade"
          },
          {
            "name": "Lido"
          },
          {
            "name": "SplStake"
          }
        ]
      }
    },
    {
      "name": "Rounding",
      "docs": [
        "Round up, down"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Up"
          },
          {
            "name": "Down"
          }
        ]
      }
    },
    {
      "name": "PoolType",
      "docs": [
        "Pool type"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Permissioned"
          },
          {
            "name": "Permissionless"
          }
        ]
      }
    },
    {
      "name": "FeeCurveType",
      "docs": [
        "Fee curve type"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "None"
          },
          {
            "name": "Flat"
          },
          {
            "name": "Linear"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "AddLiquidity",
      "fields": [
        {
          "name": "lpMintAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "tokenAAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "tokenBAmount",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "RemoveLiquidity",
      "fields": [
        {
          "name": "lpUnmintAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "tokenAOutAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "tokenBOutAmount",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "BootstrapLiquidity",
      "fields": [
        {
          "name": "lpMintAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "tokenAAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "tokenBAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "pool",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "Swap",
      "fields": [
        {
          "name": "inAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "outAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "tradeFee",
          "type": "u64",
          "index": false
        },
        {
          "name": "protocolFee",
          "type": "u64",
          "index": false
        },
        {
          "name": "hostFee",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "SetPoolFees",
      "fields": [
        {
          "name": "tradeFeeNumerator",
          "type": "u64",
          "index": false
        },
        {
          "name": "tradeFeeDenominator",
          "type": "u64",
          "index": false
        },
        {
          "name": "protocolTradeFeeNumerator",
          "type": "u64",
          "index": false
        },
        {
          "name": "protocolTradeFeeDenominator",
          "type": "u64",
          "index": false
        },
        {
          "name": "pool",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "PoolInfo",
      "fields": [
        {
          "name": "tokenAAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "tokenBAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "virtualPrice",
          "type": "f64",
          "index": false
        },
        {
          "name": "currentTimestamp",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "TransferAdmin",
      "fields": [
        {
          "name": "admin",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "newAdmin",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "pool",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "OverrideCurveParam",
      "fields": [
        {
          "name": "newAmp",
          "type": "u64",
          "index": false
        },
        {
          "name": "updatedTimestamp",
          "type": "u64",
          "index": false
        },
        {
          "name": "pool",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "PoolCreated",
      "fields": [
        {
          "name": "lpMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tokenAMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tokenBMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "poolType",
          "type": {
            "defined": "PoolType"
          },
          "index": false
        },
        {
          "name": "pool",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "PoolEnabled",
      "fields": [
        {
          "name": "pool",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "enabled",
          "type": "bool",
          "index": false
        }
      ]
    },
    {
      "name": "MigrateFeeAccount",
      "fields": [
        {
          "name": "pool",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "newAdminTokenAFee",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "newAdminTokenBFee",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tokenAAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "tokenBAmount",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "CreateLockEscrow",
      "fields": [
        {
          "name": "pool",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "owner",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "Lock",
      "fields": [
        {
          "name": "pool",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "owner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "ClaimFee",
      "fields": [
        {
          "name": "pool",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "owner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        },
        {
          "name": "aFee",
          "type": "u64",
          "index": false
        },
        {
          "name": "bFee",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "CreateConfig",
      "fields": [
        {
          "name": "tradeFeeNumerator",
          "type": "u64",
          "index": false
        },
        {
          "name": "protocolTradeFeeNumerator",
          "type": "u64",
          "index": false
        },
        {
          "name": "config",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "CloseConfig",
      "fields": [
        {
          "name": "config",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "WithdrawProtocolFees",
      "fields": [
        {
          "name": "pool",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "protocolAFee",
          "type": "u64",
          "index": false
        },
        {
          "name": "protocolBFee",
          "type": "u64",
          "index": false
        },
        {
          "name": "protocolAFeeOwner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "protocolBFeeOwner",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "PartnerClaimFees",
      "fields": [
        {
          "name": "pool",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "feeA",
          "type": "u64",
          "index": false
        },
        {
          "name": "feeB",
          "type": "u64",
          "index": false
        },
        {
          "name": "partner",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "UpdateConfig",
      "fields": [
        {
          "name": "config",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tradeFeeNumerator",
          "type": "u64",
          "index": false
        },
        {
          "name": "feeCurve",
          "type": {
            "defined": "FeeCurveInfoFromDuration"
          },
          "index": false
        }
      ]
    },
    {
      "name": "MoveLockedLp",
      "fields": [
        {
          "name": "pool",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "fromLockEscrow",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "toLockEscrow",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "MathOverflow",
      "msg": "Math operation overflow"
    },
    {
      "code": 6001,
      "name": "InvalidFee",
      "msg": "Invalid fee setup"
    },
    {
      "code": 6002,
      "name": "InvalidInvariant",
      "msg": "Invalid invariant d"
    },
    {
      "code": 6003,
      "name": "FeeCalculationFailure",
      "msg": "Fee calculation failure"
    },
    {
      "code": 6004,
      "name": "ExceededSlippage",
      "msg": "Exceeded slippage tolerance"
    },
    {
      "code": 6005,
      "name": "InvalidCalculation",
      "msg": "Invalid curve calculation"
    },
    {
      "code": 6006,
      "name": "ZeroTradingTokens",
      "msg": "Given pool token amount results in zero trading tokens"
    },
    {
      "code": 6007,
      "name": "ConversionError",
      "msg": "Math conversion overflow"
    },
    {
      "code": 6008,
      "name": "FaultyLpMint",
      "msg": "LP mint authority must be 'A' vault lp, without freeze authority, and 0 supply"
    },
    {
      "code": 6009,
      "name": "MismatchedTokenMint",
      "msg": "Token mint mismatched"
    },
    {
      "code": 6010,
      "name": "MismatchedLpMint",
      "msg": "LP mint mismatched"
    },
    {
      "code": 6011,
      "name": "MismatchedOwner",
      "msg": "Invalid lp token owner"
    },
    {
      "code": 6012,
      "name": "InvalidVaultAccount",
      "msg": "Invalid vault account"
    },
    {
      "code": 6013,
      "name": "InvalidVaultLpAccount",
      "msg": "Invalid vault lp account"
    },
    {
      "code": 6014,
      "name": "InvalidPoolLpMintAccount",
      "msg": "Invalid pool lp mint account"
    },
    {
      "code": 6015,
      "name": "PoolDisabled",
      "msg": "Pool disabled"
    },
    {
      "code": 6016,
      "name": "InvalidAdminAccount",
      "msg": "Invalid admin account"
    },
    {
      "code": 6017,
      "name": "InvalidProtocolFeeAccount",
      "msg": "Invalid protocol fee account"
    },
    {
      "code": 6018,
      "name": "SameAdminAccount",
      "msg": "Same admin account"
    },
    {
      "code": 6019,
      "name": "IdenticalSourceDestination",
      "msg": "Identical user source and destination token account"
    },
    {
      "code": 6020,
      "name": "ApyCalculationError",
      "msg": "Apy calculation error"
    },
    {
      "code": 6021,
      "name": "InsufficientSnapshot",
      "msg": "Insufficient virtual price snapshot"
    },
    {
      "code": 6022,
      "name": "NonUpdatableCurve",
      "msg": "Current curve is non-updatable"
    },
    {
      "code": 6023,
      "name": "MisMatchedCurve",
      "msg": "New curve is mismatched with old curve"
    },
    {
      "code": 6024,
      "name": "InvalidAmplification",
      "msg": "Amplification is invalid"
    },
    {
      "code": 6025,
      "name": "UnsupportedOperation",
      "msg": "Operation is not supported"
    },
    {
      "code": 6026,
      "name": "ExceedMaxAChanges",
      "msg": "Exceed max amplification changes"
    },
    {
      "code": 6027,
      "name": "InvalidRemainingAccountsLen",
      "msg": "Invalid remaining accounts length"
    },
    {
      "code": 6028,
      "name": "InvalidRemainingAccounts",
      "msg": "Invalid remaining account"
    },
    {
      "code": 6029,
      "name": "MismatchedDepegMint",
      "msg": "Token mint B doesn't matches depeg type token mint"
    },
    {
      "code": 6030,
      "name": "InvalidApyAccount",
      "msg": "Invalid APY account"
    },
    {
      "code": 6031,
      "name": "InvalidTokenMultiplier",
      "msg": "Invalid token multiplier"
    },
    {
      "code": 6032,
      "name": "InvalidDepegInformation",
      "msg": "Invalid depeg information"
    },
    {
      "code": 6033,
      "name": "UpdateTimeConstraint",
      "msg": "Update time constraint violated"
    },
    {
      "code": 6034,
      "name": "ExceedMaxFeeBps",
      "msg": "Exceeded max fee bps"
    },
    {
      "code": 6035,
      "name": "InvalidAdmin",
      "msg": "Invalid admin"
    },
    {
      "code": 6036,
      "name": "PoolIsNotPermissioned",
      "msg": "Pool is not permissioned"
    },
    {
      "code": 6037,
      "name": "InvalidDepositAmount",
      "msg": "Invalid deposit amount"
    },
    {
      "code": 6038,
      "name": "InvalidFeeOwner",
      "msg": "Invalid fee owner"
    },
    {
      "code": 6039,
      "name": "NonDepletedPool",
      "msg": "Pool is not depleted"
    },
    {
      "code": 6040,
      "name": "AmountNotPeg",
      "msg": "Token amount is not 1:1"
    },
    {
      "code": 6041,
      "name": "AmountIsZero",
      "msg": "Amount is zero"
    },
    {
      "code": 6042,
      "name": "TypeCastFailed",
      "msg": "Type cast error"
    },
    {
      "code": 6043,
      "name": "AmountIsNotEnough",
      "msg": "Amount is not enough"
    },
    {
      "code": 6044,
      "name": "InvalidActivationDuration",
      "msg": "Invalid activation duration"
    },
    {
      "code": 6045,
      "name": "PoolIsNotLaunchPool",
      "msg": "Pool is not launch pool"
    },
    {
      "code": 6046,
      "name": "UnableToModifyActivationPoint",
      "msg": "Unable to modify activation point"
    },
    {
      "code": 6047,
      "name": "InvalidAuthorityToCreateThePool",
      "msg": "Invalid authority to create the pool"
    },
    {
      "code": 6048,
      "name": "InvalidActivationType",
      "msg": "Invalid activation type"
    },
    {
      "code": 6049,
      "name": "InvalidActivationPoint",
      "msg": "Invalid activation point"
    },
    {
      "code": 6050,
      "name": "PreActivationSwapStarted",
      "msg": "Pre activation swap window started"
    },
    {
      "code": 6051,
      "name": "InvalidPoolType",
      "msg": "Invalid pool type"
    },
    {
      "code": 6052,
      "name": "InvalidQuoteMint",
      "msg": "Quote token must be SOL,USDC"
    },
    {
      "code": 6053,
      "name": "InvalidFeeCurve",
      "msg": "Invalid fee curve"
    }
  ]
};

export const IDL: Amm = {
  "version": "0.5.3",
  "name": "amm",
  "docs": [
    "Program for AMM"
  ],
  "instructions": [
    {
      "name": "initializePermissionedPool",
      "docs": [
        "Initialize a new permissioned pool."
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "Pool account (arbitrary address)"
          ]
        },
        {
          "name": "lpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of the pool"
          ]
        },
        {
          "name": "tokenAMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token A mint of the pool. Eg: USDT"
          ]
        },
        {
          "name": "tokenBMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token B mint of the pool. Eg: USDC"
          ]
        },
        {
          "name": "aVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token A. Token A of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "bVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token B. Token B of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "aVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of vault A"
          ]
        },
        {
          "name": "bVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of vault B"
          ]
        },
        {
          "name": "aVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "bVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault B. Used to receive/burn vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "adminTokenA",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Admin token account for pool token A mint. Used to bootstrap the pool with initial liquidity."
          ]
        },
        {
          "name": "adminTokenB",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Admin token account for pool token B mint. Used to bootstrap the pool with initial liquidity."
          ]
        },
        {
          "name": "adminPoolLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Admin pool LP token account. Used to receive LP during first deposit (initialize pool)",
            "Admin pool LP token account. Used to receive LP during first deposit (initialize pool)"
          ]
        },
        {
          "name": "protocolTokenAFee",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Protocol fee token account for token A. Used to receive trading fee."
          ]
        },
        {
          "name": "protocolTokenBFee",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Protocol fee token account for token B. Used to receive trading fee."
          ]
        },
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "Admin account. This account will be the admin of the pool, and the payer for PDA during initialize pool."
          ]
        },
        {
          "name": "feeOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Rent account."
          ]
        },
        {
          "name": "mintMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vaultProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Vault program. The pool will deposit/withdraw liquidity from the vault."
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token program."
          ]
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Associated token program."
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "System program."
          ]
        }
      ],
      "args": [
        {
          "name": "curveType",
          "type": {
            "defined": "CurveType"
          }
        }
      ]
    },
    {
      "name": "initializePermissionlessPool",
      "docs": [
        "Initialize a new permissionless pool."
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Pool account (PDA address)"
          ]
        },
        {
          "name": "lpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of the pool"
          ]
        },
        {
          "name": "tokenAMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token A mint of the pool. Eg: USDT"
          ]
        },
        {
          "name": "tokenBMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token B mint of the pool. Eg: USDC"
          ]
        },
        {
          "name": "aVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token A. Token A of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "bVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token B. Token B of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "aTokenVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token vault account of vault A"
          ]
        },
        {
          "name": "bTokenVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token vault account of vault B"
          ]
        },
        {
          "name": "aVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of vault A"
          ]
        },
        {
          "name": "bVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of vault B"
          ]
        },
        {
          "name": "aVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "bVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault B. Used to receive/burn vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "payerTokenA",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Payer token account for pool token A mint. Used to bootstrap the pool with initial liquidity."
          ]
        },
        {
          "name": "payerTokenB",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Admin token account for pool token B mint. Used to bootstrap the pool with initial liquidity."
          ]
        },
        {
          "name": "payerPoolLp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "protocolTokenAFee",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Protocol fee token account for token A. Used to receive trading fee."
          ]
        },
        {
          "name": "protocolTokenBFee",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Protocol fee token account for token B. Used to receive trading fee."
          ]
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "Admin account. This account will be the admin of the pool, and the payer for PDA during initialize pool."
          ]
        },
        {
          "name": "feeOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Rent account."
          ]
        },
        {
          "name": "mintMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vaultProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Vault program. The pool will deposit/withdraw liquidity from the vault."
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token program."
          ]
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Associated token program."
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "System program."
          ]
        }
      ],
      "args": [
        {
          "name": "curveType",
          "type": {
            "defined": "CurveType"
          }
        },
        {
          "name": "tokenAAmount",
          "type": "u64"
        },
        {
          "name": "tokenBAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initializePermissionlessPoolWithFeeTier",
      "docs": [
        "Initialize a new permissionless pool with customized fee tier"
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Pool account (PDA address)"
          ]
        },
        {
          "name": "lpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of the pool"
          ]
        },
        {
          "name": "tokenAMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token A mint of the pool. Eg: USDT"
          ]
        },
        {
          "name": "tokenBMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token B mint of the pool. Eg: USDC"
          ]
        },
        {
          "name": "aVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token A. Token A of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "bVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token B. Token B of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "aTokenVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token vault account of vault A"
          ]
        },
        {
          "name": "bTokenVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token vault account of vault B"
          ]
        },
        {
          "name": "aVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of vault A"
          ]
        },
        {
          "name": "bVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of vault B"
          ]
        },
        {
          "name": "aVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "bVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault B. Used to receive/burn vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "payerTokenA",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Payer token account for pool token A mint. Used to bootstrap the pool with initial liquidity."
          ]
        },
        {
          "name": "payerTokenB",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Admin token account for pool token B mint. Used to bootstrap the pool with initial liquidity."
          ]
        },
        {
          "name": "payerPoolLp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "protocolTokenAFee",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Protocol fee token account for token A. Used to receive trading fee."
          ]
        },
        {
          "name": "protocolTokenBFee",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Protocol fee token account for token B. Used to receive trading fee."
          ]
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "Admin account. This account will be the admin of the pool, and the payer for PDA during initialize pool."
          ]
        },
        {
          "name": "feeOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Rent account."
          ]
        },
        {
          "name": "mintMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vaultProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Vault program. The pool will deposit/withdraw liquidity from the vault."
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token program."
          ]
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Associated token program."
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "System program."
          ]
        }
      ],
      "args": [
        {
          "name": "curveType",
          "type": {
            "defined": "CurveType"
          }
        },
        {
          "name": "tradeFeeBps",
          "type": "u64"
        },
        {
          "name": "tokenAAmount",
          "type": "u64"
        },
        {
          "name": "tokenBAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "enableOrDisablePool",
      "docs": [
        "Enable or disable a pool. A disabled pool allow only remove balanced liquidity operation."
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Pool account (PDA)"
          ]
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Admin account. Must be owner of the pool."
          ]
        }
      ],
      "args": [
        {
          "name": "enable",
          "type": "bool"
        }
      ]
    },
    {
      "name": "swap",
      "docs": [
        "Swap token A to B, or vice versa. An amount of trading fee will be charged for liquidity provider, and the admin of the pool."
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Pool account (PDA)"
          ]
        },
        {
          "name": "userSourceToken",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "User token account. Token from this account will be transfer into the vault by the pool in exchange for another token of the pool."
          ]
        },
        {
          "name": "userDestinationToken",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "User token account. The exchanged token will be transfer into this account from the pool."
          ]
        },
        {
          "name": "aVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token a. token a of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "bVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token b. token b of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "aTokenVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token vault account of vault A"
          ]
        },
        {
          "name": "bTokenVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token vault account of vault B"
          ]
        },
        {
          "name": "aVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Lp token mint of vault a"
          ]
        },
        {
          "name": "bVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Lp token mint of vault b"
          ]
        },
        {
          "name": "aVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "bVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault B. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "protocolTokenFee",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Protocol fee token account. Used to receive trading fee. It's mint field must matched with user_source_token mint field."
          ]
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "User account. Must be owner of user_source_token."
          ]
        },
        {
          "name": "vaultProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Vault program. the pool will deposit/withdraw liquidity from the vault."
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token program."
          ]
        }
      ],
      "args": [
        {
          "name": "inAmount",
          "type": "u64"
        },
        {
          "name": "minimumOutAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "removeLiquiditySingleSide",
      "docs": [
        "Withdraw only single token from the pool. Only supported by pool with stable swap curve."
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Pool account (PDA)"
          ]
        },
        {
          "name": "lpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of the pool"
          ]
        },
        {
          "name": "userPoolLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "User pool lp token account. LP will be burned from this account upon success liquidity removal."
          ]
        },
        {
          "name": "aVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "bVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault B. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "aVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token A. Token A of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "bVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token B. Token B of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "aVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of vault A"
          ]
        },
        {
          "name": "bVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of vault B"
          ]
        },
        {
          "name": "aTokenVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token vault account of vault A"
          ]
        },
        {
          "name": "bTokenVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token vault account of vault B"
          ]
        },
        {
          "name": "userDestinationToken",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "User token account to receive token upon success liquidity removal."
          ]
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "User account. Must be owner of the user_pool_lp account."
          ]
        },
        {
          "name": "vaultProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Vault program. The pool will deposit/withdraw liquidity from the vault."
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token program."
          ]
        }
      ],
      "args": [
        {
          "name": "poolTokenAmount",
          "type": "u64"
        },
        {
          "name": "minimumOutAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "addImbalanceLiquidity",
      "docs": [
        "Deposit tokens to the pool in an imbalance ratio. Only supported by pool with stable swap curve."
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Pool account (PDA)"
          ]
        },
        {
          "name": "lpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of the pool"
          ]
        },
        {
          "name": "userPoolLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "user pool lp token account. lp will be burned from this account upon success liquidity removal."
          ]
        },
        {
          "name": "aVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "bVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault B. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "aVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token a. token a of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "bVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token b. token b of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "aVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of vault a"
          ]
        },
        {
          "name": "bVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of vault b"
          ]
        },
        {
          "name": "aTokenVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token vault account of vault A"
          ]
        },
        {
          "name": "bTokenVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token vault account of vault B"
          ]
        },
        {
          "name": "userAToken",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "User token A account. Token will be transfer from this account if it is add liquidity operation. Else, token will be transfer into this account."
          ]
        },
        {
          "name": "userBToken",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "User token B account. Token will be transfer from this account if it is add liquidity operation. Else, token will be transfer into this account."
          ]
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "User account. Must be owner of user_a_token, and user_b_token."
          ]
        },
        {
          "name": "vaultProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Vault program. the pool will deposit/withdraw liquidity from the vault."
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token program."
          ]
        }
      ],
      "args": [
        {
          "name": "minimumPoolTokenAmount",
          "type": "u64"
        },
        {
          "name": "tokenAAmount",
          "type": "u64"
        },
        {
          "name": "tokenBAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "removeBalanceLiquidity",
      "docs": [
        "Withdraw tokens from the pool in a balanced ratio. User will still able to withdraw from pool even the pool is disabled. This allow user to exit their liquidity when there's some unforeseen event happen."
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Pool account (PDA)"
          ]
        },
        {
          "name": "lpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of the pool"
          ]
        },
        {
          "name": "userPoolLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "user pool lp token account. lp will be burned from this account upon success liquidity removal."
          ]
        },
        {
          "name": "aVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "bVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault B. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "aVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token a. token a of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "bVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token b. token b of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "aVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of vault a"
          ]
        },
        {
          "name": "bVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of vault b"
          ]
        },
        {
          "name": "aTokenVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token vault account of vault A"
          ]
        },
        {
          "name": "bTokenVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token vault account of vault B"
          ]
        },
        {
          "name": "userAToken",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "User token A account. Token will be transfer from this account if it is add liquidity operation. Else, token will be transfer into this account."
          ]
        },
        {
          "name": "userBToken",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "User token B account. Token will be transfer from this account if it is add liquidity operation. Else, token will be transfer into this account."
          ]
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "User account. Must be owner of user_a_token, and user_b_token."
          ]
        },
        {
          "name": "vaultProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Vault program. the pool will deposit/withdraw liquidity from the vault."
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token program."
          ]
        }
      ],
      "args": [
        {
          "name": "poolTokenAmount",
          "type": "u64"
        },
        {
          "name": "minimumATokenOut",
          "type": "u64"
        },
        {
          "name": "minimumBTokenOut",
          "type": "u64"
        }
      ]
    },
    {
      "name": "addBalanceLiquidity",
      "docs": [
        "Deposit tokens to the pool in a balanced ratio."
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Pool account (PDA)"
          ]
        },
        {
          "name": "lpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of the pool"
          ]
        },
        {
          "name": "userPoolLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "user pool lp token account. lp will be burned from this account upon success liquidity removal."
          ]
        },
        {
          "name": "aVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "bVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault B. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "aVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token a. token a of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "bVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token b. token b of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "aVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of vault a"
          ]
        },
        {
          "name": "bVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of vault b"
          ]
        },
        {
          "name": "aTokenVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token vault account of vault A"
          ]
        },
        {
          "name": "bTokenVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token vault account of vault B"
          ]
        },
        {
          "name": "userAToken",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "User token A account. Token will be transfer from this account if it is add liquidity operation. Else, token will be transfer into this account."
          ]
        },
        {
          "name": "userBToken",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "User token B account. Token will be transfer from this account if it is add liquidity operation. Else, token will be transfer into this account."
          ]
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "User account. Must be owner of user_a_token, and user_b_token."
          ]
        },
        {
          "name": "vaultProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Vault program. the pool will deposit/withdraw liquidity from the vault."
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token program."
          ]
        }
      ],
      "args": [
        {
          "name": "poolTokenAmount",
          "type": "u64"
        },
        {
          "name": "maximumTokenAAmount",
          "type": "u64"
        },
        {
          "name": "maximumTokenBAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "setPoolFees",
      "docs": [
        "Update trading fee charged for liquidity provider, and admin."
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Pool account (PDA)"
          ]
        },
        {
          "name": "feeOperator",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Fee operator account"
          ]
        }
      ],
      "args": [
        {
          "name": "fees",
          "type": {
            "defined": "PoolFees"
          }
        },
        {
          "name": "newPartnerFeeNumerator",
          "type": "u64"
        }
      ]
    },
    {
      "name": "overrideCurveParam",
      "docs": [
        "Update swap curve parameters. This function do not allow update of curve type. For example: stable swap curve to constant product curve. Only supported by pool with stable swap curve.",
        "Only amp is allowed to be override. The other attributes of stable swap curve will be ignored."
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Pool account (PDA)"
          ]
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Admin account."
          ]
        }
      ],
      "args": [
        {
          "name": "curveType",
          "type": {
            "defined": "CurveType"
          }
        }
      ]
    },
    {
      "name": "getPoolInfo",
      "docs": [
        "Get the general information of the pool."
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Pool account (PDA)"
          ]
        },
        {
          "name": "lpMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "LP token mint of the pool"
          ]
        },
        {
          "name": "aVaultLp",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "bVaultLp",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "LP token account of vault B. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "aVault",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Vault account for token a. token a of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "bVault",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Vault account for token b. token b of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "aVaultLpMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "LP token mint of vault a"
          ]
        },
        {
          "name": "bVaultLpMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "LP token mint of vault b"
          ]
        }
      ],
      "args": []
    },
    {
      "name": "bootstrapLiquidity",
      "docs": [
        "Bootstrap the pool when liquidity is depleted."
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Pool account (PDA)"
          ]
        },
        {
          "name": "lpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of the pool"
          ]
        },
        {
          "name": "userPoolLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "user pool lp token account. lp will be burned from this account upon success liquidity removal."
          ]
        },
        {
          "name": "aVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "bVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault B. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "aVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token a. token a of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "bVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token b. token b of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "aVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of vault a"
          ]
        },
        {
          "name": "bVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of vault b"
          ]
        },
        {
          "name": "aTokenVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token vault account of vault A"
          ]
        },
        {
          "name": "bTokenVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token vault account of vault B"
          ]
        },
        {
          "name": "userAToken",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "User token A account. Token will be transfer from this account if it is add liquidity operation. Else, token will be transfer into this account."
          ]
        },
        {
          "name": "userBToken",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "User token B account. Token will be transfer from this account if it is add liquidity operation. Else, token will be transfer into this account."
          ]
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "User account. Must be owner of user_a_token, and user_b_token."
          ]
        },
        {
          "name": "vaultProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Vault program. the pool will deposit/withdraw liquidity from the vault."
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token program."
          ]
        }
      ],
      "args": [
        {
          "name": "tokenAAmount",
          "type": "u64"
        },
        {
          "name": "tokenBAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "createMintMetadata",
      "docs": [
        "Create mint metadata account for old pools"
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Pool account"
          ]
        },
        {
          "name": "lpMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "LP mint account of the pool"
          ]
        },
        {
          "name": "aVaultLp",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Vault A LP account of the pool"
          ]
        },
        {
          "name": "mintMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "System program."
          ]
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "Payer"
          ]
        }
      ],
      "args": []
    },
    {
      "name": "createLockEscrow",
      "docs": [
        "Create lock account"
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Pool account"
          ]
        },
        {
          "name": "lockEscrow",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Lock account"
          ]
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lpMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "LP token mint of the pool"
          ]
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "Payer account"
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "System program."
          ]
        }
      ],
      "args": []
    },
    {
      "name": "lock",
      "docs": [
        "Lock Lp token"
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Pool account"
          ]
        },
        {
          "name": "lpMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "LP token mint of the pool"
          ]
        },
        {
          "name": "lockEscrow",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Lock account"
          ]
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "Can be anyone"
          ]
        },
        {
          "name": "sourceTokens",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "owner lp token account"
          ]
        },
        {
          "name": "escrowVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Escrow vault"
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token program."
          ]
        },
        {
          "name": "aVault",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Vault account for token a. token a of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "bVault",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Vault account for token b. token b of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "aVaultLp",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "bVaultLp",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "LP token account of vault B. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "aVaultLpMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "LP token mint of vault a"
          ]
        },
        {
          "name": "bVaultLpMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "LP token mint of vault b"
          ]
        }
      ],
      "args": [
        {
          "name": "maxAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "claimFee",
      "docs": [
        "Claim fee"
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Pool account"
          ]
        },
        {
          "name": "lpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of the pool"
          ]
        },
        {
          "name": "lockEscrow",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Lock account"
          ]
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "Owner of lock account"
          ]
        },
        {
          "name": "sourceTokens",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "owner lp token account"
          ]
        },
        {
          "name": "escrowVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Escrow vault"
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token program."
          ]
        },
        {
          "name": "aTokenVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token vault account of vault A"
          ]
        },
        {
          "name": "bTokenVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token vault account of vault B"
          ]
        },
        {
          "name": "aVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token a. token a of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "bVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token b. token b of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "aVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "bVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault B. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "aVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of vault a"
          ]
        },
        {
          "name": "bVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of vault b"
          ]
        },
        {
          "name": "userAToken",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "User token A account. Token will be transfer from this account if it is add liquidity operation. Else, token will be transfer into this account."
          ]
        },
        {
          "name": "userBToken",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "User token B account. Token will be transfer from this account if it is add liquidity operation. Else, token will be transfer into this account."
          ]
        },
        {
          "name": "vaultProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Vault program. the pool will deposit/withdraw liquidity from the vault."
          ]
        }
      ],
      "args": [
        {
          "name": "maxAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "createConfig",
      "docs": [
        "Create config"
      ],
      "accounts": [
        {
          "name": "config",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "configParameters",
          "type": {
            "defined": "ConfigParameters"
          }
        }
      ]
    },
    {
      "name": "closeConfig",
      "docs": [
        "Close config"
      ],
      "accounts": [
        {
          "name": "config",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rentReceiver",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "initializePermissionlessConstantProductPoolWithConfig",
      "docs": [
        "Initialize permissionless pool with config"
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Pool account (PDA address)"
          ]
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of the pool"
          ]
        },
        {
          "name": "tokenAMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token A mint of the pool. Eg: USDT"
          ]
        },
        {
          "name": "tokenBMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token B mint of the pool. Eg: USDC"
          ]
        },
        {
          "name": "aVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token A. Token A of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "bVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token B. Token B of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "aTokenVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token vault account of vault A"
          ]
        },
        {
          "name": "bTokenVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token vault account of vault B"
          ]
        },
        {
          "name": "aVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of vault A"
          ]
        },
        {
          "name": "bVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of vault B"
          ]
        },
        {
          "name": "aVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "bVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault B. Used to receive/burn vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "payerTokenA",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Payer token account for pool token A mint. Used to bootstrap the pool with initial liquidity."
          ]
        },
        {
          "name": "payerTokenB",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Admin token account for pool token B mint. Used to bootstrap the pool with initial liquidity."
          ]
        },
        {
          "name": "payerPoolLp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "protocolTokenAFee",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Protocol fee token account for token A. Used to receive trading fee."
          ]
        },
        {
          "name": "protocolTokenBFee",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Protocol fee token account for token B. Used to receive trading fee."
          ]
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "Admin account. This account will be the admin of the pool, and the payer for PDA during initialize pool."
          ]
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Rent account."
          ]
        },
        {
          "name": "mintMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vaultProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Vault program. The pool will deposit/withdraw liquidity from the vault."
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token program."
          ]
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Associated token program."
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "System program."
          ]
        }
      ],
      "args": [
        {
          "name": "tokenAAmount",
          "type": "u64"
        },
        {
          "name": "tokenBAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initializePermissionlessConstantProductPoolWithConfig2",
      "docs": [
        "Initialize permissionless pool with config 2"
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Pool account (PDA address)"
          ]
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of the pool"
          ]
        },
        {
          "name": "tokenAMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token A mint of the pool. Eg: USDT"
          ]
        },
        {
          "name": "tokenBMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token B mint of the pool. Eg: USDC"
          ]
        },
        {
          "name": "aVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token A. Token A of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "bVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token B. Token B of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "aTokenVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token vault account of vault A"
          ]
        },
        {
          "name": "bTokenVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token vault account of vault B"
          ]
        },
        {
          "name": "aVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of vault A"
          ]
        },
        {
          "name": "bVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of vault B"
          ]
        },
        {
          "name": "aVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "bVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault B. Used to receive/burn vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "payerTokenA",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Payer token account for pool token A mint. Used to bootstrap the pool with initial liquidity."
          ]
        },
        {
          "name": "payerTokenB",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Admin token account for pool token B mint. Used to bootstrap the pool with initial liquidity."
          ]
        },
        {
          "name": "payerPoolLp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "protocolTokenAFee",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Protocol fee token account for token A. Used to receive trading fee."
          ]
        },
        {
          "name": "protocolTokenBFee",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Protocol fee token account for token B. Used to receive trading fee."
          ]
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "Admin account. This account will be the admin of the pool, and the payer for PDA during initialize pool."
          ]
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Rent account."
          ]
        },
        {
          "name": "mintMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vaultProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Vault program. The pool will deposit/withdraw liquidity from the vault."
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token program."
          ]
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Associated token program."
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "System program."
          ]
        }
      ],
      "args": [
        {
          "name": "tokenAAmount",
          "type": "u64"
        },
        {
          "name": "tokenBAmount",
          "type": "u64"
        },
        {
          "name": "activationPoint",
          "type": {
            "option": "u64"
          }
        }
      ]
    },
    {
      "name": "initializeCustomizablePermissionlessConstantProductPool",
      "docs": [
        "Initialize permissionless pool with customizable params"
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Pool account (PDA address)"
          ]
        },
        {
          "name": "lpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of the pool"
          ]
        },
        {
          "name": "tokenAMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token A mint of the pool. Eg: USDT"
          ]
        },
        {
          "name": "tokenBMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token B mint of the pool. Eg: USDC"
          ]
        },
        {
          "name": "aVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token A. Token A of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "bVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Vault account for token B. Token B of the pool will be deposit / withdraw from this vault account."
          ]
        },
        {
          "name": "aTokenVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token vault account of vault A"
          ]
        },
        {
          "name": "bTokenVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token vault account of vault B"
          ]
        },
        {
          "name": "aVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of vault A"
          ]
        },
        {
          "name": "bVaultLpMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token mint of vault B"
          ]
        },
        {
          "name": "aVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "bVaultLp",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "LP token account of vault B. Used to receive/burn vault LP upon deposit/withdraw from the vault."
          ]
        },
        {
          "name": "payerTokenA",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Payer token account for pool token A mint. Used to bootstrap the pool with initial liquidity."
          ]
        },
        {
          "name": "payerTokenB",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Admin token account for pool token B mint. Used to bootstrap the pool with initial liquidity."
          ]
        },
        {
          "name": "payerPoolLp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "protocolTokenAFee",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Protocol fee token account for token A. Used to receive trading fee."
          ]
        },
        {
          "name": "protocolTokenBFee",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Protocol fee token account for token B. Used to receive trading fee."
          ]
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "Admin account. This account will be the admin of the pool, and the payer for PDA during initialize pool."
          ]
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Rent account."
          ]
        },
        {
          "name": "mintMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vaultProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Vault program. The pool will deposit/withdraw liquidity from the vault."
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token program."
          ]
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Associated token program."
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "System program."
          ]
        }
      ],
      "args": [
        {
          "name": "tokenAAmount",
          "type": "u64"
        },
        {
          "name": "tokenBAmount",
          "type": "u64"
        },
        {
          "name": "params",
          "type": {
            "defined": "CustomizableParams"
          }
        }
      ]
    },
    {
      "name": "updateActivationPoint",
      "docs": [
        "Update activation slot"
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Pool account (PDA)"
          ]
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Admin account."
          ]
        }
      ],
      "args": [
        {
          "name": "newActivationPoint",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdrawProtocolFees",
      "docs": [
        "Withdraw protocol fee"
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Pool account (PDA)"
          ]
        },
        {
          "name": "aVaultLp",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "protocolTokenAFee",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "protocolTokenBFee",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasuryTokenA",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasuryTokenB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "setWhitelistedVault",
      "docs": [
        "Set whitelisted vault"
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "whitelistedVault",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "partnerClaimFee",
      "docs": [
        "Partner claim fee"
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Pool account (PDA)"
          ]
        },
        {
          "name": "aVaultLp",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "protocolTokenAFee",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "protocolTokenBFee",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "partnerTokenA",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "partnerTokenB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "partnerAuthority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "maxAmountA",
          "type": "u64"
        },
        {
          "name": "maxAmountB",
          "type": "u64"
        }
      ]
    },
    {
      "name": "updateConfig",
      "docs": [
        "Parner update config"
      ],
      "accounts": [
        {
          "name": "config",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolCreatorAuthority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "UpdateConfigParams"
          }
        }
      ]
    },
    {
      "name": "moveLockedLp",
      "docs": [
        "Move locked lp"
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Pool account"
          ]
        },
        {
          "name": "lpMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "LP token mint of the pool"
          ]
        },
        {
          "name": "fromLockEscrow",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "From lock account"
          ]
        },
        {
          "name": "toLockEscrow",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "To lock account"
          ]
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Owner of lock account"
          ]
        },
        {
          "name": "fromEscrowVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "From escrow vault"
          ]
        },
        {
          "name": "toEscrowVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "To escrow vault"
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token program."
          ]
        },
        {
          "name": "aVault",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bVault",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "aVaultLp",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bVaultLp",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "aVaultLpMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bVaultLpMint",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "maxAmount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "config",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "poolFees",
            "docs": [
              "Pool fee"
            ],
            "type": {
              "defined": "PoolFees"
            }
          },
          {
            "name": "activationDuration",
            "docs": [
              "Activation duration"
            ],
            "type": "u64"
          },
          {
            "name": "vaultConfigKey",
            "docs": [
              "Vault config key"
            ],
            "type": "publicKey"
          },
          {
            "name": "poolCreatorAuthority",
            "docs": [
              "Only pool_creator_authority can use the current config to initialize new pool. When it's Pubkey::default, it's a public config."
            ],
            "type": "publicKey"
          },
          {
            "name": "activationType",
            "docs": [
              "Activation type"
            ],
            "type": "u8"
          },
          {
            "name": "partnerFeeNumerator",
            "docs": [
              "partner fee numerator"
            ],
            "type": "u64"
          },
          {
            "name": "feeCurve",
            "docs": [
              "Fee curve"
            ],
            "type": {
              "defined": "FeeCurveInfoFromDuration"
            }
          },
          {
            "name": "padding",
            "docs": [
              "Padding for further use"
            ],
            "type": {
              "array": [
                "u8",
                182
              ]
            }
          }
        ]
      }
    },
    {
      "name": "lockEscrow",
      "docs": [
        "State of lock escrow account"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pool",
            "docs": [
              "Pool address"
            ],
            "type": "publicKey"
          },
          {
            "name": "owner",
            "docs": [
              "Owner address"
            ],
            "type": "publicKey"
          },
          {
            "name": "escrowVault",
            "docs": [
              "Vault address, store the lock user lock"
            ],
            "type": "publicKey"
          },
          {
            "name": "bump",
            "docs": [
              "bump, used to sign"
            ],
            "type": "u8"
          },
          {
            "name": "totalLockedAmount",
            "docs": [
              "Total locked amount"
            ],
            "type": "u64"
          },
          {
            "name": "lpPerToken",
            "docs": [
              "Lp per token, virtual price of lp token"
            ],
            "type": "u128"
          },
          {
            "name": "unclaimedFeePending",
            "docs": [
              "Unclaimed fee pending"
            ],
            "type": "u64"
          },
          {
            "name": "aFee",
            "docs": [
              "Total a fee claimed so far"
            ],
            "type": "u64"
          },
          {
            "name": "bFee",
            "docs": [
              "Total b fee claimed so far"
            ],
            "type": "u64"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                7
              ]
            }
          }
        ]
      }
    },
    {
      "name": "pool",
      "docs": [
        "State of pool account"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lpMint",
            "docs": [
              "LP token mint of the pool"
            ],
            "type": "publicKey"
          },
          {
            "name": "tokenAMint",
            "docs": [
              "Token A mint of the pool. Eg: USDT"
            ],
            "type": "publicKey"
          },
          {
            "name": "tokenBMint",
            "docs": [
              "Token B mint of the pool. Eg: USDC"
            ],
            "type": "publicKey"
          },
          {
            "name": "aVault",
            "docs": [
              "Vault account for token A. Token A of the pool will be deposit / withdraw from this vault account."
            ],
            "type": "publicKey"
          },
          {
            "name": "bVault",
            "docs": [
              "Vault account for token B. Token B of the pool will be deposit / withdraw from this vault account."
            ],
            "type": "publicKey"
          },
          {
            "name": "aVaultLp",
            "docs": [
              "LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
            ],
            "type": "publicKey"
          },
          {
            "name": "bVaultLp",
            "docs": [
              "LP token account of vault B. Used to receive/burn the vault LP upon deposit/withdraw from the vault."
            ],
            "type": "publicKey"
          },
          {
            "name": "aVaultLpBump",
            "docs": [
              "\"A\" vault lp bump. Used to create signer seeds."
            ],
            "type": "u8"
          },
          {
            "name": "enabled",
            "docs": [
              "Flag to determine whether the pool is enabled, or disabled."
            ],
            "type": "bool"
          },
          {
            "name": "protocolTokenAFee",
            "docs": [
              "Protocol fee token account for token A. Used to receive trading fee."
            ],
            "type": "publicKey"
          },
          {
            "name": "protocolTokenBFee",
            "docs": [
              "Protocol fee token account for token B. Used to receive trading fee."
            ],
            "type": "publicKey"
          },
          {
            "name": "feeLastUpdatedAt",
            "docs": [
              "Fee last updated timestamp"
            ],
            "type": "u64"
          },
          {
            "name": "padding0",
            "type": {
              "array": [
                "u8",
                24
              ]
            }
          },
          {
            "name": "fees",
            "docs": [
              "Store the fee charges setting."
            ],
            "type": {
              "defined": "PoolFees"
            }
          },
          {
            "name": "poolType",
            "docs": [
              "Pool type"
            ],
            "type": {
              "defined": "PoolType"
            }
          },
          {
            "name": "stake",
            "docs": [
              "Stake pubkey of SPL stake pool"
            ],
            "type": "publicKey"
          },
          {
            "name": "totalLockedLp",
            "docs": [
              "Total locked lp token"
            ],
            "type": "u64"
          },
          {
            "name": "bootstrapping",
            "docs": [
              "bootstrapping config"
            ],
            "type": {
              "defined": "Bootstrapping"
            }
          },
          {
            "name": "partnerInfo",
            "docs": [
              "partner info"
            ],
            "type": {
              "defined": "PartnerInfo"
            }
          },
          {
            "name": "feeCurve",
            "docs": [
              "fee curve"
            ],
            "type": {
              "defined": "FeeCurveInfo"
            }
          },
          {
            "name": "isUpdateFeeCompleted",
            "docs": [
              "Flag to indicate that fee update onchain is completed"
            ],
            "type": "bool"
          },
          {
            "name": "padding",
            "docs": [
              "Padding for future pool field"
            ],
            "type": {
              "defined": "Padding"
            }
          },
          {
            "name": "curveType",
            "docs": [
              "The type of the swap curve supported by the pool."
            ],
            "type": {
              "defined": "CurveType"
            }
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u8",
                19
              ]
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "TokenMultiplier",
      "docs": [
        "Multiplier for the pool token. Used to normalized token with different decimal into the same precision."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tokenAMultiplier",
            "docs": [
              "Multiplier for token A of the pool."
            ],
            "type": "u64"
          },
          {
            "name": "tokenBMultiplier",
            "docs": [
              "Multiplier for token B of the pool."
            ],
            "type": "u64"
          },
          {
            "name": "precisionFactor",
            "docs": [
              "Record the highest token decimal in the pool. For example, Token A is 6 decimal, token B is 9 decimal. This will save value of 9."
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "PoolFees",
      "docs": [
        "Information regarding fee charges"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tradeFeeNumerator",
            "docs": [
              "Trade fees are extra token amounts that are held inside the token",
              "accounts during a trade, making the value of liquidity tokens rise.",
              "Trade fee numerator"
            ],
            "type": "u64"
          },
          {
            "name": "tradeFeeDenominator",
            "docs": [
              "Trade fee denominator"
            ],
            "type": "u64"
          },
          {
            "name": "protocolTradeFeeNumerator",
            "docs": [
              "Protocol trading fees are extra token amounts that are held inside the token",
              "accounts during a trade, with the equivalent in pool tokens minted to",
              "the protocol of the program.",
              "Protocol trade fee numerator"
            ],
            "type": "u64"
          },
          {
            "name": "protocolTradeFeeDenominator",
            "docs": [
              "Protocol trade fee denominator"
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "Depeg",
      "docs": [
        "Contains information for depeg pool"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "baseVirtualPrice",
            "docs": [
              "The virtual price of staking / interest bearing token"
            ],
            "type": "u64"
          },
          {
            "name": "baseCacheUpdated",
            "docs": [
              "The last time base_virtual_price is updated"
            ],
            "type": "u64"
          },
          {
            "name": "depegType",
            "docs": [
              "Type of the depeg pool"
            ],
            "type": {
              "defined": "DepegType"
            }
          }
        ]
      }
    },
    {
      "name": "ConfigParameters",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tradeFeeNumerator",
            "type": "u64"
          },
          {
            "name": "protocolTradeFeeNumerator",
            "type": "u64"
          },
          {
            "name": "activationDuration",
            "type": "u64"
          },
          {
            "name": "vaultConfigKey",
            "type": "publicKey"
          },
          {
            "name": "poolCreatorAuthority",
            "type": "publicKey"
          },
          {
            "name": "activationType",
            "type": "u8"
          },
          {
            "name": "index",
            "type": "u64"
          },
          {
            "name": "partnerFeeNumerator",
            "type": "u64"
          },
          {
            "name": "feeCurve",
            "type": {
              "defined": "FeeCurveInfoFromDuration"
            }
          }
        ]
      }
    },
    {
      "name": "CustomizableParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tradeFeeNumerator",
            "docs": [
              "Trading fee."
            ],
            "type": "u32"
          },
          {
            "name": "activationPoint",
            "docs": [
              "The pool start trading."
            ],
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "hasAlphaVault",
            "docs": [
              "Whether the pool support alpha vault"
            ],
            "type": "bool"
          },
          {
            "name": "activationType",
            "docs": [
              "Activation type"
            ],
            "type": "u8"
          },
          {
            "name": "feeCurve",
            "docs": [
              "Fee curve info"
            ],
            "type": {
              "defined": "FeeCurveInfoFromDuration"
            }
          },
          {
            "name": "padding",
            "docs": [
              "Padding"
            ],
            "type": {
              "array": [
                "u8",
                53
              ]
            }
          }
        ]
      }
    },
    {
      "name": "UpdateConfigParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tradeFeeNumerator",
            "type": "u64"
          },
          {
            "name": "feeCurve",
            "type": {
              "defined": "FeeCurveInfoFromDuration"
            }
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                50
              ]
            }
          }
        ]
      }
    },
    {
      "name": "FeeCurveInfoFromDuration",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "feeCurveType",
            "docs": [
              "Fee curve type, could be flat or linear"
            ],
            "type": {
              "defined": "FeeCurveType"
            }
          },
          {
            "name": "points",
            "docs": [
              "Fee curve point"
            ],
            "type": {
              "array": [
                {
                  "defined": "FeeBpsFromDuration"
                },
                6
              ]
            }
          }
        ]
      }
    },
    {
      "name": "FeeBpsFromDuration",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "feeBps",
            "type": "u16"
          },
          {
            "name": "activatedDuration",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "Padding",
      "docs": [
        "Padding for future pool fields"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "padding0",
            "docs": [
              "Padding 0"
            ],
            "type": {
              "array": [
                "u8",
                6
              ]
            }
          },
          {
            "name": "padding1",
            "docs": [
              "Padding 1"
            ],
            "type": {
              "array": [
                "u64",
                12
              ]
            }
          },
          {
            "name": "padding2",
            "docs": [
              "Padding 2"
            ],
            "type": {
              "array": [
                "u64",
                21
              ]
            }
          }
        ]
      }
    },
    {
      "name": "PartnerInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "feeNumerator",
            "type": "u64"
          },
          {
            "name": "partnerAuthority",
            "type": "publicKey"
          },
          {
            "name": "pendingFeeA",
            "type": "u64"
          },
          {
            "name": "pendingFeeB",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "FeeCurveInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "feeCurveType",
            "docs": [
              "Fee curve type, could be flat or linear"
            ],
            "type": {
              "defined": "FeeCurveType"
            }
          },
          {
            "name": "points",
            "docs": [
              "Fee curve point"
            ],
            "type": {
              "array": [
                {
                  "defined": "FeeBpsFromActivatedPoint"
                },
                7
              ]
            }
          }
        ]
      }
    },
    {
      "name": "FeeBpsFromActivatedPoint",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "feeBps",
            "type": "u16"
          },
          {
            "name": "activatedPoint",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "Bootstrapping",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "activationPoint",
            "docs": [
              "Activation point, can be slot or timestamp"
            ],
            "type": "u64"
          },
          {
            "name": "whitelistedVault",
            "docs": [
              "Whitelisted vault to be able to buy pool before activation_point"
            ],
            "type": "publicKey"
          },
          {
            "name": "poolCreator",
            "docs": [
              "Need to store pool creator in lauch pool, so they can modify liquidity before activation_point"
            ],
            "type": "publicKey"
          },
          {
            "name": "activationType",
            "docs": [
              "Activation type, 0 means by slot, 1 means by timestamp"
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "ActivationType",
      "docs": [
        "Type of the activation"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Slot"
          },
          {
            "name": "Timestamp"
          }
        ]
      }
    },
    {
      "name": "RoundDirection",
      "docs": [
        "Rounding direction"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Floor"
          },
          {
            "name": "Ceiling"
          }
        ]
      }
    },
    {
      "name": "TradeDirection",
      "docs": [
        "Trade (swap) direction"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "AtoB"
          },
          {
            "name": "BtoA"
          }
        ]
      }
    },
    {
      "name": "NewCurveType",
      "docs": [
        "Type of the swap curve"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "ConstantProduct"
          },
          {
            "name": "Stable",
            "fields": [
              {
                "name": "amp",
                "docs": [
                  "Amplification coefficient"
                ],
                "type": "u64"
              },
              {
                "name": "token_multiplier",
                "docs": [
                  "Multiplier for the pool token. Used to normalized token with different decimal into the same precision."
                ],
                "type": {
                  "defined": "TokenMultiplier"
                }
              },
              {
                "name": "depeg",
                "docs": [
                  "Depeg pool information. Contains functions to allow token amount to be repeg using stake / interest bearing token virtual price"
                ],
                "type": {
                  "defined": "Depeg"
                }
              },
              {
                "name": "last_amp_updated_timestamp",
                "docs": [
                  "The last amp updated timestamp. Used to prevent update_curve_info called infinitely many times within a short period"
                ],
                "type": "u64"
              }
            ]
          },
          {
            "name": "NewCurve",
            "fields": [
              {
                "name": "field_one",
                "type": "u64"
              },
              {
                "name": "field_two",
                "type": "u64"
              }
            ]
          }
        ]
      }
    },
    {
      "name": "CurveType",
      "docs": [
        "Type of the swap curve"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "ConstantProduct"
          },
          {
            "name": "Stable",
            "fields": [
              {
                "name": "amp",
                "docs": [
                  "Amplification coefficient"
                ],
                "type": "u64"
              },
              {
                "name": "token_multiplier",
                "docs": [
                  "Multiplier for the pool token. Used to normalized token with different decimal into the same precision."
                ],
                "type": {
                  "defined": "TokenMultiplier"
                }
              },
              {
                "name": "depeg",
                "docs": [
                  "Depeg pool information. Contains functions to allow token amount to be repeg using stake / interest bearing token virtual price"
                ],
                "type": {
                  "defined": "Depeg"
                }
              },
              {
                "name": "last_amp_updated_timestamp",
                "docs": [
                  "The last amp updated timestamp. Used to prevent update_curve_info called infinitely many times within a short period"
                ],
                "type": "u64"
              }
            ]
          }
        ]
      }
    },
    {
      "name": "DepegType",
      "docs": [
        "Type of depeg pool"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "None"
          },
          {
            "name": "Marinade"
          },
          {
            "name": "Lido"
          },
          {
            "name": "SplStake"
          }
        ]
      }
    },
    {
      "name": "Rounding",
      "docs": [
        "Round up, down"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Up"
          },
          {
            "name": "Down"
          }
        ]
      }
    },
    {
      "name": "PoolType",
      "docs": [
        "Pool type"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Permissioned"
          },
          {
            "name": "Permissionless"
          }
        ]
      }
    },
    {
      "name": "FeeCurveType",
      "docs": [
        "Fee curve type"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "None"
          },
          {
            "name": "Flat"
          },
          {
            "name": "Linear"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "AddLiquidity",
      "fields": [
        {
          "name": "lpMintAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "tokenAAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "tokenBAmount",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "RemoveLiquidity",
      "fields": [
        {
          "name": "lpUnmintAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "tokenAOutAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "tokenBOutAmount",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "BootstrapLiquidity",
      "fields": [
        {
          "name": "lpMintAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "tokenAAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "tokenBAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "pool",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "Swap",
      "fields": [
        {
          "name": "inAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "outAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "tradeFee",
          "type": "u64",
          "index": false
        },
        {
          "name": "protocolFee",
          "type": "u64",
          "index": false
        },
        {
          "name": "hostFee",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "SetPoolFees",
      "fields": [
        {
          "name": "tradeFeeNumerator",
          "type": "u64",
          "index": false
        },
        {
          "name": "tradeFeeDenominator",
          "type": "u64",
          "index": false
        },
        {
          "name": "protocolTradeFeeNumerator",
          "type": "u64",
          "index": false
        },
        {
          "name": "protocolTradeFeeDenominator",
          "type": "u64",
          "index": false
        },
        {
          "name": "pool",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "PoolInfo",
      "fields": [
        {
          "name": "tokenAAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "tokenBAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "virtualPrice",
          "type": "f64",
          "index": false
        },
        {
          "name": "currentTimestamp",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "TransferAdmin",
      "fields": [
        {
          "name": "admin",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "newAdmin",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "pool",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "OverrideCurveParam",
      "fields": [
        {
          "name": "newAmp",
          "type": "u64",
          "index": false
        },
        {
          "name": "updatedTimestamp",
          "type": "u64",
          "index": false
        },
        {
          "name": "pool",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "PoolCreated",
      "fields": [
        {
          "name": "lpMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tokenAMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tokenBMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "poolType",
          "type": {
            "defined": "PoolType"
          },
          "index": false
        },
        {
          "name": "pool",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "PoolEnabled",
      "fields": [
        {
          "name": "pool",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "enabled",
          "type": "bool",
          "index": false
        }
      ]
    },
    {
      "name": "MigrateFeeAccount",
      "fields": [
        {
          "name": "pool",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "newAdminTokenAFee",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "newAdminTokenBFee",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tokenAAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "tokenBAmount",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "CreateLockEscrow",
      "fields": [
        {
          "name": "pool",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "owner",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "Lock",
      "fields": [
        {
          "name": "pool",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "owner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "ClaimFee",
      "fields": [
        {
          "name": "pool",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "owner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        },
        {
          "name": "aFee",
          "type": "u64",
          "index": false
        },
        {
          "name": "bFee",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "CreateConfig",
      "fields": [
        {
          "name": "tradeFeeNumerator",
          "type": "u64",
          "index": false
        },
        {
          "name": "protocolTradeFeeNumerator",
          "type": "u64",
          "index": false
        },
        {
          "name": "config",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "CloseConfig",
      "fields": [
        {
          "name": "config",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "WithdrawProtocolFees",
      "fields": [
        {
          "name": "pool",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "protocolAFee",
          "type": "u64",
          "index": false
        },
        {
          "name": "protocolBFee",
          "type": "u64",
          "index": false
        },
        {
          "name": "protocolAFeeOwner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "protocolBFeeOwner",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "PartnerClaimFees",
      "fields": [
        {
          "name": "pool",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "feeA",
          "type": "u64",
          "index": false
        },
        {
          "name": "feeB",
          "type": "u64",
          "index": false
        },
        {
          "name": "partner",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "UpdateConfig",
      "fields": [
        {
          "name": "config",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tradeFeeNumerator",
          "type": "u64",
          "index": false
        },
        {
          "name": "feeCurve",
          "type": {
            "defined": "FeeCurveInfoFromDuration"
          },
          "index": false
        }
      ]
    },
    {
      "name": "MoveLockedLp",
      "fields": [
        {
          "name": "pool",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "fromLockEscrow",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "toLockEscrow",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "MathOverflow",
      "msg": "Math operation overflow"
    },
    {
      "code": 6001,
      "name": "InvalidFee",
      "msg": "Invalid fee setup"
    },
    {
      "code": 6002,
      "name": "InvalidInvariant",
      "msg": "Invalid invariant d"
    },
    {
      "code": 6003,
      "name": "FeeCalculationFailure",
      "msg": "Fee calculation failure"
    },
    {
      "code": 6004,
      "name": "ExceededSlippage",
      "msg": "Exceeded slippage tolerance"
    },
    {
      "code": 6005,
      "name": "InvalidCalculation",
      "msg": "Invalid curve calculation"
    },
    {
      "code": 6006,
      "name": "ZeroTradingTokens",
      "msg": "Given pool token amount results in zero trading tokens"
    },
    {
      "code": 6007,
      "name": "ConversionError",
      "msg": "Math conversion overflow"
    },
    {
      "code": 6008,
      "name": "FaultyLpMint",
      "msg": "LP mint authority must be 'A' vault lp, without freeze authority, and 0 supply"
    },
    {
      "code": 6009,
      "name": "MismatchedTokenMint",
      "msg": "Token mint mismatched"
    },
    {
      "code": 6010,
      "name": "MismatchedLpMint",
      "msg": "LP mint mismatched"
    },
    {
      "code": 6011,
      "name": "MismatchedOwner",
      "msg": "Invalid lp token owner"
    },
    {
      "code": 6012,
      "name": "InvalidVaultAccount",
      "msg": "Invalid vault account"
    },
    {
      "code": 6013,
      "name": "InvalidVaultLpAccount",
      "msg": "Invalid vault lp account"
    },
    {
      "code": 6014,
      "name": "InvalidPoolLpMintAccount",
      "msg": "Invalid pool lp mint account"
    },
    {
      "code": 6015,
      "name": "PoolDisabled",
      "msg": "Pool disabled"
    },
    {
      "code": 6016,
      "name": "InvalidAdminAccount",
      "msg": "Invalid admin account"
    },
    {
      "code": 6017,
      "name": "InvalidProtocolFeeAccount",
      "msg": "Invalid protocol fee account"
    },
    {
      "code": 6018,
      "name": "SameAdminAccount",
      "msg": "Same admin account"
    },
    {
      "code": 6019,
      "name": "IdenticalSourceDestination",
      "msg": "Identical user source and destination token account"
    },
    {
      "code": 6020,
      "name": "ApyCalculationError",
      "msg": "Apy calculation error"
    },
    {
      "code": 6021,
      "name": "InsufficientSnapshot",
      "msg": "Insufficient virtual price snapshot"
    },
    {
      "code": 6022,
      "name": "NonUpdatableCurve",
      "msg": "Current curve is non-updatable"
    },
    {
      "code": 6023,
      "name": "MisMatchedCurve",
      "msg": "New curve is mismatched with old curve"
    },
    {
      "code": 6024,
      "name": "InvalidAmplification",
      "msg": "Amplification is invalid"
    },
    {
      "code": 6025,
      "name": "UnsupportedOperation",
      "msg": "Operation is not supported"
    },
    {
      "code": 6026,
      "name": "ExceedMaxAChanges",
      "msg": "Exceed max amplification changes"
    },
    {
      "code": 6027,
      "name": "InvalidRemainingAccountsLen",
      "msg": "Invalid remaining accounts length"
    },
    {
      "code": 6028,
      "name": "InvalidRemainingAccounts",
      "msg": "Invalid remaining account"
    },
    {
      "code": 6029,
      "name": "MismatchedDepegMint",
      "msg": "Token mint B doesn't matches depeg type token mint"
    },
    {
      "code": 6030,
      "name": "InvalidApyAccount",
      "msg": "Invalid APY account"
    },
    {
      "code": 6031,
      "name": "InvalidTokenMultiplier",
      "msg": "Invalid token multiplier"
    },
    {
      "code": 6032,
      "name": "InvalidDepegInformation",
      "msg": "Invalid depeg information"
    },
    {
      "code": 6033,
      "name": "UpdateTimeConstraint",
      "msg": "Update time constraint violated"
    },
    {
      "code": 6034,
      "name": "ExceedMaxFeeBps",
      "msg": "Exceeded max fee bps"
    },
    {
      "code": 6035,
      "name": "InvalidAdmin",
      "msg": "Invalid admin"
    },
    {
      "code": 6036,
      "name": "PoolIsNotPermissioned",
      "msg": "Pool is not permissioned"
    },
    {
      "code": 6037,
      "name": "InvalidDepositAmount",
      "msg": "Invalid deposit amount"
    },
    {
      "code": 6038,
      "name": "InvalidFeeOwner",
      "msg": "Invalid fee owner"
    },
    {
      "code": 6039,
      "name": "NonDepletedPool",
      "msg": "Pool is not depleted"
    },
    {
      "code": 6040,
      "name": "AmountNotPeg",
      "msg": "Token amount is not 1:1"
    },
    {
      "code": 6041,
      "name": "AmountIsZero",
      "msg": "Amount is zero"
    },
    {
      "code": 6042,
      "name": "TypeCastFailed",
      "msg": "Type cast error"
    },
    {
      "code": 6043,
      "name": "AmountIsNotEnough",
      "msg": "Amount is not enough"
    },
    {
      "code": 6044,
      "name": "InvalidActivationDuration",
      "msg": "Invalid activation duration"
    },
    {
      "code": 6045,
      "name": "PoolIsNotLaunchPool",
      "msg": "Pool is not launch pool"
    },
    {
      "code": 6046,
      "name": "UnableToModifyActivationPoint",
      "msg": "Unable to modify activation point"
    },
    {
      "code": 6047,
      "name": "InvalidAuthorityToCreateThePool",
      "msg": "Invalid authority to create the pool"
    },
    {
      "code": 6048,
      "name": "InvalidActivationType",
      "msg": "Invalid activation type"
    },
    {
      "code": 6049,
      "name": "InvalidActivationPoint",
      "msg": "Invalid activation point"
    },
    {
      "code": 6050,
      "name": "PreActivationSwapStarted",
      "msg": "Pre activation swap window started"
    },
    {
      "code": 6051,
      "name": "InvalidPoolType",
      "msg": "Invalid pool type"
    },
    {
      "code": 6052,
      "name": "InvalidQuoteMint",
      "msg": "Quote token must be SOL,USDC"
    },
    {
      "code": 6053,
      "name": "InvalidFeeCurve",
      "msg": "Invalid fee curve"
    }
  ]
};
