/**
 *
 * This file is auto-generated. Do not edit manually: changes may be erased.
 * Generated by Aqua compiler: https://github.com/fluencelabs/aqua/.
 * If you find any bugs, please write an issue on GitHub: https://github.com/fluencelabs/aqua/issues
 * Aqua version: 0.5.1-249
 *
 */
import { Fluence, FluencePeer } from '@fluencelabs/fluence';
import {
    CallParams,
    callFunction,
    registerService,
} from '@fluencelabs/fluence/dist/internal/compilerSupport/v2';


// Services

export interface TrxDef {
    broadcast: (signedTransaction: string, callParams: CallParams<'signedTransaction'>) => string | Promise<string>;
    broadcastHex: (signedHexTransaction: string, callParams: CallParams<'signedHexTransaction'>) => string | Promise<string>;
    freezeBalance: (amount: number, duration: number, resource: string, receiverAddress: string, callParams: CallParams<'amount' | 'duration' | 'resource' | 'receiverAddress'>) => string | Promise<string>;
    getAccount: (address: string, callParams: CallParams<'address'>) => string | Promise<string>;
    getAccountById: (id: string, callParams: CallParams<'id'>) => string | Promise<string>;
    getAccountInfoById: (id: string, confirmed: boolean, callParams: CallParams<'id' | 'confirmed'>) => string | Promise<string>;
    getAccountResources: (address: string, callParams: CallParams<'address'>) => string | Promise<string>;
    getApprovedList: (transaction: string, callParams: CallParams<'transaction'>) => string | Promise<string>;
    getBalance: (address: string, callParams: CallParams<'address'>) => string | Promise<string>;
    getBandwidth: (address: string, callParams: CallParams<'address'>) => string | Promise<string>;
    getBlock: (block: string, callParams: CallParams<'block'>) => string | Promise<string>;
    getBlockByHash: (blockHash: string, callParams: CallParams<'blockHash'>) => string | Promise<string>;
    getBlockByNumber: (blockID: number, callParams: CallParams<'blockID'>) => string | Promise<string>;
    getBlockRange: (start: number, end: number, callParams: CallParams<'start' | 'end'>) => string | Promise<string>;
    getBlockTransactionCount: (block: string, callParams: CallParams<'block'>) => number | Promise<number>;
    getBrokerage: (address: string, callParams: CallParams<'address'>) => string | Promise<string>;
    getChainParameters: (callParams: CallParams<null>) => string | Promise<string>;
    getConfirmedCurrentBlock: (callParams: CallParams<null>) => string | Promise<string>;
    getConfirmedTransaction: (transactionID: string, callParams: CallParams<'transactionID'>) => string | Promise<string>;
    getContract: (address: string, callParams: CallParams<'address'>) => string | Promise<string>;
    getCurrentBlock: (callParams: CallParams<null>) => string | Promise<string>;
    getExchangeByID: (id: number, callParams: CallParams<'id'>) => string | Promise<string>;
    getNodeInfo: (callParams: CallParams<null>) => string | Promise<string>;
    getProposal: (proposalID: number, callParams: CallParams<'proposalID'>) => string | Promise<string>;
    getReward: (address: string, callParams: CallParams<'address'>) => string | Promise<string>;
    getSignWeight: (transaction: string, permissionId: string, callParams: CallParams<'transaction' | 'permissionId'>) => string | Promise<string>;
    getTokenByID: (id: string, callParams: CallParams<'id'>) => string | Promise<string>;
    getTokenFromID: (id: string, callParams: CallParams<'id'>) => string | Promise<string>;
    getTokenListByName: (name: string, callParams: CallParams<'name'>) => string | Promise<string>;
    getTokensIssuedByAddress: (address: string, callParams: CallParams<'address'>) => string | Promise<string>;
    getTransaction: (transactionID: string, callParams: CallParams<'transactionID'>) => string | Promise<string>;
    getTransactionFromBlock: (index: number, block: string, callParams: CallParams<'index' | 'block'>) => string | Promise<string>;
    getTransactionInfo: (transactionID: string, callParams: CallParams<'transactionID'>) => string | Promise<string>;
    getTransactionsFromAddress: (address: string, limit: number, offset: number, callParams: CallParams<'address' | 'limit' | 'offset'>) => string | Promise<string>;
    getTransactionsRelated: (address: string, direction: string, limit: number, offset: number, callParams: CallParams<'address' | 'direction' | 'limit' | 'offset'>) => string | Promise<string>;
    getTransactionsToAddress: (address: string, limit: number, offset: number, callParams: CallParams<'address' | 'limit' | 'offset'>) => string | Promise<string>;
    getUnconfirmedAccount: (address: string, callParams: CallParams<'address'>) => string | Promise<string>;
    getUnconfirmedAccountById: (id: string, callParams: CallParams<'id'>) => string | Promise<string>;
    getUnconfirmedBalance: (address: string, callParams: CallParams<'address'>) => string | Promise<string>;
    getUnconfirmedBrokerage: (address: string, callParams: CallParams<'address'>) => string | Promise<string>;
    getUnconfirmedReward: (address: string, callParams: CallParams<'address'>) => string | Promise<string>;
    getUnconfirmedTransactionInfo: (transactionID: string, callParams: CallParams<'transactionID'>) => string | Promise<string>;
    listExchanges: (callParams: CallParams<null>) => string | Promise<string>;
    listExchangesPaginated: (limit: number | null, offset: number | null, callParams: CallParams<'limit' | 'offset'>) => string | Promise<string>;
    listNodes: (callParams: CallParams<null>) => string | Promise<string>;
    listProposals: (callParams: CallParams<null>) => string | Promise<string>;
    listSuperRepresentatives: (callParams: CallParams<null>) => string | Promise<string>;
    listTokens: (limit: number | null, offset: number | null, callParams: CallParams<'limit' | 'offset'>) => string | Promise<string>;
    multiSign: (transaction: string, privateKey: string, permissionId: string | null, callParams: CallParams<'transaction' | 'privateKey' | 'permissionId'>) => string | Promise<string>;
    send: (to: string, amount: number, callParams: CallParams<'to' | 'amount'>) => string | Promise<string>;
    sendAsset: (to: string, amount: number, tokenID: string, callParams: CallParams<'to' | 'amount' | 'tokenID'>) => string | Promise<string>;
    sendHexTransaction: (signedHexTransaction: string, callParams: CallParams<'signedHexTransaction'>) => string | Promise<string>;
    sendRawTransaction: (signedTransaction: string, callParams: CallParams<'signedTransaction'>) => string | Promise<string>;
    sendToken: (to: string, amount: number, tokenID: string, callParams: CallParams<'to' | 'amount' | 'tokenID'>) => string | Promise<string>;
    sendTransaction: (to: string, amount: number, callParams: CallParams<'to' | 'amount'>) => string | Promise<string>;
    sendTrx: (to: string, amount: number, callParams: CallParams<'to' | 'amount'>) => string | Promise<string>;
    sign: (transaction: string, privateKey: string, useTronHeader: boolean | null, multisig: boolean | null, callParams: CallParams<'transaction' | 'privateKey' | 'useTronHeader' | 'multisig'>) => string | Promise<string>;
    signMessage: (transaction: string, privateKey: string, useTronHeader: boolean | null, multisig: boolean | null, callParams: CallParams<'transaction' | 'privateKey' | 'useTronHeader' | 'multisig'>) => string | Promise<string>;
    signString: (message: string, privateKey: string, useTronHeader: boolean | null, callParams: CallParams<'message' | 'privateKey' | 'useTronHeader'>) => string | Promise<string>;
    signTransaction: (transaction: string, privateKey: string, useTronHeader: boolean | null, multisig: boolean | null, callParams: CallParams<'transaction' | 'privateKey' | 'useTronHeader' | 'multisig'>) => string | Promise<string>;
    timeUntilNextVoteCycle: (callParams: CallParams<null>) => string | Promise<string>;
    unfreezeBalance: (resource: string, receiverAddress: string, callParams: CallParams<'resource' | 'receiverAddress'>) => string | Promise<string>;
    updateAccount: (accountName: string, callParams: CallParams<'accountName'>) => string | Promise<string>;
    verifyMessage: (message: string, signature: string, address: string, useTronHeader: boolean | null, callParams: CallParams<'message' | 'signature' | 'address' | 'useTronHeader'>) => string | Promise<string>;
    verifySignature: (message: string, address: string, signature: string, useTronHeader: boolean | null, callParams: CallParams<'message' | 'address' | 'signature' | 'useTronHeader'>) => string | Promise<string>;
}
export function registerTrx(service: TrxDef): void;
export function registerTrx(serviceId: string, service: TrxDef): void;
export function registerTrx(peer: FluencePeer, service: TrxDef): void;
export function registerTrx(peer: FluencePeer, serviceId: string, service: TrxDef): void;
       

export function registerTrx(...args: any) {
    registerService(
        args,
        {
    "defaultServiceId" : "Trx",
    "functions" : [
        {
            "functionName" : "broadcast",
            "argDefs" : [
                {
                    "name" : "signedTransaction",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "broadcastHex",
            "argDefs" : [
                {
                    "name" : "signedHexTransaction",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "freezeBalance",
            "argDefs" : [
                {
                    "name" : "amount",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "duration",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "resource",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "receiverAddress",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "getAccount",
            "argDefs" : [
                {
                    "name" : "address",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "getAccountById",
            "argDefs" : [
                {
                    "name" : "id",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "getAccountInfoById",
            "argDefs" : [
                {
                    "name" : "id",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "confirmed",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "getAccountResources",
            "argDefs" : [
                {
                    "name" : "address",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "getApprovedList",
            "argDefs" : [
                {
                    "name" : "transaction",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "getBalance",
            "argDefs" : [
                {
                    "name" : "address",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "getBandwidth",
            "argDefs" : [
                {
                    "name" : "address",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "getBlock",
            "argDefs" : [
                {
                    "name" : "block",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "getBlockByHash",
            "argDefs" : [
                {
                    "name" : "blockHash",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "getBlockByNumber",
            "argDefs" : [
                {
                    "name" : "blockID",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "getBlockRange",
            "argDefs" : [
                {
                    "name" : "start",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "end",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "getBlockTransactionCount",
            "argDefs" : [
                {
                    "name" : "block",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "getBrokerage",
            "argDefs" : [
                {
                    "name" : "address",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "getChainParameters",
            "argDefs" : [
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "getConfirmedCurrentBlock",
            "argDefs" : [
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "getConfirmedTransaction",
            "argDefs" : [
                {
                    "name" : "transactionID",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "getContract",
            "argDefs" : [
                {
                    "name" : "address",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "getCurrentBlock",
            "argDefs" : [
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "getExchangeByID",
            "argDefs" : [
                {
                    "name" : "id",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "getNodeInfo",
            "argDefs" : [
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "getProposal",
            "argDefs" : [
                {
                    "name" : "proposalID",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "getReward",
            "argDefs" : [
                {
                    "name" : "address",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "getSignWeight",
            "argDefs" : [
                {
                    "name" : "transaction",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "permissionId",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "getTokenByID",
            "argDefs" : [
                {
                    "name" : "id",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "getTokenFromID",
            "argDefs" : [
                {
                    "name" : "id",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "getTokenListByName",
            "argDefs" : [
                {
                    "name" : "name",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "getTokensIssuedByAddress",
            "argDefs" : [
                {
                    "name" : "address",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "getTransaction",
            "argDefs" : [
                {
                    "name" : "transactionID",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "getTransactionFromBlock",
            "argDefs" : [
                {
                    "name" : "index",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "block",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "getTransactionInfo",
            "argDefs" : [
                {
                    "name" : "transactionID",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "getTransactionsFromAddress",
            "argDefs" : [
                {
                    "name" : "address",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "limit",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "offset",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "getTransactionsRelated",
            "argDefs" : [
                {
                    "name" : "address",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "direction",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "limit",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "offset",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "getTransactionsToAddress",
            "argDefs" : [
                {
                    "name" : "address",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "limit",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "offset",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "getUnconfirmedAccount",
            "argDefs" : [
                {
                    "name" : "address",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "getUnconfirmedAccountById",
            "argDefs" : [
                {
                    "name" : "id",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "getUnconfirmedBalance",
            "argDefs" : [
                {
                    "name" : "address",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "getUnconfirmedBrokerage",
            "argDefs" : [
                {
                    "name" : "address",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "getUnconfirmedReward",
            "argDefs" : [
                {
                    "name" : "address",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "getUnconfirmedTransactionInfo",
            "argDefs" : [
                {
                    "name" : "transactionID",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "listExchanges",
            "argDefs" : [
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "listExchangesPaginated",
            "argDefs" : [
                {
                    "name" : "limit",
                    "argType" : {
                        "tag" : "optional"
                    }
                },
                {
                    "name" : "offset",
                    "argType" : {
                        "tag" : "optional"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "listNodes",
            "argDefs" : [
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "listProposals",
            "argDefs" : [
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "listSuperRepresentatives",
            "argDefs" : [
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "listTokens",
            "argDefs" : [
                {
                    "name" : "limit",
                    "argType" : {
                        "tag" : "optional"
                    }
                },
                {
                    "name" : "offset",
                    "argType" : {
                        "tag" : "optional"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "multiSign",
            "argDefs" : [
                {
                    "name" : "transaction",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "privateKey",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "permissionId",
                    "argType" : {
                        "tag" : "optional"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "send",
            "argDefs" : [
                {
                    "name" : "to",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "amount",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "sendAsset",
            "argDefs" : [
                {
                    "name" : "to",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "amount",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "tokenID",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "sendHexTransaction",
            "argDefs" : [
                {
                    "name" : "signedHexTransaction",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "sendRawTransaction",
            "argDefs" : [
                {
                    "name" : "signedTransaction",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "sendToken",
            "argDefs" : [
                {
                    "name" : "to",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "amount",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "tokenID",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "sendTransaction",
            "argDefs" : [
                {
                    "name" : "to",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "amount",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "sendTrx",
            "argDefs" : [
                {
                    "name" : "to",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "amount",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "sign",
            "argDefs" : [
                {
                    "name" : "transaction",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "privateKey",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "useTronHeader",
                    "argType" : {
                        "tag" : "optional"
                    }
                },
                {
                    "name" : "multisig",
                    "argType" : {
                        "tag" : "optional"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "signMessage",
            "argDefs" : [
                {
                    "name" : "transaction",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "privateKey",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "useTronHeader",
                    "argType" : {
                        "tag" : "optional"
                    }
                },
                {
                    "name" : "multisig",
                    "argType" : {
                        "tag" : "optional"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "signString",
            "argDefs" : [
                {
                    "name" : "message",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "privateKey",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "useTronHeader",
                    "argType" : {
                        "tag" : "optional"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "signTransaction",
            "argDefs" : [
                {
                    "name" : "transaction",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "privateKey",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "useTronHeader",
                    "argType" : {
                        "tag" : "optional"
                    }
                },
                {
                    "name" : "multisig",
                    "argType" : {
                        "tag" : "optional"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "timeUntilNextVoteCycle",
            "argDefs" : [
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "unfreezeBalance",
            "argDefs" : [
                {
                    "name" : "resource",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "receiverAddress",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "updateAccount",
            "argDefs" : [
                {
                    "name" : "accountName",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "verifyMessage",
            "argDefs" : [
                {
                    "name" : "message",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "signature",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "address",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "useTronHeader",
                    "argType" : {
                        "tag" : "optional"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "verifySignature",
            "argDefs" : [
                {
                    "name" : "message",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "address",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "signature",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "useTronHeader",
                    "argType" : {
                        "tag" : "optional"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        }
    ]
}
    );
}
      
// Functions

